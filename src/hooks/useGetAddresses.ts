import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { setAddresses } from '../redux/modules/shipping/shippingSlice';
import { RootState } from 'redux/configStore';

export const useGetAddresses = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.signUpSlice.userInfo);

  const getAddresses = async () => {
    try {
      // console.log('getAddresses user 는', user?.uid);
      const q = query(
        collection(db, 'addresses'),
        where('userId', '==', user?.uid),
      );

      const querySnapshot = await getDocs(q);
      const addresses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return { addresses: addresses }; // 주소 데이터 반환
    } catch (error) {
      console.error('Error fetching data:', error);
      return { addresses: [] }; // 에러 발생 시 빈 배열 반환
    }
  };

  useEffect(() => {
    if (user) {
      getAddresses().then((data) => {
        dispatch(setAddresses(data)); // 주소 데이터를 dispatch
      });
    }
  }, [dispatch, user]);

  return { getAddresses };
};
