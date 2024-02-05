import { useNavigate } from 'react-router-dom';
import * as S from '../../styledComponent/styledCart/StCart';
import { TypeCart } from 'Type/TypeInterface';
import useTossPayment from '../../../src/hooks/useTossApi';
import { useEffect } from 'react';

interface Props {
  cartList: TypeCart[];
  totalPrice: number;
  shippingCost: number;
  totalPayment: number;
  cartAndPayment: boolean;
}

const PaymentInfo = ({
  cartList,
  totalPrice,
  shippingCost,
  totalPayment,
  cartAndPayment,
}: Props) => {
  const navigate = useNavigate();
  const paymentHandeler = () => {
    navigate('/payment', {
      state: { cartList, totalPrice, shippingCost, totalPayment },
    });
  };

  const { initializeTossPayment, updateTotalPrice, requestTossPayment } =
    useTossPayment({
      clientKey: 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm',
      customerKey: 'HyZccn4pYtFcWyfFC1q1-',
      defaultTotalPrice: totalPrice,
    });

  useEffect(() => {
    // You can initialize Toss payment with a different total price here if needed.
    // initializeTossPayment(someOtherTotalPrice);
  }, []);

  const handlePaymentRequest = () => {
    requestTossPayment({
      orderId: 'someOrderId',
      orderName: '토스 티셔츠 외 2건',
      customerName: '김토스',
      customerEmail: 'customer123@gmail.com',
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
    });
  };

  return (
    <S.RightContainer>
      <S.PaymentInfo>결제정보</S.PaymentInfo>
      <S.BoxWrapper>
        <S.Box>
          <h3>상품수</h3>
          <span>{cartList.length}</span>
        </S.Box>
        <S.Box>
          <h3>상품금액</h3>
          <span>{totalPrice.toLocaleString()}원</span>
        </S.Box>
        <S.Box>
          <h3>배송비</h3>
          <span>{shippingCost}</span>
        </S.Box>
        <S.Box>
          <h2>
            총 결제 금액 <span>{totalPayment.toLocaleString()}원</span>
          </h2>
        </S.Box>
      </S.BoxWrapper>
      {cartAndPayment ? (
        <S.PaymentButton onClick={handlePaymentRequest}>
          구매하기
        </S.PaymentButton>
      ) : (
        <S.PaymentButton onClick={paymentHandeler}>결제하기</S.PaymentButton>
      )}
    </S.RightContainer>
  );
};

export default PaymentInfo;
