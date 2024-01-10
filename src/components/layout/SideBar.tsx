import React from 'react';
import * as S from '../../styledComponent/styledLayout/StSidebar';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarSectionTop>
        \
        <S.SideBarBtn>
          <Link to="/New">New</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">CD</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">포토카드</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">의류</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">응원봉</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">악세사리</Link>{' '}
        </S.SideBarBtn>
      </S.SideBarSectionTop>
      <S.SideBarSectionBottom>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">아티스트</Link>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <Link to="/New">공지사항/FAQ</Link>
        </S.SideBarBtn>
      </S.SideBarSectionBottom>
    </S.SideBarContainer>
  );
};

export default SideBar;
