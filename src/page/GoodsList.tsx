import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  getDocs,
  addDoc,
  DocumentData,
} from 'firebase/firestore';

import { typeProduct } from '../Type/TypeInterface';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSelectedProduct,
  setCurrentPage,
} from '../redux/modules/GoodsList/GoodsListSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'redux/configStore';

const pageSize = 12;
const GoodsList = () => {
  const [goodsList, setGoodsList] = useState<DocumentData>([]);
  const [filter, setFilter] = React.useState<null | String>(null);
  const [showArtistFilter, setShowArtistFilter] = React.useState(false);
  const [selectedArtists, setSelectedArtists] = React.useState<string[]>([]);
  const [FilteredProduct, setFilteredProduct] = useState<DocumentData | null>(
    [],
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideCategory } = useParams<{ sideCategory: string }>();
  console.log('사이드카테고리', sideCategory);
  const saveProduct = async (productList: typeProduct[]) => {
    try {
      const addGoodsList = await collection(db, 'goodsList');
      for (const product of productList) {
        await addDoc(addGoodsList, product);
      }
    } catch (error) {
      console.error('상품을 저장하는 데 실패했습니다:', error);
    }
  };
  const lastDocument = useSelector((state: RootState) => state.goods.lastDoc);
  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');
      const goodsQuery = query(goodsCollection, orderBy('category'));

      const goodsSnapshot = await getDocs(goodsQuery);
      const getGoodsList = goodsSnapshot.docs.map((doc) => doc.data());
      setGoodsList(getGoodsList);
      console.log('처음 불러오기', goodsList);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };
  useEffect(() => {
    fetchGoods();
  }, []);

  useEffect(() => {
    console.log('처음 불러오기', goodsList);
  }, [goodsList]);

  let pageNumber = useSelector((state: RootState) => state.goods.currentPage);
  const filteredProduct = goodsList.filter(
    (product: typeProduct) =>
      (selectedArtists.length === 0 ||
        selectedArtists.includes(product.artist)) &&
      (!filter || product.category === filter) &&
      (!sideCategory || product.sideCategory === sideCategory),
  );
  const currentPageGoodsList = filteredProduct.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize,
  );
  const ProducList = [
    {
      productId: 1,
      sideCategory: 'CD',
      category: 'CD',
      info: '[2/13출시]',
      img: '/img/ProductCardImg/YO1.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 07 YOASOBI THE BOOK 3 / ASIA TOUR 2023-2024 OFFICIAL',
      price: 46000,
      ProductName: '07 YOASOBI THE BOOK 3',
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/YO1_1.jpg',
    },
    {
      productId: 2,
      sideCategory: 'CD',
      category: 'CD',
      info: '[7/13출시]',
      img: '/img/ProductCardImg/YO2.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 13 アイドル / ASIA TOUR 2023-2024 OFFICIAL MD',
      ProductName: '13 アイドル ',
      price: 30000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/YO2_1.jpg',
    },
    {
      productId: 3,
      sideCategory: 'Apparel',
      category: '티셔츠',
      info: '[CONNECTION]',
      img: '/img/ProductCardImg/Boa1.png',
      artist: '보아',
      title: 'BoA',
      ProductName: '보아티셔츠',
      price: 41000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/Boa1_1.png',
    },
    {
      productId: 4,
      sideCategory: 'CD',
      category: 'DVD',
      info: '[예약]',
      artist: '있지',
      img: '/img/ProductCardImg/있지1.jpg',
      title: '있지 - BORN TO BE (SPECIAL EDITION) (Mr. Vampire Ver.)',
      ProductName: 'BORN TO BE (SPECIAL EDITION)',
      price: 42000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/있지1_1.jpg',
    },
    {
      productId: 5,
      category: '잠옷',
      sideCategory: 'Apparel',
      artist: '에스파',
      img: '/img/ProductCardImg/ESPA.png',
      title: 'PAJAMAS [NINGNING Ver.]',
      ProductName: 'PAJAMAS [NINGNING Ver.]',
      price: 32000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/ESPA1_1.jpg',
    },
    {
      productId: 6,
      sideCategory: 'CD',
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: '/img/ProductCardImg/칸나2.jpg',
      title: '최종화 (The Last Flower)',
      ProductName: '최종화 ',
      price: 55000,
      teg: '/img/soldouticon.png',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/칸나1_1.jpg',
    },
    {
      productId: 7,
      sideCategory: 'CD',
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: '/img/ProductCardImg/칸나1.jpg',
      title: '아이리 칸나 (Airi Kanna) - ADDICT!ON [화이트 컬러 LP]!ON',
      ProductName: 'ADDICT!ON [화이트 컬러 LP]!ON',
      price: 44000,
      teg: '/img/soldouticon.png',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/칸나1_1.jpg',
    },
    {
      productId: 8,
      sideCategory: 'Sundries',
      category: '텀블러/컵',
      artist: 'BTS',
      img: '/img/ProductCardImg/BTS1.jpg',
      title: 'BTS WORLD 방탄 굿즈 스트랩 키링',
      ProductName: '[BTS월드 공식] BTS WORLD 방탄 굿즈 스트랩 키링',
      price: 8000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/BTS1_1.jpg',
    },
    {
      productId: 9,
      category: '티셔츠',
      sideCategory: 'Apparel',
      artist: '아이즈원',
      img: '/img/ProductCardImg/아이즈원1.jpg',
      title: 'IZONE 아이즈원 COLORIZ 프린팅 후드티',
      ProductName: 'COLORIZ 프린팅 후드티 ',
      price: 38000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/아이즈원1_1.jpg',
    },
    {
      productId: 10,
      category: '텀블러',
      sideCategory: 'Sundries',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스1.jpg',
      title: '트와이스 포토 텀블러 트와 굿즈 ( TWICE GOODS TUMBLER)',
      ProductName: '트와이스 - 포토 텀블러 ',
      price: 25000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스1_1.jpg',
    },
    {
      productId: 11,
      category: '목걸이',
      sideCategory: 'Sundries',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스2.jpg',
      title: '트와이스 -  목걸이',
      ProductName: '트와이스 -  목걸이',
      price: 25000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스2_1.jpg',
    },
    {
      productId: 12,
      category: '핸드폰케이스',
      sideCategory: 'Sundries',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스3.jpg',
      title: 'TWICE 트와이스 Part 5 굿즈 이중범퍼 휴대폰 케이스',
      ProductName: '트와이스 -Part5 폰케이스 ',
      price: 38000,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스3_1.jpg',
      contentImg2: '/img/ProductDetail/트와이스3_2.jpg',
    },
    {
      productId: 13,
      category: '포토카드',
      sideCategory: 'Photo',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스4.jpg',
      title: '트와이스 - 18 필름 포토 세트 / 4TH WORLD TOUR Ⅲ 2ND MD',
      ProductName: '트와이스 - 18 필름 포토 세트',
      price: 15000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스4_1.jpg',
      contentImg2: '/img/ProductDetail/트와이스4_2.jpg',
    },
    {
      productId: 14,
      category: 'CD',
      sideCategory: 'CD',
      info: '',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스5.jpg',
      title: '트와이스 (TWICE) / TWICE TV4 (3 DVD) (한정판)',
      ProductName: '트와이스 - TWICE TV4 DVD',
      price: 39600,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스5_1.jpg',
    },
    {
      productId: 15,
      category: 'CD',
      sideCategory: 'CD',
      artist: '트와이스',
      img: '/img/ProductCardImg/트와이스6.jpg',
      title: '트와이스 - TWICE TV5 : TWICE IN SWITZERLAND DVD',
      ProductName: '트와이스 - TWICE TV5',
      price: 39500,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/트와이스6_1.jpg',
    },
    {
      productId: 16,
      category: 'CD',
      sideCategory: 'CD',
      artist: '스트레이키즈',
      img: '/img/ProductCardImg/스트레이키즈1.jpg',
      title: '스트레이 키즈 / 3집 정규 앨범',
      ProductName: '스트레이 키즈 3집 정규 앨범 ',
      price: 21000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/스트레이키즈1_1.jpg',
    },
    {
      productId: 17,
      category: 'CD',
      sideCategory: 'CD',
      info: '',
      artist: '스트레이키즈',
      img: '/img/ProductCardImg/스트레이키즈2.jpg',
      title: '스트레이 키즈 - MAXIDENT / 미니앨범 (CASE ver.)',
      ProductName: '스트레이 키즈 - MAXIDENT ',
      price: 14000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/스트레이키즈2_1.jpg',
    },
    {
      productId: 18,
      category: '포토카드',
      sideCategory: 'Photo',
      info: '',
      artist: '블랙핑크',
      img: '/img/ProductCardImg/블랙핑크1.jpg',
      title: '블랙핑크 (BLACKPINK) - 더 게임 포토카드 (세트)',
      ProductName: '블랙핑크 - 더 게임 포토카드 컬렉션',
      price: 45000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/블랙핑크1_1.jpg',
    },
    {
      productId: 19,
      category: 'CD',
      sideCategory: 'DVD',
      info: '',
      artist: '블랙핑크',
      img: '/img/ProductCardImg/블랙핑크2.jpg',
      title: '블랙핑크 - BORN PINK / 2집 정규앨범 (KiT ALBUM)',
      ProductName: '블랙핑크 - BORN PINK ',
      price: 34900,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/블랙핑크2_1.jpg',
    },
    {
      productId: 20,
      category: '포토카드',
      sideCategory: 'Photo',
      info: '[2/21 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니1.jpg',
      title: '샤이니 SHINEE 굿즈 스페셜 포토카드 60장 세트 굿즈',
      ProductName: '샤이니 SHINEE 굿즈 스페셜 포토카드  세트 굿즈',
      price: 9000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니1_1.jpg',
      contentImg2: '/img/ProductDetail/샤이니1_2.jpg',
    },
    {
      productId: 21,
      sideCategory: 'CD',
      category: 'CD',
      info: '',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니2.jpg',
      title: '샤이니 - DON’T CALL ME / 7집 정규앨범 (JEWEL CASE VER.)',
      ProductName: '샤이니 - DON’T CALL ME ',
      price: 13000,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니2_1.jpg',
    },
    {
      productId: 22,
      category: '모자',
      sideCategory: 'Apparel',
      info: ' [2/8 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니3.jpg',
      title:
        ' 태민 아트 캡 샤이니 모자 버킷 디지털 모자 야구 남성용 여성용 모자',
      ProductName: '태민 아트  볼캡',
      price: 41000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니3_1.jpg',
    },
    {
      productId: 23,
      category: '포토카드',
      sideCategory: 'Photo',
      info: ' [6/1 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니4.jpg',
      title: '샤이니(SHINee) - [2020 시즌그리팅(SEASONS GREETINGS 2020)',
      ProductName: '[2020 시즌그리팅(SEASONS GREETINGS 2020)',
      price: 40000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니4_1.jpg',
    },
    {
      productId: 24,
      category: '포토카드',
      sideCategory: 'Photo',
      info: ' [6/12 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니5.jpg',
      title:
        '[특전증정] [SHINee] 2024 SEASONS GREETINGS 미공개 폴라로이드 포토카드 3종 세트​',
      ProductName: '미공개 폴라로이드 포토카드 3종 세트',
      price: 42000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니5_1.jpg',
    },
    {
      productId: 25,
      category: 'CD',
      sideCategory: 'CD',
      info: ' [6/5 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니6.jpg',
      title: '온유 (ONEW) - 미니앨범2집_[DICE] (Photo Book Ver.)​',
      ProductName: '온유 (ONEW) - 미니앨범2집',
      price: 35000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니6_1.jpg',
    },
    {
      productId: 26,
      category: 'CD',
      sideCategory: 'CD',
      info: '',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니7.jpg',
      title: '샤이니(SHINee) - 정규 5집 [1 of 1] (카세트테이프 한정반)',
      ProductName: '샤이니(SHINee) - 정규 5집 ',
      price: 37000,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니7_1.jpg',
    },
    {
      productId: 27,
      category: '키링',
      sideCategory: 'Sundries',
      info: '',
      artist: '라이즈',
      img: '/img/ProductCardImg/라이즈1.jpg',
      title:
        '11 ID 포토 키링 (RIIZE Ver.) / 2024 SEASON S GREETINGS OFFICIAL MD​',
      ProductName: '11 ID 포토 키링 (RIIZE Ver.) ',
      price: 9000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/라이즈1_1.jpg',
    },
    {
      productId: 28,
      category: '키링',
      sideCategory: 'PhSundriesoto',
      info: '[2/21 출시]',
      artist: '라이즈',
      img: '/img/ProductCardImg/라이즈2.jpg',
      title:
        '[RIIZE Get A Guitar] ACRYLIC KEY RING + PHOTO CARD SET [앤톤 ver.]​',
      ProductName: 'ACRYLIC KEY RING + PHOTO CARD SET [앤톤 ver.] ',
      price: 12000,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/라이즈2_1.jpg',
    },
    {
      productId: 29,
      category: 'CD',
      sideCategory: 'CD',
      info: '',
      artist: '라이즈',
      img: '/img/ProductCardImg/라이즈3.jpg',
      title: 'RIIZE (라이즈) - 싱글앨범 1집 : Get A Guitar​',
      ProductName: 'Get A Guitar',
      price: 24900,
      teg: '/img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/라이즈3_1.jpg',
      contentImg2: '/img/ProductDetail/라이즈3_2.jpg',
    },
  ];

  const categories = [
    {
      name: 'CD',
      Category: ['CD', 'DVD'],
    },
    {
      name: 'Photo',
      Category: ['포토카드', '포토카드홀더'],
    },
    {
      name: 'Sundries',
      Category: [
        '악세사리',
        '응원봉',
        '키링',
        '텀블러/컵',
        '핸드폰케이스',
        '그립톡',
      ],
    },
    {
      name: 'Apparel',
      Category: ['모자', '후드티', '잠옷', '티셔츠'],
    },
    {
      name: 'New',
      Category: ['New'],
    },
  ];
  const artists = [
    'YOASOBI',
    '보아',
    '트와이스',
    '칸나',
    '에스파',
    '있지',
    '아이즈원',
    '스트레이키즈',
    '블랙핑크',
    '샤이니',
    '라이즈',
    '엑소',
    '레드벨벳',
    'BTS',
    '뉴진스',
    '르세라핌',
    '투바투',
    '세븐틴',
    '방탄소년단',
    '더보이즈',
    '스테이씨',
    '제로베이스원',
    '몬스타엑스',
    '(여자)아이들',
    '아이브',
  ];
  const handleFilterTeb = (
    category?: string | null,
    artist?: string | null,
  ) => {
    let filtered = goodsList;

    if (artist) {
      filtered = filtered.filter(
        (product: typeProduct) => product.artist === artist,
      );
      setFilter(artist);
    }

    if (category) {
      filtered = filtered.filter(
        (product: typeProduct) => product.category === category,
      );
      setFilter(category);
    }
    setFilteredProduct(filtered);
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

  const lastFilteredProduct = goodsList.filter(
    (product: typeProduct) =>
      (selectedArtists.length === 0 ||
        selectedArtists.includes(product.artist)) &&
      (!filter || product.category === filter) &&
      (!sideCategory || product.sideCategory === sideCategory),
  );

  const handleNextPage = (pageNumber: number) => {
    let page = pageNumber + 1;
    const lastPageNumber = Math.ceil(goodsList.length / pageSize);
    if (page > lastPageNumber) {
      page = 1;
    }
    dispatch(setCurrentPage(page));
    console.log('페이지넘버', page);
  };
  const handlePrevPage = (pageNumber: number) => {
    let page = pageNumber - 1;
    if (page < 1) {
      page = 1;
    }
    dispatch(setCurrentPage(page));
    console.log('페이지넘버', page);
  };

  const sideCategoryFilter = categories.find(
    (category) => category.name === sideCategory,
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
                        id={artist}
                      />
                      <label htmlFor={artist}>{artist}</label>
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
      <button
        onClick={() => {
          saveProduct(ProducList);
        }}
      >
        {' '}
        상품추가 테스트용
      </button>
      {sideCategory}
      <S.GoodsListSection2>
        <S.GoodsListSection2Wrapper>
          <S.ProductsTab
            key="all"
            onClick={() => {
              setFilter(null);
            }}
            selected={filter === null}
          >
            전체보기
          </S.ProductsTab>
          {sideCategoryFilter?.Category.map((item: string) => (
            <S.ProductsTab
              key={item}
              onClick={() => handleFilterTeb(item)}
              selected={filter === item}
            >
              {item}
            </S.ProductsTab>
          ))}
        </S.GoodsListSection2Wrapper>
      </S.GoodsListSection2>
      {/* TODO: 상품리스트 카드 */}
      <S.GoodsListSection3>
        <S.GoodsListSection3Wrapper>
          {
            //상품 필터해서 0개면 상품없다고 말해줌
            lastFilteredProduct?.length > 0 ? (
              (console.log('시작', currentPageGoodsList),
              console.log('카테고리 상품', lastFilteredProduct),
              console.log('필터 상품', filter),
              (filter == null
                ? currentPageGoodsList
                : lastFilteredProduct
              )?.map((product: typeProduct) => (
                <S.ProductCard
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
                        <S.ProductCardInfo>{product.info}</S.ProductCardInfo>
                        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
                      </S.GoodsListCardSection1_1>
                      <S.GoodsListCardSection1_2>
                        <S.ProductCardPrice>
                          {product.price} 원
                        </S.ProductCardPrice>
                        {product.teg ? (
                          <S.ProductCardTeg
                            src={product.teg}
                            alt="이미지태그"
                          />
                        ) : (
                          ''
                        )}
                      </S.GoodsListCardSection1_2>
                    </S.GoodsListCardSection1>
                  </div>
                </S.ProductCard>
              )))
            ) : (
              <S.NotProduct>상품이 없습니다.</S.NotProduct>
            )
          }
        </S.GoodsListSection3Wrapper>
        <S.GoodsListSection4>
          <S.GoodsListSection4Btn
            onClick={() => {
              handlePrevPage(pageNumber);
            }}
          >
            이전 페이지
          </S.GoodsListSection4Btn>
          <S.GoodsListSection4Btn
            onClick={() => {
              handleNextPage(pageNumber);
            }}
          >
            다음 페이지
          </S.GoodsListSection4Btn>
        </S.GoodsListSection4>
      </S.GoodsListSection3>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
