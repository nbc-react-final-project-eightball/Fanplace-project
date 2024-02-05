import { useEffect, useRef } from 'react';
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'HyZccn4pYtFcWyfFC1q1-';

const TossApi = () => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);

  //   const [price, setPrice] = useState(50_000);
  const location = useLocation();
  const { totalPrice } = location.state || { totalPrice: 0 };
  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        '#payment-widget',
        totalPrice,
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);
  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      totalPrice,
      paymentMethodsWidget.UPDATE_REASON.COUPON,
    );
  }, [totalPrice]);

  const requestTossPayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(), //주문번호
        orderName: '토스 티셔츠 외 2건', //주문명
        customerName: '김토스', //주문자명
        customerEmail: 'customer123@gmail.com', //주문자 이메일
        successUrl: `${window.location.origin}/success`, //성공시 이동할 url
        failUrl: `${window.location.origin}/fail`, //실패시 이동할 url
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TossContainer>
      <TossWrapper>
        <div id="payment-widget" />
        <button onClick={requestTossPayment}></button>
      </TossWrapper>
    </TossContainer>
  );
};

export default TossApi;

const TossContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TossWrapper = styled.div`
  background-color: black;
  width: 720px;
  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 450px;
  }
`;
