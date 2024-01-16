import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { logIn } from '../redux/modules/signup/signUpSlice';
import { useDispatch } from 'react-redux';

interface LoginResult {
  signUp: (
    email: string,
    displayName: string,
    phoneNumber: number,
    Address: string,
    password: string,
  ) => Promise<void>;
}

export const useSignUp = (): LoginResult => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 로그인
  const signUp = async (
    email: string,
    displayName: string,
    phoneNumber: number,
    address: string,
    password: string,
  ): Promise<void> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = response.user;
      console.log('address_______유효한', address);
      const db = getFirestore();
      const userDocRef = doc(db, 'user', response.user.uid);
      await updateProfile(user, { displayName });

      dispatch(logIn({ userInfo: user.providerData[0] }));
      await setDoc(userDocRef, {
        name: displayName,
        phoneNumber,
        email,
        address,
      });
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error: any) {
      console.log(error.message);
      console.log('회원가입 중 오류가 발생했습니다.', error.message);
    }
  };

  return { signUp };
};
