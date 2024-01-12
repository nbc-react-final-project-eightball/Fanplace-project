import {
  AuthErrorCodes,
  signInWithEmailAndPassword,
  updateProfile,
} from '@firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginResult {
  login: (email: string | null, password: string | null) => Promise<void>;
  isPending: boolean;
  error: string | null;
}

export const useLogin = (): LoginResult => {
  const navigate = useNavigate();

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
      await signInWithEmailAndPassword(auth, email.trim(), password.trim());
      console.log('user login');
      // await updateProfile(email, { displayName: userName });
      alert('로그인 되었습니다1.');
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
