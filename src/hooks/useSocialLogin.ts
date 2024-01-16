import {
  AuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/modules/signup/signUpSlice';

interface SocialLoginResult {
  socialLogin: () => Promise<void>;
  isPending: boolean;
  error: boolean | null;
}

type AuthProviderType = 'github' | 'google';

export const useSocialLogin = (
  providerType: AuthProviderType,
): SocialLoginResult => {
  const navigate = useNavigate();

  const [error, setError] = useState<boolean | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  let provider: AuthProvider;

  provider =
    providerType === 'github'
      ? new GithubAuthProvider()
      : new GoogleAuthProvider();

  const dispatch = useDispatch();

  const socialLogin: () => Promise<void> = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error('Could not complete signup');
      }

      const user = res.user;
      const displayName = user.displayName || 'Guest';

      dispatch(logIn({ userInfo: user.providerData[0] }));
      alert('로그인 되었습니다2.');
      navigate('/');
      setIsPending(false);
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { socialLogin, isPending, error };
};
