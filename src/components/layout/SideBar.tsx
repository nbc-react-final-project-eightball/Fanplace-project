import React, { useState } from 'react';
import * as S from '../../styledComponent/styledLayout/StSidebar';
import { useParams } from 'react-router-dom';

const SideBar = () => {
  const { sideCategory } = useParams<{ sideCategory: string }>();
  const [active, setActive] = useState<string>('');
  //..? 스테이트 셋안해줫는데 왜 된느거지 ..???
  return (
    <S.SideBarContainer>
      <S.SideBarSectionTop>
        <S.SideBarBtn>
          <S.SNavLink to="/GoodsList/New" activeStyle={active === sideCategory}>
            New
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/CD">CD</S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Photo">포토카드</S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Apparel">의류</S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Pompoms">응원봉</S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Sundries">잡화</S.SNavLink>{' '}
        </S.SideBarBtn>
      </S.SideBarSectionTop>
      <S.SideBarSectionBottom>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Artists">아티스트</S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Announcements">공지사항/FAQ</S.SNavLink>
        </S.SideBarBtn>
      </S.SideBarSectionBottom>
    </S.SideBarContainer>
  );
};

export default SideBar;
