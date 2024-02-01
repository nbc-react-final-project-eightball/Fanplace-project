import * as S from '../../src/styledComponent/styledCart/StCart';
import PaymentInfo from 'components/Cart/PaymentInfo';
import CartListInfo from 'components/Cart/CartListInfo';
import ProgressIndicator from 'components/Cart/ProgressIndicator';
import useCartList from 'hooks/useCartList';
import { TypeCart } from 'Type/TypeInterface';

//총금액을 계산하는 로직
const getTotalPrice = (cartList: TypeCart[]) => {
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  return totalPrice;
};

const Cartpage = () => {
  const { cartList, setCartList } = useCartList();
  const totalPrice = getTotalPrice(cartList);

  //cartList에 담긴게 없으면 0
  if (cartList.length === 0) return null;

  //주문금액이 5만원이하면 배송비 3000원붙음
  const shippingCost = totalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;

  const title = '장바구니';

  return (
    <S.CartContainer>
      <S.Cart>
        <ProgressIndicator title={title} />
        <S.Wrapper>
          <CartListInfo
            cartList={cartList}
            setCartList={setCartList}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            totalPayment={totalPayment}
            hasCheckbox={true}
          />
          <PaymentInfo
            cartList={cartList}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            totalPayment={totalPayment}
          />
        </S.Wrapper>
      </S.Cart>
    </S.CartContainer>
  );
};

export default Cartpage;
