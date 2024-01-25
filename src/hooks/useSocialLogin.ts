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

  const getGitHubUserData = async (githubIdOrLogin: string | undefined) => {
    const response = await fetch(
      `https://api.github.com/user/${githubIdOrLogin}`,
      { headers: { Accept: 'application/json' } },
    );
    return response.json();
  };

  const socialLogin: () => Promise<void> = async () => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithPopup(auth, provider);
      if (!res) {
        throw new Error('알 수 없는 오류가 발생했습니다.');
      }

      const user = res.user;

      let displayName;
      if (providerType === 'github') {
        const id = user.email?.split('@')[0];
        getGitHubUserData(id);
        const githubProviderData = user.providerData.find(
          (pd) => pd.providerId === 'github.com',
        );

        const githubUserData = await getGitHubUserData(githubProviderData?.uid);
        console.log('githubUserData', githubUserData);
        displayName = githubUserData.login;
        dispatch(
          logIn({
            userInfo: { ...user.providerData[0], displayName },
            isLogged: true,
          }),
        );
      } else {
        dispatch(
          logIn({
            userInfo: user.providerData[0],
            isLogged: true,
          }),
        );
      }

      alert('로그인 되었습니다.');
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
