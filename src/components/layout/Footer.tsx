import React from 'react';
import * as S from '../../styledComponent/styledLayout/StLayout';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.ContactInfo>
          <S.ContactTitle>(주)팬시플레이스</S.ContactTitle>
          <p>오전 9시 - 오후 6시 운영</p>
          <p>1544-1234</p>
          <p>카카오 문의</p>
        </S.ContactInfo>
        <S.LegalInfo>
          <p>
            주소 : 서울특별시 우주의 한 구석, 은하수의 끝자락 | 대표이사 :
            김소이, 서준호, 한지연
          </p>
          <p>사업자등록번호 : 123-45-6789</p>
        </S.LegalInfo>
        <S.Copyright>
          Copyright, 2024, fancyplace. All rights reserved.
        </S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
