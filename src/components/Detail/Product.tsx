import React from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
const Product = () => {
  return (
    <S.ProductContainer>
      <S.ProductSection1>
        <S.ProductImgContainer>
          <S.ProductImgContainerSection1>
            <S.ProductImg src="/img/ProductCardImg/YO2.jpg" alt="img" />
          </S.ProductImgContainerSection1>
          <S.ProductImgContainerSection2>
            <S.ProductSideImg src="/img/ProductCardImg/YO2.jpg" alt="img" />
          </S.ProductImgContainerSection2>
        </S.ProductImgContainer>
      </S.ProductSection1>
      <S.ProductSection2>
        <S.ProductTitle>DETAIL</S.ProductTitle>
        <S.ProductDetailImg src="/img/ProductDetail/P1.JPG" alt="img" />
        <S.ProductDetailImg src="/img/ProductDetail/P2.JPG" alt="img" />
        <S.ProductDetailImg src="/img/ProductDetail/P3.JPG" alt="img" />
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
