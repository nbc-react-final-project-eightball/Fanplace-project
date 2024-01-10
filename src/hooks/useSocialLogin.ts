import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';

interface LoginResult {
  login: () => Promise<void>;
  isPending: boolean;
  error: boolean | null;
}

type AuthProviderType = 'github' | 'google';

export const useSocialLogin = (providerType: AuthProviderType): LoginResult => {
  const [error, setError] = useState<boolean | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  let provider: AuthProvider;

  provider =
    providerType === 'github'
      ? new GithubAuthProvider()
      : new GoogleAuthProvider();

  const login: () => Promise<void> = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error('Could not complete signup');
      }

      const user = res.user;
      console.log(user);
      setIsPending(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { login, isPending, error };
};
