import {
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
} from '@firebase/auth';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { register } from '../redux/modules/signup/signUpSlice';
import { useDispatch } from 'react-redux';

interface LoginResult {
  signUp: (
    email: string,
    // userInfo: UserInfo,
    displayName: string,
    phoneNumber: number,
    isLogged: boolean,
    address: string,
    detailAddress: string,
    password: string,
  ) => Promise<void>;
}

export const useSignUp = (): LoginResult => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 로그인
  const signUp = async (
    // userInfo: UserInfo,
    email: string,
    displayName: string,
    phoneNumber: number,
    isLogged: boolean,
    address: string,
    detailAddress: string,
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

      console.log('회원가입 시 전화번호는?', phoneNumber);

      console.log('회원가입 시 입력한 세부 주소 ', detailAddress);
      dispatch(
        register({
          userInfo: user.providerData[0],
          // isLogged: true,
          address,
          detailAddress,
          phoneNumber,
        }),
      );

      await setDoc(userDocRef, {
        displayName,
        phoneNumber,
        email,
        address,
        detailAddress,
      });
      alert('회원가입이 완료되었습니다.');
      navigate('/');
    } catch (error: any) {
      console.log(error.message);
      console.log('회원가입 중 오류가 발생했습니다.', error.message);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return { signUp };
};
