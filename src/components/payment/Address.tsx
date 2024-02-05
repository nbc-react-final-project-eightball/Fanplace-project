import { useEffect, useState } from 'react';
import * as S from '../../../src/styledComponent/styledPayment/stPayment';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface userInfo {
  userUid: string;
  displayName: string;
  address: string;
  phoneNumber: string;
}

const Address = () => {
  const [userData, setUserData] = useState<userInfo>();
  const auth = getAuth();
  const userUid: string | undefined = auth.currentUser?.uid;

  useEffect(() => {
    const fetchData = async () => {
      // User 정보가 없으면 리턴하기
      if (!userUid) return;

      try {
        const userRef = doc(db, 'user', userUid); // Create a reference to the specific document
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          if (userData) {
            setUserData(userData as userInfo);
          }
        } else {
          console.log('문서가 존재하지 않음');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [userUid]);

  return (
    <S.Address>
      <h3>배송지</h3>
      {userData && (
        <S.InfoWrapper>
          <h4>이름 : {userData.displayName}</h4>
          <span>연락처 : {userData.phoneNumber}</span>
          <p>배송지 : {userData.address}</p>
        </S.InfoWrapper>
      )}
    </S.Address>
  );
};

export default Address;
