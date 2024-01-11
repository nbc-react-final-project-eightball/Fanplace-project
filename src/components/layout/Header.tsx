import { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledLayout/StHeader';
import { useNavigate } from 'react-router-dom';

const Header = () => {
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
  const [scrollPostion, setScrollPoistion] = useState<number>(0);
  const updateScroll = () => {
    setScrollPoistion(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <S.HeaderContainer color={scrollPostion < 150 ? 'transparent' : 'black'}>
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

export default Header;
