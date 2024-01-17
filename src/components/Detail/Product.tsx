import React from 'react';
import * as S from '../../styledComponent/styledDetail/StDetail';
import { typeProduct } from '../../Type/TypeInterface';

interface ProductProps {
  product: typeProduct | null;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <S.ProductContainer>
      <S.ProductSection1>
        <S.ProductImgContainer>
          <S.ProductImgContainerSection1>
            <S.ProductImg src={`/${product?.img}`} alt="대표이미지" />
            {/* 큰 대표이미지 */}
          </S.ProductImgContainerSection1>
          <S.ProductImgContainerSection2>
            <S.ProductSideImg
              src={`/${product?.img}`}
              alt="대표이미지 작은거"
            />
            {/* 대표이미지 작은거 */}
          </S.ProductImgContainerSection2>
        </S.ProductImgContainer>
      </S.ProductSection1>
      <S.ProductSection2>
        <S.ProductTitle>DETAIL</S.ProductTitle>
        {/* 디테일 이미지1개는 무조건 들어가서 뒤에껏들은  있으면 나오게 해둿습니다*/}
        <S.ProductDetailImg
          src={`/${product?.contentImg1}`}
          alt="상품이미지1"
        />
        {product?.contentImg2 && (
          <>
            <S.ProductDetailImg
              src={`/${product?.contentImg2}`}
              alt="상품이미지2"
            />
            {product?.contentImg3 && (
              <S.ProductDetailImg
                src={`/${product?.contentImg3}`}
                alt="상품이미지3"
              />
            )}
          </>
        )}
      </S.ProductSection2>
    </S.ProductContainer>
  );
};

export default Product;
