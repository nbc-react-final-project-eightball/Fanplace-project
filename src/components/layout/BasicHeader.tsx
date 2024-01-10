import styled from 'styled-components';
import * as S from '../../styledComponent/styledHeader/StHeader';
import { useNavigate } from 'react-router-dom';

const BasicHeader = () => {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate('/');
  };
  const loginHandler = () => {
    navigate('/');
  };
  const wishListHandler = () => {
    navigate('/');
  };
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
            <button onClick={loginHandler}>로그인</button>
            <button onClick={wishListHandler}>장바구니</button>
            <button>KoR \</button>
          </S.HeaderButton>
        </S.Header>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default BasicHeader;
