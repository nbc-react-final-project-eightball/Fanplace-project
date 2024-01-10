import React from 'react';
import * as S from '../../styledComponent/styledLayout/StLayout';

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.ContactInfo>
          <S.ContactTitle>고객센터</S.ContactTitle>
          <p>오전 9시 - 오후 6시 운영</p>
          <p>1544-1234</p>
          <p>카카오 문의</p>
        </S.ContactInfo>
        <S.LegalInfo>
          <p>주소 : 서울특별시 종로구 관철동 | 대표이사 : 김두한</p>
          <p>사업자등록번호 : 123-45-6789</p>
        </S.LegalInfo>
        <S.Copyright>
          Copyright GC COMPANY Corp. All rights reserved.
        </S.Copyright>
      </S.FooterContent>
    </S.FooterContainer>
  );
};

export default Footer;
