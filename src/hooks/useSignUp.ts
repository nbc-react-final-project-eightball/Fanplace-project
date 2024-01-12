import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from '@firebase/firestore';

interface LoginResult {
  signUp: (
    email: string,
    userName: string,
    phoneNumber: number,
    adress: string,
    password: string,
  ) => Promise<void>;
}

export const useSignUp = (): LoginResult => {
  const navigate = useNavigate();

  // 로그인
  const signUp = async (
    email: string,
    userName: string,
    phoneNumber: number,
    adress: string,
    password: string,
  ): Promise<void> => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log('response', response);
      await setDoc(doc(db, 'user', response.user.uid), {
        name: userName,
        phoneNumber,
        email,
        adress,
      });
      alert('회원가입이 완료되었습니다.');
    } catch (error: any) {
      console.log(error.message);
      console.log('회원가입 중 오류가 발생했습니다.', error.message);
    }
  };

  return { signUp };
};
