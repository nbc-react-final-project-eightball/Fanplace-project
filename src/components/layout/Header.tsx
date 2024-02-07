import * as S from 'styledComponent/styledLayout/StHeader';
import { Link, useNavigate } from 'react-router-dom';
import ProfileCard from 'components/ProfileCard';
import { useDispatch, useSelector } from 'react-redux';
import CustomSelect from 'components/Select/CustomSelect';
import { db } from '../../firebase/config';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import {
  setProductSearch,
  setSearchName,
} from '../../redux/modules/GoodsList/GoodsListSlice';
//헤더수정
const Header = () => {
  const userData = useSelector(
    (state: { signUpSlice: any }) => state.signUpSlice,
  );
  const isLogged = userData?.userInfo;
  const [searchList, setSearchList] = useState<DocumentData[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [searcClick, setSearchClick] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');
      let goodsQuery = query(goodsCollection);
      if (!searchInput) {
        return;
      }
      const goodsSnapshot = await getDocs(goodsQuery);
      const getGoodsList = goodsSnapshot.docs.map((doc) => doc.data());
      const filteredGoodsList = getGoodsList.filter(
        (list) => list.title && list.title.includes(searchInput),
      );

      setSearchList(filteredGoodsList);
      dispatch(setProductSearch(filteredGoodsList));
      dispatch(setSearchName(searchInput));
      navigate('/searchList');
      setSearchInput('');
      setSearchClick(false);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };

  const handleSearchChange = (event: any) => {
    setSearchInput(event.target.value);
  };

  return (
    <S.HeaderContainer>
      <S.Wrapper>
        <S.Header>
          <S.BrandLogo to={'/'}>
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
              alt="FancyPlace Logo"
            />
            FancyPlace
          </S.BrandLogo>
        </S.Header>
        <S.Header>
          <S.HeaderButton>
            <S.SearchOverlay
              $setchClick={searcClick}
              onClick={() => setSearchClick(!searcClick)}
            />
            <S.SearchDiv>
              <S.Searchinput
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                maxLength={11}
                onKeyPress={(event) => {
                  if (event.key === 'Enter') {
                    fetchGoods();
                  }
                }}
                placeholder="검색어를 입력해주세요"
                $setchClick={searcClick}
              />
              <S.SearchinputButton1
                aria-label="검색"
                onClick={() => {
                  if (!searchInput) {
                    Swal.fire({
                      icon: 'error',
                      title: '검색어를 입력해주세요',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    return;
                  }
                  if (searchInput.length < 2) {
                    Swal.fire({
                      icon: 'warning',
                      title: '두 글자 이상 입력해주세요',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    return;
                  }
                  if (searchInput.length >= 11) {
                    Swal.fire({
                      icon: 'warning',
                      title: '11자 이하로 입력해주세요',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    return;
                  } else {
                    fetchGoods();
                  }
                }}
                $setchClick={searcClick}
              >
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
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 24.5C20.2467 24.5 24.5 20.2467 24.5 15C24.5 9.75329 20.2467 5.5 15 5.5C9.75329 5.5 5.5 9.75329 5.5 15C5.5 20.2467 9.75329 24.5 15 24.5Z"
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* <S.MobileName>검색</S.MobileName> */}
              </S.SearchinputButton1>
              <S.SearchinputButton2
                aria-label="검색 활성화"
                onClick={() => {
                  setSearchClick(!searcClick);
                }}
                $setchClick={searcClick}
              >
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
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 24.5C20.2467 24.5 24.5 20.2467 24.5 15C24.5 9.75329 20.2467 5.5 15 5.5C9.75329 5.5 5.5 9.75329 5.5 15C5.5 20.2467 9.75329 24.5 15 24.5Z"
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <S.MobileName>검색</S.MobileName>
              </S.SearchinputButton2>
            </S.SearchDiv>

            {isLogged ? (
              <ProfileCard />
            ) : (
              <S.LoginButton to={'/login'} aria-label="마이페이지">
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
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 17.5715C18.2091 17.5715 20 15.7807 20 13.5715C20 11.3624 18.2091 9.57153 16 9.57153C13.7909 9.57153 12 11.3624 12 13.5715C12 15.7807 13.7909 17.5715 16 17.5715Z"
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 25.7619C8 21.9523 11.0476 18.1428 16 18.1428C20.9524 18.1428 24 21.9523 24 25.7619"
                    stroke="var(--color-primary-medium-58)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* 로그인 */}

                <S.MobileName>로그인</S.MobileName>
              </S.LoginButton>
            )}
            <Link to={isLogged ? '/cart' : '/login'}>
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
                  stroke="var(--color-primary-medium-58)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <S.MobileName>장바구니</S.MobileName>
            </Link>
            {/* <CustomSelect /> */}
          </S.HeaderButton>
        </S.Header>
      </S.Wrapper>
    </S.HeaderContainer>
  );
};

export default Header;
