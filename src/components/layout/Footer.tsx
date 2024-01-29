import React from 'react';
import * as S from '../../styledComponent/styledLayout/StLayout';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.ContactInfo>
          <S.ContactTitle>(주)팬시플레이스</S.ContactTitle>
          <S.FooterInnerWrapper>
            <S.LegalInfo>
              <p>사업장주소 : 서울특별시 우주의 한 구석, 은하수의 끝자락</p>
              <p>대표자 : 김소이, 서준호, 한지연</p>
              <p>통신판매업신고번호 : 제2024-아티스트-1004호</p>
            </S.LegalInfo>
            <S.FooterInfo>
              <p>대표번호 : 1004-1004</p>
              <p>사업자등록번호 : 123-45-6789</p>
            </S.FooterInfo>
          </S.FooterInnerWrapper>
        </S.ContactInfo>
        <S.Copyright>
          Copyright, 2024, fancyplace. All rights reserved.
        </S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
