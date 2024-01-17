import React from 'react';
import * as S from '../../styledComponent/styledLayout/StSidebar';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarSectionTop>
        <S.SideBarBtn>
          <Link to="/">New</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">CD</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">포토카드</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">의류</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">응원봉</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">악세사리</Link>{' '}
        </S.SideBarBtn>
      </S.SideBarSectionTop>
      <S.SideBarSectionBottom>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">아티스트</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/GoodsList">공지사항/FAQ</Link>
        </S.SideBarBtn>
      </S.SideBarSectionBottom>
    </S.SideBarContainer>
  );
};

export default SideBar;
