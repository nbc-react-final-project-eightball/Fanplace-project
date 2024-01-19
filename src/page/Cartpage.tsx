import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import * as S from '../../src/styledComponent/styledCart/StCart';

//Cart Type들
interface TypeCart {
  id: string;
  category: string; //카테고리
  img: string; //이미지
  artist: string; //아티스트
  title: string; //상품이름
  price: number; //가격
  quantity: number; // 선택된수량
}

const Cartpage = () => {
  const [cartList, setCartList] = useState<TypeCart[]>([]);
  const auth = getAuth();
  const user: string | undefined = auth.currentUser?.uid;
  const navigate = useNavigate();
  const paymentHandeler = () => {
    navigate('/payment', { state: { totalPrice } });
  };

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
        if (docSnap.exists()) {
          if (docSnapData) {
            const cartDataArray = docSnapData.cartList;
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
  console.log('cartList', cartList);
  //총금액을 계산하는 로직
  let totalPrice = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }

  return (
    <S.CartContainer>
      <S.CartTItle />
      <S.CartList>
        {cartList.map((cartItem) => (
          <S.CartWrapper key={cartItem.id}>
            <S.Image src={`/${cartItem.img}`}></S.Image>
            <div>아티스트: {cartItem.artist}</div>
            <div>금액: {cartItem.price}</div>
            <div>주문수량: {cartItem.quantity}</div>
            <div>총 금액 {cartItem.price * cartItem.quantity}</div>
          </S.CartWrapper>
        ))}
      </S.CartList>
      <S.TotalAmount>
        <div>총금액 : {totalPrice}</div>
        <button onClick={paymentHandeler}>결제</button>
      </S.TotalAmount>
    </S.CartContainer>
  );
};

export default Cartpage;
