import { useEffect, useState } from 'react';
import * as S from 'styledComponent/styledLayout/StHeader';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from 'components/ProfileCard';
import { useSelector } from 'react-redux';
import CustomSelect from 'components/Select/CustomSelect';
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
  const isLogged = userData?.isLogged;
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
              <svg
                id="search"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22.5 22.5L28.5 28.5"
                  style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 24.5C20.2467 24.5 24.5 20.2467 24.5 15C24.5 9.75329 20.2467 5.5 15 5.5C9.75329 5.5 5.5 9.75329 5.5 15C5.5 20.2467 9.75329 24.5 15 24.5Z"
                  style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            {isLogged ? (
              <ProfileCard />
            ) : (
              <S.LoginButton onClick={loginHandler}>
                <svg
                  id="auth"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="13"
                    style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                    stroke-width="2"
                  />
                  <path
                    d="M16 17.5715C18.2091 17.5715 20 15.7807 20 13.5715C20 11.3624 18.2091 9.57153 16 9.57153C13.7909 9.57153 12 11.3624 12 13.5715C12 15.7807 13.7909 17.5715 16 17.5715Z"
                    style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 25.7619C8 21.9523 11.0476 18.1428 16 18.1428C20.9524 18.1428 24 21.9523 24 25.7619"
                    style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {/* 로그인 */}
              </S.LoginButton>
            )}
            <button onClick={wishListHandler}>
              <svg
                id="shopping"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10.9034 11V7.99999C10.9034 6.67391 11.4403 5.40214 12.3961 4.46446C13.3519 3.52678 14.6483 3 16 3C17.3517 3 18.6481 3.52678 19.6039 4.46446C20.5597 5.40214 21.0966 6.67391 21.0966 7.99999V11M27.9873 26.7799C28.0194 27.0605 27.9906 27.3446 27.9027 27.6135C27.8149 27.8824 27.67 28.1299 27.4776 28.3399C27.2847 28.5496 27.0487 28.7169 26.7852 28.8306C26.5216 28.9444 26.2365 29.0021 25.9486 28.9999H6.05138C5.76346 29.0021 5.47835 28.9444 5.21481 28.8306C4.95127 28.7169 4.71529 28.5496 4.52239 28.3399C4.33 28.1299 4.18512 27.8824 4.09728 27.6135C4.00944 27.3446 3.98062 27.0605 4.01272 26.7799L5.80674 11H26.1933L27.9873 26.7799Z"
                  style={{ stroke: scrollPostion < 150 ? '#585858' : '#fff' }}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <CustomSelect scrollPostion={scrollPostion} />
          </S.HeaderButton>
        </S.Header>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
