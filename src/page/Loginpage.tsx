import React from 'react';
import * as S from '../styledComponent/styledLogin/StLogin';
import LoginForm from '../component/login/LoginForm';
const Loginpage = () => {
  return (
    <>
      <S.LoginTitle>로그인</S.LoginTitle>
      <LoginForm></LoginForm>
    </>
  );
};

export default Loginpage;
