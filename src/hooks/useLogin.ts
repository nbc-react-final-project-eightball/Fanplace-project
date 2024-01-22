import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  updateProfile,
} from '@firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../redux/modules/signup/signUpSlice';
import { useDispatch } from 'react-redux';

interface LoginResult {
  login: (email: string | null, password: string | null) => Promise<void>;
  isPending: boolean;
  error: string | null;
}

export const useLogin = (): LoginResult => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 로그인
  const login = async (
    email: string | null,
    password: string | null,
  ): Promise<void> => {
    setError(null);
    setIsPending(true);

    try {
      if (email === null || password === null) {
        throw new Error('Email and password are required.');
      }
      const signIn = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password.trim(),
      );
      dispatch(logIn({ userInfo: signIn.user.providerData[0] }));
      alert('로그인 되었습니다.');
      navigate('/');
      setIsPending(false);
    } catch (error: any) {
      console.log(error.message);
      if (
        error.code === AuthErrorCodes.INVALID_PASSWORD ||
        error.code === AuthErrorCodes.INVALID_EMAIL
      ) {
        setError('아이디 혹은 비밀번호를 확인해주세요.');
        alert('아이디 혹은 비밀번호를 확인해주세요.');
      } else if (error.code === AuthErrorCodes.USER_DISABLED) {
        setError('등록되지 않은 사용자입니다.');
        alert('등록되지 않은 사용자입니다.');
      } else {
        setError('로그인 중 오류가 발생했습니다.');
        alert('로그인 중 오류가 발생했습니다.');
      }
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
