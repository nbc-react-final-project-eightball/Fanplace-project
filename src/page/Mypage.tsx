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
      <S.InfoBoxBackground>
        <S.MyInfoBoxWrapper>
          <S.MyInfoBox to={'/profilesettings'}>
            <S.MyInfoImgBox>
              <img src="img/MainTopCarouseImg/TopC1.jpg" alt="profile image" />
            </S.MyInfoImgBox>
            <p>
              <S.InfoText>
                <h3>{userInfo.displayName} 님,</h3>
                <span>{userInfo.email}</span>
              </S.InfoText>
            </p>
            <span>팬시플레이스에 오신 걸 환영합니다</span>
            <S.MoreLink to={'/profilesettings'}>
              <svg
                id="menu"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 13.5C6.82843 13.5 7.5 12.8284 7.5 12C7.5 11.1716 6.82843 10.5 6 10.5C5.17157 10.5 4.5 11.1716 4.5 12C4.5 12.8284 5.17157 13.5 6 13.5Z"
                  fill="#999999"
                />
                <path
                  d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                  fill="#999999"
                />
                <path
                  d="M18 13.5C18.8284 13.5 19.5 12.8284 19.5 12C19.5 11.1716 18.8284 10.5 18 10.5C17.1716 10.5 16.5 11.1716 16.5 12C16.5 12.8284 17.1716 13.5 18 13.5Z"
                  fill="#999999"
                />
              </svg>
            </S.MoreLink>
          </S.MyInfoBox>
          <S.MyWishListBox to={'/wishlist'}>
            <h3>위시리스트</h3>
            <h4>8 건</h4>
            <span>장바구니에 추가해보세요!</span>
            <S.MoreLink to={'/profilesettings'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                  fill="#999999"
                />
              </svg>
            </S.MoreLink>
          </S.MyWishListBox>
          <S.MyCouponBox to={'/coupon'}>
            <h3>쿠폰</h3>
            <h4>14 장</h4>
            <span>
              소멸예정 쿠폰 <span>0장</span>
            </span>
            <S.MoreLink to={'/profilesettings'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                  fill="#999999"
                />
              </svg>
            </S.MoreLink>
          </S.MyCouponBox>
          <S.MyChatBox to={'/chatlist'}>
            <h3>1:1 문의</h3>
            <h4>3 건</h4>
            <span>
              답변완료 <span>3건</span>
            </span>
            <S.MoreLink to={'/profilesettings'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                  fill="#999999"
                />
              </svg>
            </S.MoreLink>
          </S.MyChatBox>
        </S.MyInfoBoxWrapper>
      </S.InfoBoxBackground>
      <S.MainContentBox>
        <S.MainContentInnerBox>
          <S.MenuList>
            <h3>마이페이지</h3>
            <S.MenuBox>
              {/* <h3>쇼핑정보</h3> */}
              <li>
                <Link to={'/orderlist'}>
                  주문목록/배송조회
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={'/wishList'}>
                  위시리스트
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={'/coupon'}>
                  쿠폰
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={'/chatlist'}>
                  1:1 문의
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={'/profilesettings'}>
                  정보 수정
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link to={'/shipping'}>
                  배송지 관리
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                      fill="#999999"
                    />
                  </svg>
                </Link>
              </li>
            </S.MenuBox>
          </S.MenuList>
          <S.OrderList>
            <S.TitleWrapper>
              <div>
                <h3>최근 주문</h3>
                <p>최근 3개월 간의 주문 내역이 노출됩니다.</p>
              </div>
              <S.MoreLink to={'/orderlist'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9.00032 18.0001C8.99987 17.7664 9.08124 17.54 9.23032 17.3601L13.7103 12.0001L9.39032 6.63006C9.30726 6.52778 9.24523 6.41008 9.20779 6.28374C9.17036 6.1574 9.15827 6.02491 9.17221 5.89388C9.18615 5.76285 9.22584 5.63587 9.28902 5.52023C9.35219 5.4046 9.4376 5.30259 9.54032 5.22006C9.64261 5.137 9.76031 5.07497 9.88665 5.03754C10.013 5.0001 10.1455 4.98801 10.2765 5.00195C10.4075 5.01589 10.5345 5.05559 10.6502 5.11876C10.7658 5.18193 10.8678 5.26734 10.9503 5.37006L15.7803 11.3701C15.9274 11.549 16.0078 11.7734 16.0078 12.0051C16.0078 12.2367 15.9274 12.4611 15.7803 12.6401L10.7803 18.6401C10.6964 18.7413 10.5933 18.825 10.4769 18.8864C10.3606 18.9477 10.2333 18.9855 10.1023 18.9976C9.97132 19.0097 9.83925 18.9958 9.71364 18.9568C9.58804 18.9177 9.47137 18.8543 9.37032 18.7701C9.25561 18.677 9.16294 18.5597 9.09896 18.4266C9.03499 18.2934 9.0013 18.1478 9.00032 18.0001Z"
                    fill="#999999"
                  />
                </svg>
              </S.MoreLink>
            </S.TitleWrapper>
            <S.TableWrapper>
              <S.TableHead>
                <ul>
                  <li>날짜/주문번호</li>
                  <li>상품명/옵션</li>
                  <li>수량</li>
                  <li>주문상태</li>
                  <li>결제금액</li>
                </ul>
              </S.TableHead>
              <S.TableBody>
                <p>주문내역이 없습니다.</p>
              </S.TableBody>
            </S.TableWrapper>
          </S.OrderList>
        </S.MainContentInnerBox>
      </S.MainContentBox>
    </S.MypageWrapper>
  );
};

export default Mypage;
