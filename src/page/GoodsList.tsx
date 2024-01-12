import React from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';

const GoodsList = () => {
  const ProducList = [
    {
      category: 'CD',
      info: '[2/13출시]',
      img: 'img/ProductCardImg/YO1.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 07 YOASOBI THE BOOK 3 / ASIA TOUR 2023-2024 OFFICIAL',
      price: '46000원',
      teg: 'img/new.svg',
    },
    {
      category: 'CD',
      info: '[2/13출시]',
      img: 'img/ProductCardImg/YO2.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 13 アイドル / ASIA TOUR 2023-2024 OFFICIAL MD',
      price: '30000원',
      teg: 'img/new.svg',
    },
    {
      category: '티셔츠',
      info: '[CONNECTION]',
      img: 'img/ProductCardImg/Boa1.png',
      artist: '보아',
      title: 'BoA',
      price: '41000원',
      teg: 'img/new.svg',
    },
    {
      category: 'CD',
      info: '[2/13출시]',
      artist: '있지',
      img: 'img/ProductCardImg/있지1.jpg',
      title: '있지 - BORN TO BE (SPECIAL EDITION) (Mr. Vampire Ver.)',
      price: '42000원',
      teg: 'img/new.svg',
    },
    {
      category: '잠옷',
      info: '[2/13출시]',
      artist: '에스파',
      img: 'img/ProductCardImg/ESPA.png',
      title: 'PAJAMAS [NINGNING Ver.]',
      price: '32000원',
      teg: 'img/new.svg',
    },
    {
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: 'img/ProductCardImg/칸나2.jpg',
      title: '최종화 (The Last Flower)',
      price: '55000원',
      teg: 'img/new.svg',
    },
    {
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: 'img/ProductCardImg/칸나1.jpg',
      title: 'ADDICT!ON',
      price: '40000원',
      teg: 'img/new.svg',
    },
    {
      category: '머그컵',
      info: '[2/13출시]',
      artist: '아이즈원',
      img: 'img/ProductCardImg/아이즈원1.jpg',
      title: '아이즈원 - 보틀 / HEART*IZ POP-UP STORE',
      price: '8000원',
      teg: 'img/new.svg',
    },
    {
      category: '티셔츠',
      info: '[2/13출시]',
      artist: '아이즈원',
      img: 'img/ProductCardImg/아이즈원2.jpg',
      title: '아이즈원 - 02 티셔츠 / 2020 ONEIRIC THEATER',
      price: '38000원',
      teg: 'img/new.svg',
    },
    {
      category: '티셔츠',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스1.jpg',
      title: '트와이스 - 23 텀블러 / 2019 ONCE HALLOWEEN 2',
      price: '25000원',
      teg: 'img/new.svg',
    },
    {
      category: '목걸이',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스2.jpg',
      title: '트와이스 - 27 목걸이 / 4TH WORLD TOUR Ⅲ 2ND MD',
      price: '25000원',
      teg: 'img/new.svg',
    },
    {
      category: '핸드폰케이스',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스3.jpg',
      title: '트와이스 - 04 폰케이스 / 2019 ONCE HALLOWEEN 2',
      price: '38000원',
      teg: 'img/new.svg',
    },
  ];
  const [filter, setFilter] = React.useState<null | String>('');
  const [showArtistFilter, setShowArtistFilter] = React.useState(false);
  const [selectedArtists, setSelectedArtists] = React.useState<string[]>([]);
  const categories = [
    'CD',
    '티셔츠',
    '목걸이',
    '텀블러',
    '핸드폰케이스',
    '잠옷',
    '머그컵',
  ];
  const artists = [
    'YOASOBI',
    '보아',
    '트와이스',
    '칸나',
    '에스파',
    '있지',
    '아이즈원',
  ];
  const handleFilterTeb = (category: string) => {
    setFilter(category);
  };
  const handleArtistChange = (artist: string) => {
    setSelectedArtists((prevArtists) =>
      prevArtists.includes(artist)
        ? prevArtists.filter((a) => a !== artist)
        : [...prevArtists, artist],
    );
  };
  const resetArtistFilter = () => {
    setSelectedArtists([]);
  };
  const filteredProduct = ProducList.filter(
    (product) =>
      (selectedArtists.length === 0 ||
        selectedArtists.includes(product.artist)) &&
      (!filter || product.category === filter),
  );

  return (
    <S.GoodsListContainer>
      <S.GoodsListSection1>
        <S.AtistFilter isOpen={showArtistFilter}>
          <S.AtistFilterWrapper>
            <S.AtistFilterBtn
              isOpen={!showArtistFilter}
              onClick={() => setShowArtistFilter(!showArtistFilter)}
            >
              아티스트 필터
            </S.AtistFilterBtn>
            {showArtistFilter && (
              <>
                <S.AtistFilterContainer>
                  {artists.map((artist) => (
                    <S.AtistFilterArtist>
                      <input
                        type="checkbox"
                        checked={selectedArtists.includes(artist)}
                        onChange={() => handleArtistChange(artist)}
                        id="artist"
                      />
                      <label htmlFor="artist">{artist}</label>
                    </S.AtistFilterArtist>
                  ))}
                </S.AtistFilterContainer>
                <S.AtistFilterReset onClick={resetArtistFilter}>
                  초기화
                </S.AtistFilterReset>
              </>
            )}
          </S.AtistFilterWrapper>
        </S.AtistFilter>

        <S.PageLocation>페이지 위치 알려주는곳 </S.PageLocation>
      </S.GoodsListSection1>
      <S.GoodsListSection2>
        <S.GoodsListSection2Wrapper>
          <S.ProductsTab key="all" onClick={() => setFilter(null)}>
            전체보기
          </S.ProductsTab>
          {categories.map((category) => (
            <S.ProductsTab
              key={category}
              onClick={() => handleFilterTeb(category)}
            >
              {category}
            </S.ProductsTab>
          ))}
        </S.GoodsListSection2Wrapper>
      </S.GoodsListSection2>
      {/* TODO: 상품리스트 카드 */}
      <S.GoodsListSection3>
        <S.GoodsListSection3Wrapper>
          {
            //상품 필터해서 0개면 상품없다고 말해줌
            filteredProduct?.length > 0 ? (
              filteredProduct?.map((product) => (
                <S.ProductCard>
                  <S.ProductCardImgBox>
                    <S.ProductCardImg src={product.img} alt="상품이미지" />
                  </S.ProductCardImgBox>
                  <div>
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
                  </div>
                </S.ProductCard>
              ))
            ) : (
              <div>상품이 없습니다.</div>
            )
          }
        </S.GoodsListSection3Wrapper>
      </S.GoodsListSection3>
      <S.GoodsListSection4>1</S.GoodsListSection4>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
