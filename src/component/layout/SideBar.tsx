import React from 'react';
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
    </S.SideBarContainer>
  );
};

export default SideBar;
