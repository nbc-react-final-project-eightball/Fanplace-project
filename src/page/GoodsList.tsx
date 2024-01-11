import React from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { info } from 'console';
const GoodsList = () => {
  const ProducList = [
    {
      id:"후드티",
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '후드티',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      id:"모자",
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '모자',
      price: '50000원',
      teg: 'img/new.svg',
    },
    {
      id:"티셔츠",
      info: '[2/13출시]',
      img: 'img/ProductCardImg1.jpg',
      title: '티셔츠',
      price: '50000원',
      teg: 'img/new.svg',
    },

  ];
  const [filter, setFilter] = React.useState<null|String>('');
  const handleFilterTeb = (category:string) => {
    setFilter(category);
  }
  const filteredProduct = filter?ProducList.filter(product=>product.id===filter):ProducList;
  const categories =['후드티','모자','티셔츠','잠옷','블라블라']
  return (
    <S.GoodsListContainer>
      <S.GoodsListSection1>
        <S.AtistFilter>아티스트 선별용 </S.AtistFilter>
        <S.PageLocation>페이지 위치 알려주는곳 </S.PageLocation>
      </S.GoodsListSection1>
      <S.GoodsListSection2>
        {/* TODO: 상품 태그 생기면 MAP 사용해서 코드 줄이기  */}
    {
      categories.map((category)=>(
        <S.ProductsTab onClick={()=>handleFilterTeb(category)}>{category}</S.ProductsTab>
      ))
    }
        
      </S.GoodsListSection2>
      {/* TODO: 상품리스트 카드 */}
      <S.GoodsListSection3>
        {
          //상품 필터해서 0개면 상품없다고 말해줌
filteredProduct?.length>0?(
        filteredProduct?.map((product) => (
          <S.ProductCard>
            <S.ProductCardImg src={product.img} alt="상품이미지" />
            <S.GoodsListCardSection1>
              <S.GoodsListCardSection1_1>
                <S.ProductCardInfo>{product.info}?</S.ProductCardInfo>
                <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
              </S.GoodsListCardSection1_1>
              <S.GoodsListCardSection1_2>
                <S.ProductCardPrice>{product.price}</S.ProductCardPrice>
                <S.ProductCardTeg src={product.teg} alt="이미지태그" />
              </S.GoodsListCardSection1_2>
            </S.GoodsListCardSection1>
          </S.ProductCard>
        ))
  ):(<div>상품이 없습니다.</div>)
        }
      </S.GoodsListSection3>
      <S.GoodsListSection4>1</S.GoodsListSection4>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
