import React from 'react';
<<<<<<< HEAD
import * as S from '../../styledComponent/styledLayout/StLayout';
const SideBar = () => {
  return (
    <S.SideBarContainer>
      <S.SideBarBtn>New</S.SideBarBtn>
      <S.SideBarBtn>CD</S.SideBarBtn>
      <S.SideBarBtn> 포토카드</S.SideBarBtn>
      <S.SideBarBtn> 의류</S.SideBarBtn>
      <S.SideBarBtn> 응원봉 </S.SideBarBtn>
      <S.SideBarBtn> 악세사리 </S.SideBarBtn>
=======
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
>>>>>>> 84b04770ceec93270d2d70a87c82819612408d5f
    </S.SideBarContainer>
  );
};

export default SideBar;
