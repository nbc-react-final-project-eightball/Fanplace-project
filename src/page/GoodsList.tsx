import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { db } from '../firebase/config';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  addDoc,
  DocumentData,
  startAfter,
} from 'firebase/firestore';
import axios from 'axios';
import { typeProduct } from '../Type/TypeInterface';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../redux/modules/GoodsList/GoodsListSlice';
import { useNavigate, useParams } from 'react-router-dom';
// interface typeProduct {
//   category: string; //카테고리
//   info?: string; //정보
//   img: string; //이미지
//   artist: string; //아티스트
//   title: string; //상품이름
//   price: number; //가격
//   teg?: string; //태그 뉴? 세일?
//   isSoldOut?: boolean; //품절여부
//   remainingQuantity?: number; //남은수량
//   contentImg1?: string; //상품설명이미지
//   contentImg2?: string; //상품설명이미지
// }

const pageSize = 12;
let lastDocument: any = null;
const GoodsList = () => {
  const [goodsList, setGoodsList] = useState<DocumentData>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
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

  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');
      let goodsQuery;

      if (lastDocument) {
        goodsQuery = query(
          goodsCollection,
          orderBy('title'),
          startAfter(lastDocument),
          limit(pageSize),
        );
      } else {
        goodsQuery = query(goodsCollection, orderBy('title'), limit(pageSize));
      }

      const goodsSnapshot = await getDocs(goodsQuery);
      const getGoodsList = goodsSnapshot.docs.map((doc) => doc.data());

      lastDocument = goodsSnapshot.docs[goodsSnapshot.docs.length - 1];

      setGoodsList(getGoodsList);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };
  useEffect(() => {
    fetchGoods();

    console.log('처음 불러오기', goodsList);
  }, []);
  console.log(goodsList);
  const [filter, setFilter] = React.useState<null | String>('');
  const [showArtistFilter, setShowArtistFilter] = React.useState(false);
  const [selectedArtists, setSelectedArtists] = React.useState<string[]>([]);
  const ProducList = [
    {
      productId: 1,
      category: 'CD',
      info: '[2/13출시]',
      img: 'img/ProductCardImg/YO1.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 07 YOASOBI THE BOOK 3 / ASIA TOUR 2023-2024 OFFICIAL',
      price: 46000,
      ProductName: '07 YOASOBI THE BOOK 3',
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: 'img/ProductDetail/YO1_1.jpg',
    },
    {
      productId: 2,
      category: 'CD',
      info: '[2/13출시]',
      img: 'img/ProductCardImg/YO2.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 13 アイドル / ASIA TOUR 2023-2024 OFFICIAL MD',
      ProductName: '13 アイドル ',
      price: 30000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: 'img/ProductDetail/YO1_1.jpg',
    },
    {
      productId: 3,
      category: '티셔츠',
      info: '[CONNECTION]',
      img: 'img/ProductCardImg/Boa1.png',
      artist: '보아',
      title: 'BoA',
      ProductName: '보아티셔츠',
      price: 41000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: 'img/ProductDetail/Boa1_1.png',
    },
    {
      productId: 4,
      category: 'CD',
      info: '[2/13출시]',
      artist: '있지',
      img: 'img/ProductCardImg/있지1.jpg',
      title: '있지 - BORN TO BE (SPECIAL EDITION) (Mr. Vampire Ver.)',
      ProductName: 'BORN TO BE (SPECIAL EDITION)',
      price: 42000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 5,
      category: '잠옷',
      info: '[2/13출시]',
      artist: '에스파',
      img: 'img/ProductCardImg/ESPA.png',
      title: 'PAJAMAS [NINGNING Ver.]',
      ProductName: 'PAJAMAS',
      price: 32000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 6,
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: 'img/ProductCardImg/칸나2.jpg',
      title: '최종화 (The Last Flower)',
      ProductName: '최종화 ',
      price: 55000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 7,
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: 'img/ProductCardImg/칸나1.jpg',
      title: 'ADDICT!ON',
      ProductName: 'ADDICT!ON',
      price: 40000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 8,
      category: '머그컵',
      info: '[2/13출시]',
      artist: '아이즈원',
      img: 'img/ProductCardImg/아이즈원1.jpg',
      title: '아이즈원 - 보틀 / HEART*IZ POP-UP STORE',
      ProductName: '아이즈원 - 보틀  ',
      price: 8000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 9,
      category: '티셔츠',
      info: '[2/13출시]',
      artist: '아이즈원',
      img: 'img/ProductCardImg/아이즈원2.jpg',
      title: '아이즈원 - 02 티셔츠 / 2020 ONEIRIC THEATER',
      ProductName: '아이즈원 - 02 티셔츠 ',
      price: 38000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 10,
      category: '티셔츠',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스1.jpg',
      title: '트와이스 - 23 텀블러 / 2019 ONCE HALLOWEEN 2',
      ProductName: '트와이스 - 23 텀블러 ',
      price: 25000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 11,
      category: '목걸이',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스2.jpg',
      title: '트와이스 - 27 목걸이 / 4TH WORLD TOUR Ⅲ 2ND MD',
      ProductName: '트와이스 - 27 목걸이',
      price: 25000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 12,
      category: '핸드폰케이스',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스3.jpg',
      title: '트와이스 - 04 폰케이스 / 2019 ONCE HALLOWEEN 2',
      ProductName: '트와이스 - 04 폰케이스 ',
      price: 38000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 13,
      category: '포토카드',
      info: '[2/13출시]',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스4.jpg',
      title: '트와이스 - 18 필름 포토 세트 / 4TH WORLD TOUR Ⅲ 2ND MD',
      ProductName: '트와이스 - 18 필름 포토 세트',
      price: 15000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 14,
      category: 'CD',
      info: '',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스5.jpg',
      title: '트와이스 - TWICE TV4 DVD',
      ProductName: '트와이스 - TWICE TV4 DVD',
      price: 39600,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 15,
      category: 'CD',
      info: '',
      artist: '트와이스',
      img: 'img/ProductCardImg/트와이스6.jpg',
      title: '트와이스 - TWICE TV5 : TWICE IN SWITZERLAND DVD',
      ProductName: '트와이스 - TWICE TV5',
      price: 39500,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 16,
      category: 'CD',
      info: '',
      artist: '스트레이키즈',
      img: 'img/ProductCardImg/스트레이키즈1.jpg',
      title: '스트레이 키즈 - ★★★★★ (5-STAR) / 3집 정규 앨범',
      ProductName: '스트레이 키즈 - ★★★★★ (5-STAR) ',
      price: 21000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 17,
      category: 'CD',
      info: '',
      artist: '스트레이키즈',
      img: 'img/ProductCardImg/스트레이키즈2.jpg',
      title: '스트레이 키즈 - MAXIDENT / 미니앨범 (CASE ver.)',
      ProductName: '스트레이 키즈 - MAXIDENT ',
      price: 14000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 18,
      category: '포토카드',
      info: '',
      artist: '블랙핑크',
      img: 'img/ProductCardImg/블랙핑크1.jpg',
      title: '블랙핑크 (BLACKPINK) - 더 게임 포토카드 컬렉션 (세트)',
      ProductName: '블랙핑크 - 더 게임 포토카드 컬렉션',
      price: 45000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 19,
      category: '포토카드',
      info: '',
      artist: '블랙핑크',
      img: 'img/ProductCardImg/블랙핑크2.jpg',
      title: '블랙핑크 - BORN PINK / 2집 정규앨범 (KiT ALBUM)',
      ProductName: '블랙핑크 - BORN PINK ',
      price: 34900,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 20,
      category: '포토카드',
      info: '[2/21 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니1.jpg',
      title:
        '04 ID 포토 키링 (샤이니 Ver.) / 2024 SEASON S GREETINGS OFFICIAL MD',
      ProductName: '04 ID 포토 키링 (샤이니 Ver.) ',
      price: 9000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 21,
      category: 'CD',
      info: '',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니2.jpg',
      title: '샤이니 - DON’T CALL ME / 7집 정규앨범 (JEWEL CASE VER.)',
      ProductName: '샤이니 - DON’T CALL ME ',
      price: 13000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 22,
      category: '모자',
      info: ' [2/8 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니3.jpg',
      title:
        ' 태민 - 06 볼캡 세트 / 2023 TAEMIN SOLO CONCERT [METAMORPH]​ OFFICIAL MD',
      ProductName: '태민 - 06 볼캡 세트 ',
      price: 41000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 23,
      category: '모자',
      info: ' [6/1 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니4.jpg',
      title:
        ' 샤이니 - 03 볼캡 / 2023 SHINee Fanmeeting MD [Everyday is SHINee DAY - Piece of SHINE]​',
      ProductName: '샤이니 - 03 볼캡',
      price: 40000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 24,
      category: '모자',
      info: ' [6/12 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니5.jpg',
      title:
        '태민 - 01 버킷햇 + 포토카드 세트 / 2023 TAEMIN FANMEETING [RE:ACT] 2ND MD​',
      ProductName: '태민 - 01 버킷햇 + 포토카드 세트 ',
      price: 42000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 25,
      category: '티셔츠',
      info: ' [6/5 출시]',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니6.jpg',
      title: '태민 - 02 티셔츠 / 2023 TAEMIN FANMEETING [RE:ACT]​',
      ProductName: '태민 - 02 티셔츠 ',
      price: 35000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 26,
      category: '포토카드',
      info: '',
      artist: '샤이니',
      img: 'img/ProductCardImg/샤이니7.jpg',
      title: '온유 - 로카모빌리티교통카드 Circle​',
      ProductName: '온유 - 로카모빌리티교통카드 ',
      price: 7000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 27,
      category: '키링',
      info: '',
      artist: '라이즈',
      img: 'img/ProductCardImg/라이즈1.jpg',
      title:
        '11 ID 포토 키링 (RIIZE Ver.) / 2024 SEASON S GREETINGS OFFICIAL MD​',
      ProductName: '11 ID 포토 키링 (RIIZE Ver.) ',
      price: 9000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 28,
      category: '포토카드',
      info: '[2/21 출시]',
      artist: '라이즈',
      img: 'img/ProductCardImg/라이즈2.jpg',
      title:
        '22 랜덤 트레이딩 카드 세트 (RIIZE Ver.) / 2024 SEASON S GREETINGS OFFICIAL MD​',
      ProductName: '22 랜덤 트레이딩 카드 세트 (RIIZE Ver.) ',
      price: 9000,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
    {
      productId: 29,
      category: 'CD',
      info: '',
      artist: '라이즈',
      img: 'img/ProductCardImg/라이즈3.jpg',
      title: '위클리 - ColoRise / 5집 미니앨범 (Platform Ver.)​',
      ProductName: '위클리 - ColoRise  ',
      price: 14900,
      teg: 'img/new.svg',
      isSoldOut: false,
      remainingQuantity: 100,
    },
  ];

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
    '스트레이키즈',
    '블랙핑크',
    '샤이니',
    '라이즈',
    '엑소',
    '레드벨벳',
    '엔시티',
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
  const filteredProduct = goodsList.filter(
    (product: typeProduct) =>
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
      <button
        onClick={() => {
          saveProduct(ProducList);
        }}
      >
        {' '}
        상품추가 테스트용
      </button>
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
              filteredProduct?.map((product: typeProduct) => (
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
                        <S.ProductCardInfo>{product.info}?</S.ProductCardInfo>
                        <S.ProductCardTitle>{product.title}</S.ProductCardTitle>
                      </S.GoodsListCardSection1_1>
                      <S.GoodsListCardSection1_2>
                        <S.ProductCardPrice>
                          {product.price} 원
                        </S.ProductCardPrice>
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
        <S.GoodsListSection4>
          {' '}
          <button onClick={fetchGoods}>다음 페이지</button>
        </S.GoodsListSection4>
      </S.GoodsListSection3>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
