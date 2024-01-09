import React from 'react';
import * as S from '../styledComponent/styledAuth/StAuth';
import AuthForm from '../components/auth/AuthForm';
const Authpage = () => {
  return (
    <>
      <S.LoginTitle>로그인</S.LoginTitle>
      <AuthForm></AuthForm>
    </>
  );
};

export default Authpage;
