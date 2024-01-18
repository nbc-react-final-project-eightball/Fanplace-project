import React from 'react';
import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import * as S from 'styledComponent/styledLayout/StHeader';

const ProfileCard = () => {
  const { logout } = useLogout();
  return (
    <>
      <S.ProfileCard>
        <Link to={'/mypage'}>
          <img
            src={`${process.env.PUBLIC_URL}/img/common/user.svg`}
            alt="auth"
          />
        </Link>
        <S.LogoutButton onClick={logout}>로그아웃</S.LogoutButton>
      </S.ProfileCard>
    </>
  );
};

export default ProfileCard;
