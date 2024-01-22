import React, { useState } from 'react';
import * as S from '../../styledComponent/styledLayout/StSidebar';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setFilterR,
  setCurrentPage,
} from '../../redux/modules/GoodsList/GoodsListSlice';

const SideBar = () => {
  const { sideCategory } = useParams<{ sideCategory: string }>();
  const [active, setActive] = useState<string>('');
  //..? 스테이트 셋안해줫는데 왜 된느거지 ..???
  const dispatch = useDispatch();
  const reSet = () => {
    dispatch(setFilterR(null));
    dispatch(setCurrentPage(1));
  };

  return (
    <S.SideBarContainer>
      <S.SideBarSectionTop>
        <S.SideBarBtn>
          <S.SNavLink
            to="/GoodsList/New"
            activeStyle={active === sideCategory}
            onClick={reSet}
          >
            New
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/CD" onClick={reSet}>
            CD
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Photo" onClick={reSet}>
            포토카드
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Apparel" onClick={reSet}>
            의류
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Pompoms" onClick={reSet}>
            응원봉
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Sundries" onClick={reSet}>
            잡화
          </S.SNavLink>{' '}
        </S.SideBarBtn>
      </S.SideBarSectionTop>
      <S.SideBarSectionBottom>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Artists" onClick={reSet}>
            아티스트
          </S.SNavLink>
        </S.SideBarBtn>
        <S.SideBarBtn>
          {' '}
          <S.SNavLink to="/GoodsList/Announcements" onClick={reSet}>
            공지사항/FAQ
          </S.SNavLink>
        </S.SideBarBtn>
      </S.SideBarSectionBottom>
    </S.SideBarContainer>
  );
};

export default SideBar;
