import * as S from '../../src/styledComponent/styledPayment/stPayment';
import PaymentInfo from 'components/Cart/PaymentInfo';
import TossApi from 'components/payment/TossApi';
import useCartList from 'hooks/useCartList';
import ProgressIndicator from 'components/Cart/ProgressIndicator';
import OrderListInfo from 'components/Cart/OrderListInfo';
import { TypeCart } from 'Type/TypeInterface';
import Address from 'components/payment/Address';
import useTossPayment from 'hooks/useTossApi';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const getTotalPrice = (cartList: TypeCart[]) => {
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  return totalPrice;
};

// 3. useSelector 로 받아와서 OrderListInfo
const PaymentPage = () => {
  const title = '주문결제';

  //아래부분 수정예정
  //리덕스에서 불러온 새로운 리스트를 불러와야한다
  const { cartList, setCartList } = useCartList();
  // const orderList = useSelector((state) => state.orderListSlice);

  // const {
  //   state: {
  //     product: { productList: totalPayments },
  //   },
  // } = useLocation();

  const totalPrice = getTotalPrice(cartList);

  //TossApi를 호출
  const { requestTossPayment } = useTossPayment({
    clientKey: 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm',
    customerKey: 'HyZccn4pYtFcWyfFC1q1-',
    defaultTotalPrice: totalPrice,
  });

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

  if (cartList.length === 0) return null;

  //주문금액이 5만원이하면 배송비 3000원붙음
  const shippingCost = totalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;

  return (
    <>
      <S.PaymentContainer>
        <S.Payment>
          <ProgressIndicator title={title} />
          <S.Wrapper>
            <OrderListInfo
              //productList={orderList}
              productList={cartList}
              setCartList={setCartList}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
            />
            <S.PaymentSection>
              <Address />
              <S.ApiWrapper>
                <TossApi />
              </S.ApiWrapper>
            </S.PaymentSection>
            <PaymentInfo
              onClickBuyButton={handlePaymentRequest}
              itemCount={cartList.length}
              totalPrice={totalPrice}
              shippingCost={shippingCost}
              totalPayment={totalPayment}
              cartAndPayment={true}
            />
          </S.Wrapper>
        </S.Payment>
      </S.PaymentContainer>
    </>
  );
};

export default PaymentPage;
