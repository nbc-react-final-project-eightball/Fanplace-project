import React from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSelectedProduct } from '../redux/modules/GoodsList/GoodsListSlice';

const SearchList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SearchProduct = useSelector((state: { goods: any }) => state.goods);
  console.log('SearchProduct', SearchProduct.searchList);
  const SearchName = useSelector(
    (state: { goods: any }) => state.goods.searchName,
  );
  return (
    <>
      <S.GoodsListContainer>
        <S.GoodsCategory>
          <S.Cate>
            <p style={{ display: 'inline-block' }}>
              {' '}
              <span
                style={{
                  color: '#ff6565',
                  fontWeight: 'bold',
                }}
              >
                {SearchName}
              </span>{' '}
              키워드로 검색한 결과 입니다.
            </p>
            <span style={{ display: 'inline-block' }}>
              ({SearchProduct.searchList.length})
            </span>
          </S.Cate>
        </S.GoodsCategory>
        <S.GoodsListContainerSection>
          <S.GoodsListSection3>
            <S.GoodsListSection3Wrapper>
              {SearchProduct?.searchList.map((product: any) => (
                <S.ProductCard
                  key={product.productId}
                  onClick={() => {
                    dispatch(setSelectedProduct(product));
                    navigate(`/detail/${product.productId}`);
                  }}
                >
                  <S.ProductCardImgBox>
                    <S.ProductCardImg src={product.img} alt="상품이미지" />
                  </S.ProductCardImgBox>
                  <div>
                    <S.GoodsListCardSection1>
                      <S.GoodsListCardSection1_1>
                        <S.ProductCardInfoArtist>
                          <h1>{product.artist}</h1>
                        </S.ProductCardInfoArtist>
                        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
                        <S.ProductReleaseDate>
                          발매일&nbsp;&nbsp;
                          {product?.releaseDate || '2024-02-12'}
                        </S.ProductReleaseDate>
                      </S.GoodsListCardSection1_1>
                      <S.GoodsListCardSection1_2>
                        <S.ProductCardPrice>
                          {product?.salePrice ? (
                            <div>
                              <span>
                                {Math.floor(
                                  ((product?.price - product?.salePrice) /
                                    product?.price) *
                                    100,
                                )}
                                %
                              </span>
                              <h3>{product.salePrice.toLocaleString()}원</h3>
                              <p>{product.price.toLocaleString()}원</p>
                            </div>
                          ) : (
                            <p>{product?.price.toLocaleString()}원</p>
                          )}
                        </S.ProductCardPrice>
                      </S.GoodsListCardSection1_2>
                    </S.GoodsListCardSection1>
                  </div>
                </S.ProductCard>
              ))}
            </S.GoodsListSection3Wrapper>
          </S.GoodsListSection3>
        </S.GoodsListContainerSection>
      </S.GoodsListContainer>
    </>
  );
};

export default SearchList;
