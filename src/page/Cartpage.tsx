import { db } from '../firebase/config';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';

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
  const userUID = 'dKSTD7ENlnWUXkuBLMV1MIXdPbg2';
  const navigate = useNavigate();

  const paymentHandeler = () => {
    navigate('/payment', { state: { totalPrice } });
  };
  useEffect(() => {
    const fetch = async () => {
      try {
        const docRef = doc(db, 'cart', userUID);
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

  if (cartList.length === 0) return null;
  console.log('cartList', cartList);

  let totalPrice = 0;

  for (let i = 0; i < cartList.length; i++) {
    totalPrice += cartList[i].price * cartList[i].quantity;
  }

  return (
    <CartContainer>
      <CartTItle />
      <CartList>
        {cartList.map((cartItem) => (
          <CartWrapper key={cartItem.id}>
            <Image>
              <img src={`/${cartItem.img}`}></img>
            </Image>
            <div>아티스트: {cartItem.artist}</div>
            <div>금액: {cartItem.price}</div>
            <div>주문수량: {cartItem.quantity}</div>
            <div>총 금액 {cartItem.price * cartItem.quantity}</div>
          </CartWrapper>
        ))}
      </CartList>
      <TotalAmount>
        <div>총금액 : {totalPrice}</div>
        <button onClick={paymentHandeler}>결제</button>
      </TotalAmount>
    </CartContainer>
  );
};

export default Cartpage;

const CartContainer = styled.div`
  border: solid black 2px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTItle = styled.div`
  border: solid black 2px;
  width: 100%;
  height: 60vh;
`;

const CartList = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;

const CartWrapper = styled.li`
  display: flex;

  gap: 12px;
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
`;
const Image = styled.div`
  width: 300px;
  height: 300px;
`;

const TotalAmount = styled.div`
  margin-top: 100px;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  color: white;

  div {
    font-size: x-large;
    height: 100px;
  }
  button {
    background-color: white;
    width: 100px;
    height: 50px;
    color: black;
  }
`;
