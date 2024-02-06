import * as S from '../../styledComponent/styledCart/StCart';

interface Props {
  itemCount: number;
  totalPrice: number;
  shippingCost: number;
  totalPayment: number;
  cartAndPayment: boolean;
  onClickBuyButton: () => void;
}

const PaymentInfo = ({
  itemCount,
  totalPrice,
  shippingCost,
  totalPayment,
  cartAndPayment,
  onClickBuyButton,
}: Props) => {
  return (
    <S.RightContainer>
      <S.PaymentInfo>결제정보</S.PaymentInfo>
      <S.BoxWrapper>
        <S.Box>
          <h3>상품수</h3>
          <span>{itemCount}</span>
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
      <S.PaymentButton onClick={onClickBuyButton}>
        {cartAndPayment ? '구매하기' : '결제하기'}
      </S.PaymentButton>
    </S.RightContainer>
  );
};

export default PaymentInfo;
