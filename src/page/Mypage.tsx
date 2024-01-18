import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as S from 'styledComponent/styledMypage/StMypage';

const Mypage = () => {
  const { userInfo } = useSelector(
    (state: { signUpSlice: any }) => state.signUpSlice,
  );
  console.log('userInfo는???', userInfo);
  return (
    <S.MypageWrapper>
      <p>
        Name: <span>{userInfo.displayName}</span>
      </p>
      <span>
        Email: <span>{userInfo.email}</span>
      </span>
      <S.MenuList>
        <S.MenuBox>
          {/* <h3>쇼핑정보</h3> */}
          <ul>
            <li>
              <Link to={'/orderlist'}>주문목록/배송조회</Link>
            </li>
            <li>
              <Link to={'/wishList'}>위시리스트</Link>
            </li>
          </ul>
        </S.MenuBox>
        <S.MenuBox>
          {/* <h3>나의 혜택</h3> */}
          <ul>
            <li>
              <Link to={'/coupon'}>쿠폰</Link>
            </li>
          </ul>
        </S.MenuBox>
        <S.MenuBox>
          {/* <h3>회원 정보</h3> */}
          <ul>
            <li>
              <Link to={'/profilesettings'}>정보 수정</Link>
            </li>
            <li>
              <Link to={'/shipping'}>배송지 관리</Link>
            </li>
          </ul>
        </S.MenuBox>
      </S.MenuList>
    </S.MypageWrapper>
  );
};

export default Mypage;
