import React, { ComponentProps, useState } from 'react';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useSocialLogin } from '../../hooks/useSocialLogin';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';

const AuthForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number | string>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  // 로그인 훅
  // 깃허브로 로그인
  const {
    socialLogin: githubLogin,
    isPending: githubIsPending,
    error: githubError,
  } = useSocialLogin('github');

  // 구글로 로그인
  const {
    socialLogin: googleLogin,
    isPending: googleIsPending,
    error: googleError,
  } = useSocialLogin('google');

  // 이메일로 로그인
  const { login, isPending, error } = useLogin();

  // if (isLoading) {
  //   return <div>로딩 중..</div>;
  // }
  const InputHandler: ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'userName') {
      setUserName(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(+value);
    } else if (name === 'passwordConfirmation') {
      setPasswordConfirmation(value);
    }
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      if (isLoginForm) {
        await login(email, password);
        // cta[0]));
        alert('로그인 되었습니다.');
        navigate('/');
      } else {
        //회원가입;
        if (!(passwordConfirmation === password)) {
          alert('비밀번호 확인이 일치하지 않습니다');
          return;
        }
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );

        await updateProfile(response.user, { displayName: userName });

        console.log('response', response);
        await setDoc(doc(db, 'user', response.user.uid), {
          name: userName,
          phoneNumber,
          email,
        });
        setEmail('');
        setPassword('');
        setUserName('');
        setPasswordConfirmation('');
        setPhoneNumber('');
        setIsLoginForm(false);
        alert('회원가입이 완료되었습니다.');
        setIsLoginForm(true);
      }
    } catch (error) {
      console.log('알 수 없는 오류가 발생하였습니다.', error);
    }
  };
  return (
    <>
      <S.AuthForm onSubmit={submitHandler}>
        <h2>{isLoginForm ? '로그인' : '회원가입'}</h2>
        {isLoginForm ? (
          <>
            <S.LoginInput
              type="text"
              value={email}
              name="email"
              onChange={InputHandler}
              placeholder="이메일을 입력해주세요"
              required
            />
            <S.LoginInput
              type="password"
              value={password}
              name="password"
              onChange={InputHandler}
              minLength={6}
              maxLength={12}
              placeholder="비밀번호를 입력해주세요(6자~12자)"
              required
            />
          </>
        ) : (
          <>
            <S.LoginInput
              value={userName}
              name="userName"
              onChange={InputHandler}
              type="text"
              maxLength={8}
              placeholder="이름"
              required
            />
            <S.LoginInput
              value={phoneNumber}
              name="phoneNumber"
              onChange={InputHandler}
              type="text"
              maxLength={11}
              placeholder="전화번호(숫자만 엽력해주세요!)"
              required
            />
            <S.LoginInput
              type="text"
              value={email}
              name="email"
              onChange={InputHandler}
              placeholder="이메일을 입력해주세요"
              required
            />
            <S.LoginInput
              type="password"
              value={password}
              name="password"
              onChange={InputHandler}
              minLength={6}
              maxLength={12}
              placeholder="비밀번호를 입력해주세요(6자~12자)"
              required
            />
            <S.LoginInput
              type="password"
              value={passwordConfirmation}
              name="passwordConfirmation"
              onChange={InputHandler}
              minLength={6}
              maxLength={12}
              placeholder="비밀번호 확인을 입력해주세요"
              required
            />
          </>
        )}
        <S.LoginButton type="submit">
          {isLoginForm ? '이메일로 로그인' : '이메일로 회원가입'}
        </S.LoginButton>
        {isLoginForm ? (
          <S.SignUpButton onClick={() => setIsLoginForm(false)}>
            이메일로 회원가입하기
          </S.SignUpButton>
        ) : (
          <S.SignUpButton onClick={() => setIsLoginForm(true)}>
            이메일로 로그인하기
          </S.SignUpButton>
        )}
        <S.LoginButton onClick={googleLogin}>
          {googleIsPending ? 'Loading...' : '구글 로그인'}
        </S.LoginButton>
        <S.LoginButton onClick={githubLogin}>
          {githubIsPending ? 'Loading...' : '깃허브 로그인'}
        </S.LoginButton>
      </S.AuthForm>
    </>
  );
};

export default AuthForm;
