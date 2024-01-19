import React from 'react';
import * as S from '../../styledComponent/styledLayout/StSidebar';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarSectionTop>
        <S.SideBarBtn>
          <Link to="/GoodsList/New">New</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/CD">CD</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Photo">포토카드</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Apparel">의류</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Pompoms">응원봉</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Sundries">잡화</Link>{' '}
        </S.SideBarBtn>
      </S.SideBarSectionTop>
      <S.SideBarSectionBottom>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Artists">아티스트</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList/Announcements">공지사항/FAQ</Link>
        </S.SideBarBtn>
      </S.SideBarSectionBottom>
    </S.SideBarContainer>
  );
};

export default SideBar;
