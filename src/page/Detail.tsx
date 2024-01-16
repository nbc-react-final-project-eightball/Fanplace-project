import React from 'react';
import * as S from '../styledComponent/styledDetail/StDetail';
import Product from 'components/Detail/Product';
import ProductInfo from 'components/Detail/ProductInfo';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/configStore';
const Detail = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.goods.selectedProduct,
  );
  return (
    <S.DtailContainer>
      <Product product={selectedProduct} />
      <ProductInfo product={selectedProduct} />
    </S.DtailContainer>
  );
};

export default Detail;
