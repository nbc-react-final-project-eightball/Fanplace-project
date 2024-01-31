import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as S from '../../src/styledComponent/styledCart/StCart';
import PaymentInfo from 'components/Cart/PaymentInfo';
import { TypeCart } from 'Type/TypeInterface';
import CartListInfo from 'components/Cart/CartListInfo';
import TopSide from 'components/Cart/TopSide';

const Cartpage = () => {
  const [cartList, setCartList] = useState<TypeCart[]>([]);
  const auth = getAuth();
  const user: string | undefined = auth.currentUser?.uid;

  //fireBase CartList Collction가져오기
  useEffect(() => {
    const fetch = async () => {
      //user정보가 없으면 리턴하기
      //추후 로그인정보가 없으면 로그인시키기 추가예정
      if (!user) return;
      try {
        const docRef = doc(db, 'cartList', user);
        const docSnap = await getDoc(docRef);
        const docSnapData = docSnap.data();
        console.log('docSnapData', docSnapData);
        console.log('docSnap.id :', docSnap.id);

        if (docSnap.exists()) {
          if (docSnapData) {
            const cartDataArray = docSnapData.cartList;
            console.log('cartDataArray:', cartDataArray);
            setCartList(cartDataArray as TypeCart[]);
          }
        } else {
          console.log('Document does not exist!');
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetch();
  }, []);
  //cartList에 담긴게 없으면 0
  if (cartList.length === 0) return null;
  //총금액을 계산하는 로직
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }
  //주문금액이 5만원이하면 배송비 3000원붙음
  const shippingCost = totalPrice <= 50000 ? 3000 : 0;
  const totalPayment = totalPrice + shippingCost;

  return (
    <S.CartContainer>
      <S.Cart>
        <TopSide />
        <S.Wrapper>
          <CartListInfo
            cartList={cartList}
            setCartList={setCartList}
            totalPrice={totalPrice}
            shippingCost={shippingCost}
            totalPayment={totalPayment}
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
