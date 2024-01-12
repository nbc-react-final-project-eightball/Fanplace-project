import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';

interface LoginResult {
  login: (email: string | null, password: string | null) => Promise<void>;
  isPending: boolean;
  error: string | null;
}

export const useLogin = (): LoginResult => {
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
      setIsPending(false);
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
