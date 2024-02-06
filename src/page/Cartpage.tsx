import * as S from '../../src/styledComponent/styledCart/StCart';
import PaymentInfo from 'components/Cart/PaymentInfo';
import OrderListInfo from 'components/Cart/OrderListInfo';
import ProgressIndicator from 'components/Cart/ProgressIndicator';
import useCartList from 'hooks/useCartList';
import { TypeCart } from 'Type/TypeInterface';
import CartEmpty from 'components/Cart/CartEmpty';
import { useNavigate } from 'react-router-dom';

//총금액을 계산하는 로직
const getTotalPrice = (cartList: TypeCart[]) => {
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  return totalPrice;
};

const Cartpage = () => {
  const { cartList, setCartList, changeCartListHandler } = useCartList();
  const totalPrice = getTotalPrice(cartList);
  const navigate = useNavigate();

  //주문금액이 5만원이하면 배송비 3000원붙음
  const shippingCost = totalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;
  const title = '장바구니';

  // 장바구니 수량 추가
  const addQuantityHandler = (itemId: number) => {
    const updatedCartList = cartList.map((item) =>
      item.productId === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );

    changeCartListHandler(updatedCartList);
    // 업데이트 함수로 변경
  };

  // 장바구니 수량 감소
  const subQuantityHandler = (itemId: number) => {
    const updatedCartList = cartList.map((item) =>
      item.productId === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    changeCartListHandler(updatedCartList); // 업데이트 함수로 변경
  };

  const changeQuantityHandler = (itemId: number, isPlusButton: boolean) => {
    if (isPlusButton === true) {
      addQuantityHandler(itemId);
    } else {
      subQuantityHandler(itemId);
    }
  };
  const paymentHandeler = () => {
    navigate('/payment', {
      state: { cartList, totalPrice, shippingCost, totalPayment },
    });
  };

  return (
    <S.CartContainer>
      {cartList.length == 0 ? (
        <CartEmpty />
      ) : (
        <S.Cart>
          <ProgressIndicator title={title} />
          <S.Wrapper>
            <OrderListInfo
              productList={cartList}
              setCartList={setCartList}
              onChangeQuantity={changeQuantityHandler}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
              isCartPage
            />
            <PaymentInfo
              onClickBuyButton={paymentHandeler}
              itemCount={cartList.length}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
              cartAndPayment={false}
            />
          </S.Wrapper>
        </S.Cart>
      )}
    </S.CartContainer>
  );
};

export default Cartpage;
