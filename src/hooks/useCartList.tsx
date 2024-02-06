import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { TypeCart } from 'Type/TypeInterface';
import { useQuery } from 'react-query';

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
  };
};

export default useCartList;
