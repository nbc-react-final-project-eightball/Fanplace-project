import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { TypeCart } from 'Type/TypeInterface';
import { useQuery } from 'react-query';
import { nanoid } from '@reduxjs/toolkit';

interface UpdateCartListState {
  (updatedCartList: TypeCart[]): void;
}

const useCartList = () => {
  const [cartList, setCartList] = useState<TypeCart[]>([]);
  const auth = getAuth();
  const user: string | undefined = auth.currentUser?.uid;

  const fetch = async () => {
    //user정보가 없으면 리턴하기
    if (!user) return;
    try {
      const docRef = doc(db, 'cartList', user);
      const docSnap = await getDoc(docRef);
      const docSnapData = docSnap.data();

      if (docSnap.exists()) {
        if (docSnapData) {
          const cartDataArray = docSnapData.cartList;
          return cartDataArray as TypeCart[];
        }
      } else {
        console.log('문서가 존재하지 않음');
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const updateCartList = async (updatedCartList: TypeCart[]) => {
    if (!user) return;
    try {
      const docRef = doc(db, 'cartList', user);
      await updateDoc(docRef, { cartList: updatedCartList });
    } catch (error) {
      console.error('Error updating cart data:', error);
    }
  };

  const removeCartItemHandler = async (itemId: number) => {
    try {
      // 해당 상품 제거 로직
      const updatedCartList = cartList.filter(
        (item) => item.productId !== itemId,
      );
      await updateCartList(updatedCartList);
    } catch (error) {
      console.error('에러발생', error);
    }
  };

  const orderPaymentList = async (
    selectedItems: TypeCart[],
    totalPayment: number,
  ) => {
    try {
      // 사용자 ID를 기반으로 사용자의 주문 정보를 가져오거나 생성합니다.
      const userPaymentRef = doc(collection(db, 'orderList'), user);

      const docSnap = await getDoc(userPaymentRef);
      const orderId = nanoid();
      const ordersArray = selectedItems.map((product) => ({
        orderId: orderId,
        category: product.category,
        img: product.img,
        artist: product.artist,
        title: product.title,
        quantity: product.quantity,
        price: product.price,
        totalPayment: totalPayment,
        productId: product.productId,
        completPayment: false,
      }));

      if (docSnap.exists()) {
        // 이미 주문 정보가 있는 경우 ordersList에 새로운 주문을 추가합니다.
        await updateDoc(userPaymentRef, {
          ordersList: arrayUnion(...ordersArray),
        });
      } else {
        // 주문 정보가 없는 경우 새로운 문서를 생성하고 ordersList 필드를 설정합니다.
        await setDoc(userPaymentRef, {
          ordersList: ordersArray,
        });
      }
      return orderId;
    } catch (error) {
      console.error('에러발생', error);
    }
  };

  const query = useQuery({
    queryKey: 'cartList',
    queryFn: fetch,
    enabled: user !== undefined,
  });

  useEffect(() => {
    if (query.data) {
      setCartList(query.data);
    }
  }, [query.data]);

  const changeCartListHandler: UpdateCartListState = (updatedCartList) => {
    setCartList(updatedCartList);
    updateCartList(updatedCartList);
  };

  return {
    cartList,
    setCartList,
    changeCartListHandler,
    removeCartItemHandler,
    orderPaymentList,
  };
};

export default useCartList;
