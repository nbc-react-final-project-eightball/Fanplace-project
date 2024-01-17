import { useEffect, useState } from 'react';
import * as S from 'styledComponent/styledLayout/StHeader';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from 'components/ProfileCard';
import { useSelector } from 'react-redux';
//헤더수정
const Header = () => {
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
  const [scrollPostion, setScrollPoistion] = useState<number>(0);
  const updateScroll = () => {
    setScrollPoistion(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const userData = useSelector(
    (state: { signUpSlice: any }) => state.signUpSlice,
  );
  const isLogged = userData.isLogged;
  console.log(
    'Header에서 signUpSlice isLogged______',
    isLogged,
    'userData_______',
    userData,
  );

  return (
    <S.HeaderContainer color={scrollPostion < 150 ? 'transparent' : 'black'}>
      <S.Wrapper>
        <S.Header>
          <S.BrandLogo onClick={homeClickHandler}>
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
              alt="FancyPlace Logo"
            />
            FancyPlace
          </S.BrandLogo>
        </S.Header>
        <S.Header>
          <S.HeaderButton>
            <button>
              <img
                src={`${process.env.PUBLIC_URL}/img/common/search.svg`}
                alt="search icon"
              />
            </button>
            {isLogged ? (
              <ProfileCard user={userData.userInfo} />
            ) : (
              <button onClick={loginHandler}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/common/user.svg`}
                  alt="auth icon"
                />
                로그인
              </button>
            )}
            <button onClick={wishListHandler}>
              <img
                src={`${process.env.PUBLIC_URL}/img/common/shopping.svg`}
                alt="shopping cart icon"
              />
            </button>
            <S.Exchange>
              <img
                src={`${process.env.PUBLIC_URL}/img/common/KRW.svg`}
                alt="KRW icon"
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/common/down-arrow.svg`}
                alt="down-arrow icon"
              />
            </S.Exchange>
          </S.HeaderButton>
        </S.Header>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
