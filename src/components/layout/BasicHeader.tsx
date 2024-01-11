import styled from 'styled-components';
import * as S from '../../styledComponent/styledHeader/StHeader';
import { useNavigate } from 'react-router-dom';
import ProfileCard from 'components/ProfileCard';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

const BasicHeader = () => {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate('/');
  };
  const loginHandler = () => {
    navigate('/login');
  };
  const wishListHandler = () => {
    navigate('/');
  };

  const data = useContext(AuthContext);
  const user = data.state.user;
  console.log(user, 'name 찾기');

  return (
    <S.HeaderContainer>
      <S.BrandTitle>
        <span></span>
      </S.BrandTitle>
      <S.Wrapper>
        <S.Header>
          <S.BrandLogo onClick={homeClickHandler}>FancyPlace</S.BrandLogo>
        </S.Header>
        <S.Header>
          <S.HeaderButton>
            {user ? (
              <ProfileCard user={user} />
            ) : (
              <button onClick={loginHandler}>로그인</button>
            )}
            <button onClick={wishListHandler}>장바구니</button>
            <button>KoR \</button>
          </S.HeaderButton>
        </S.Header>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default BasicHeader;
