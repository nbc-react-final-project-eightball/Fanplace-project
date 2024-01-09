import React from 'react';
import * as S from '../../styledComponent/styledLogin/StLoginForm';
const LoginForm = () => {
  return (
    <>
      <S.LoginForm>
        <S.LoginInput type="text" placeholder="아이디를 입력해주세요" />
        <S.LoginInput
          type="password"
          minLength={6}
          maxLength={12}
          placeholder="비밀번호를 입력해주세요(6자~12자)"
        />
        <S.LoginButton>로그인</S.LoginButton>
        <S.LoginButton>구글 로그인</S.LoginButton>
      </S.LoginForm>
    </>
  );
};

export default LoginForm;
