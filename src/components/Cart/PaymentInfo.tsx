import { useNavigate } from 'react-router-dom';
import * as S from '../../styledComponent/styledCart/StCart';
import { TypeCart } from 'Type/TypeInterface';

interface Props {
  cartList: TypeCart[];
  totalPrice: number;
  shippingCost: number;
  totalPayment: number;
}

const PaymentInfo = ({
  cartList,
  totalPrice,
  shippingCost,
  totalPayment,
}: Props) => {
  const navigate = useNavigate();
  const paymentHandeler = () => {
    navigate('/payment', {
      state: { cartList, totalPrice, shippingCost, totalPayment },
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
      <S.PaymentButton onClick={paymentHandeler}>구매하기</S.PaymentButton>
    </S.RightContainer>
  );
};

export default PaymentInfo;
