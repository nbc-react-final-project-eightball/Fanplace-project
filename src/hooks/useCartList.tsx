import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { TypeCart } from 'Type/TypeInterface';
import { useQuery } from 'react-query';

const useCartList = () => {
  const [cartList, setCartList] = useState<TypeCart[]>([]);
  const auth = getAuth();
  const user: string | undefined = auth.currentUser?.uid;

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
          // setCartList(cartDataArray as TypeCart[]);
          return cartDataArray as TypeCart[];
        }
      } else {
        console.log('Document does not exist!');
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
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

  return {
    cartList,
    setCartList,
  };
};

export default useCartList;
