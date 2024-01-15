import React from 'react';
import * as S from '../styledComponent/styledDetail/StDetail';
import Product from 'components/Detail/Product';
import ProductInfo from 'components/Detail/ProductInfo';
const Detail = () => {
  return (
    <S.DtailContainer>
      <Product />
      <ProductInfo />
    </S.DtailContainer>
  );
};

export default Detail;
