import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';
import { setData } from '../redux/modules/shipping/shippingSlice';

export const useGetAddresses = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'yourCollection'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const formattedData = { data: data };
        console.log('formattedData는', formattedData);
        // 데이터를 리덕스 스토어에 저장
        dispatch(setData(formattedData));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  }, [dispatch]);
};
