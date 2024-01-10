import React from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { info } from 'console';
const GoodsList = () => {
  const ProducList = [
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/pre.svg',
    },
    {
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '타이틀',
      price: '50000원',
      teg: 'img/new.svg',
    },
  ];
  return (
    <S.GoodsListContainer>
      <S.GoodsListSection1>
        <S.AtistFilter>아티스트 선별용 </S.AtistFilter>
        <S.PageLocation>페이지 위치 알려주는곳 </S.PageLocation>
      </S.GoodsListSection1>
      <S.GoodsListSection2>
        {/* TODO: 상품 태그 생기면 MAP 사용해서 코드 줄이기  */}
        <S.ProductsTab>후드티</S.ProductsTab>
        <S.ProductsTab>모자</S.ProductsTab>
        <S.ProductsTab>티셔츠</S.ProductsTab>
        <S.ProductsTab>잠옷</S.ProductsTab>
        <S.ProductsTab>블라블라</S.ProductsTab>
        <S.ProductsTab>어쩌구저꺼</S.ProductsTab>
        <S.ProductsTab>이요오오옹</S.ProductsTab>
        <S.ProductsTab>아아아아아아</S.ProductsTab>
      </S.GoodsListSection2>
      {/* TODO: 상품리스트 카드 */}
      <S.GoodsListSection3>
        {ProducList?.map((item) => (
          <S.ProductCard>
            <S.ProductCardImg src={item.img} alt="상품이미지" />
            <S.GoodsListCardSection1>
              <S.GoodsListCardSection1_1>
                <S.ProductCardInfo>{item.info}?</S.ProductCardInfo>
                <S.ProductCardTitle>{item.title}</S.ProductCardTitle>
              </S.GoodsListCardSection1_1>
              <S.GoodsListCardSection1_2>
                <S.ProductCardPrice>{item.price}</S.ProductCardPrice>
                <S.ProductCardTeg src={item.teg} alt="이미지태그" />
              </S.GoodsListCardSection1_2>
            </S.GoodsListCardSection1>
          </S.ProductCard>
        ))}
      </S.GoodsListSection3>
      <S.GoodsListSection4>1</S.GoodsListSection4>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
