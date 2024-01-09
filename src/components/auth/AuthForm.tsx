import React, { ComponentProps, useState } from 'react';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
// import { auth } from 'firebase/firebase';
// import { auth } from '../../firebase/firebase';

const AuthForm = () => {
  const [userName, setUserName] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

  const InputHandler: ComponentProps<'input'>['onChange'] = (e) => {
    const { name, value } = e.target;
    console.log('name,value', name, '+', value);

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

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <S.AuthForm onSubmit={submitHandler}>
        <h2>회원가입</h2>
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
          type="number"
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
        <S.LoginButton type="submit">로그인</S.LoginButton>
        <S.LoginButton>구글 로그인</S.LoginButton>
      </S.AuthForm>
    </>
  );
};

export default AuthForm;
