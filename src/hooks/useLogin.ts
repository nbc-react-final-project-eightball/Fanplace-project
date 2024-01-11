import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';

interface LoginResult {
  login: (email: string, password: string) => Promise<void>;
  isPending: boolean;
  error: string | null;
}

export const useLogin = (): LoginResult => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 로그인
  const login = async (email: string, password: string): Promise<void> => {
    setError(null);
    setIsPending(true);

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
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
