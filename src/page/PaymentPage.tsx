import { useEffect, useRef } from 'react';
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import '../App.css';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as S from '../../src/styledComponent/styledCart/StCart';

const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
const customerKey = 'HyZccn4pYtFcWyfFC1q1-';
const PaymentPage = () => {
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

  const adad = async () => {
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
    <>
      <PaymentContainer>
        <S.RightArea>
          <S.PaymentInfo>결제정보</S.PaymentInfo>
          <S.BoxWrapper>
            <S.Box>
              <h3>상품수</h3>
              <span></span>
            </S.Box>
            <S.Box>
              <h3>상품금액</h3>
              <span>{totalPrice.toLocaleString()}원</span>
            </S.Box>
            <S.Box>
              <h3>배송비</h3>
              <span></span>
            </S.Box>
            <S.Box>
              <h2>
                총 결제 금액 <span>{totalPrice.toLocaleString()}원</span>
              </h2>
            </S.Box>
          </S.BoxWrapper>
          <S.PaymentButton onClick={adad}>구매하기</S.PaymentButton>
        </S.RightArea>
        <div>
          <div id="payment-widget" />
        </div>
      </PaymentContainer>
    </>
  );
};

export default PaymentPage;

const PaymentContainer = styled.div`
  width: 720px;
  height: 305px;
  padding-left: 165px;
`;
