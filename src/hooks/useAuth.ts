import { auth, db } from '../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import {
  setAddress,
  setPhoneNumber,
  setUserInfo,
} from '../redux/modules/signup/signUpSlice';
import { getDoc, doc } from '@firebase/firestore';
export const useAuth = () => {
  const dispatch = useDispatch();

  const userAuth = () => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        console.log('로그인한 유저는?', authUser);

        const userDocRef = doc(db, 'user', authUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log('Firestore에서 가져온 유저 데이터:', userData);

          if (userData.email === authUser.email) {
            dispatch(setPhoneNumber({ phoneNumber: userData.phoneNumber }));

            dispatch(
              setAddress({
                address: userData.address,
                detailAddress: userData.detailAddress,
              }),
            );
            dispatch(
              setUserInfo({
                userInfo: { ...authUser, displayName: userData.displayName },
              }),
            );
          } else {
            console.log(
              'Firestore 데이터와 인증된 유저의 정보가 일치하지 않습니다.',
            );
          }
        } else {
          console.log('Firestore에서 해당 유저의 데이터를 찾을 수 없습니다.');
        }
      }
    });
    return unsubscribe;
  };

  return { userAuth };
};
