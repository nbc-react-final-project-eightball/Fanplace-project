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
  setFilterR,
} from '../redux/modules/GoodsList/GoodsListSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from 'redux/configStore';

const pageSize = 12;
const GoodsList = () => {
  const reSetCategory = useSelector(
    (state: RootState) => state.goods.filter as string,
  );
  const [goodsList, setGoodsList] = useState<DocumentData>([]);
  const [filter, setFilter] = React.useState<null | String>(reSetCategory);
  const [showArtistFilter, setShowArtistFilter] = React.useState(false);
  const [selectedArtists, setSelectedArtists] = React.useState<string[]>([]);
  const [FilteredProduct, setFilteredProduct] = useState<DocumentData | null>(
    [],
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sideCategory } = useParams<{ sideCategory: string }>();
  console.log('사이드카테고리', sideCategory);
  useEffect(() => {
    setFilter(null);
  }, [sideCategory]);
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

  // sideCategory = 왼쪽 사이드바 카테고리
  // category = 사이트바 카테고리 필터후 나오는 카테고리
  const ProducList = [
    {
      productId: 1,
      sideCategory: 'New',
      category: 'CD&DVD',
      info: '[2/13출시]',
      img: '/img/ProductCardImg/YO1.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 07 YOASOBI THE BOOK 3 / ASIA TOUR 2023-2024 OFFICIAL',
      price: 46000,
      ProductName: '07 YOASOBI THE BOOK 3',
      teg: 'NewAlbum',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/YO1_1.jpg',
    },
    {
      productId: 2,
      sideCategory: 'New',
      category: 'CD',
      info: '[7/13출시]',
      img: '/img/ProductCardImg/YO2.jpg',
      artist: 'YOASOBI',
      title: 'YOASOBI - 13 アイドル / ASIA TOUR 2023-2024 OFFICIAL MD',
      ProductName: '13 アイドル ',
      price: 30000,
      teg: 'NewAlbum',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/YO2_1.jpg',
    },
    {
      productId: 3,
      sideCategory: 'New',
      category: '티셔츠',
      info: '[CONNECTION]',
      img: '/img/ProductCardImg/Boa1.png',
      artist: '보아',
      title: 'BoA',
      ProductName: '보아 티셔츠',
      price: 41000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/Boa1_1.png',
    },
    {
      productId: 4,
      sideCategory: 'CD&DVD',
      category: 'DVD',
      info: '[예약]',
      artist: '있지',
      img: '/img/ProductCardImg/있지1.jpg',
      title: '있지 - BORN TO BE (SPECIAL EDITION) (Mr. Vampire Ver.)',
      ProductName: 'BORN TO BE (SPECIAL EDITION)',
      price: 42000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/있지1_1.jpg',
    },
    {
      productId: 5,
      category: '잠옷',
      sideCategory: 'New',
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
      sideCategory: 'New',
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: '/img/ProductCardImg/칸나2.jpg',
      title: '최종화 (The Last Flower)',
      ProductName: '최종화 ',
      price: 55000,
      teg: 'NewAlbum',
      isSoldOut: false,
      remainingQuantity: 20,
      contentImg1: '/img/ProductDetail/칸나1_1.jpg',
    },
    {
      productId: 7,
      sideCategory: 'CD&DVD',
      category: 'CD',
      info: '[2/13출시]',
      artist: '칸나',
      img: '/img/ProductCardImg/칸나1.jpg',
      title: '아이리 칸나 (Airi Kanna) - ADDICT!ON [화이트 컬러 LP]!ON',
      ProductName: 'ADDICT!ON [화이트 컬러 LP]!ON',
      price: 44000,
      teg: 'NewAlbum',
      isSoldOut: false,
      remainingQuantity: 20,
      contentImg1: '/img/ProductDetail/칸나1_1.jpg',
    },
    {
      productId: 8,
      sideCategory: 'Sundries',
      category: '키링',
      artist: 'BTS',
      img: '/img/ProductCardImg/BTS1.jpg',
      title: 'BTS WORLD 방탄 굿즈 스트랩 키링',
      ProductName: '[BTS월드 공식] BTS WORLD 방탄 굿즈 스트랩 키링',
      price: 8000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/BTS1_1.jpg',
    },
    {
      productId: 9,
      category: 'New',
      sideCategory: '티셔츠',
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
      category: '텀블러/컵',
      sideCategory: 'New',
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
      teg: 'Top10',
      price: 25000,
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
      category: '포토 카드',
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
      category: 'CD&DVD',
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
      category: 'CD&DVD',
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
      category: 'CD&DVD',
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
      category: 'CD&DVD',
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
      category: '포토 카드',
      sideCategory: 'Photo',
      info: '',
      artist: '블랙핑크',
      img: '/img/ProductCardImg/블랙핑크1.jpg',
      title: '블랙핑크 (BLACKPINK) - 더 게임 포토카드 (세트)',
      ProductName: '블랙핑크 - 더 게임 포토카드 컬렉션',
      price: 45000,
      teg: 'BestSeller',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/블랙핑크1_1.jpg',
    },
    {
      productId: 19,
      category: 'CD&DVD',
      sideCategory: 'DVD',
      info: '',
      artist: '블랙핑크',
      img: '/img/ProductCardImg/블랙핑크2.jpg',
      title: '블랙핑크 - BORN PINK / 2집 정규앨범 (KiT ALBUM)',
      ProductName: '블랙핑크 - BORN PINK ',
      price: 34900,
      teg: 'BestSeller',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/블랙핑크2_1.jpg',
    },
    {
      productId: 20,
      category: '포토 카드',
      sideCategory: 'Photo',
      info: '[2/21 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니1.jpg',
      title: '샤이니 SHINEE 굿즈 스페셜 포토카드 60장 세트 굿즈',
      ProductName: '샤이니 SHINEE 굿즈 스페셜 포토카드  세트 굿즈',
      price: 9000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니1_1.jpg',
      contentImg2: '/img/ProductDetail/샤이니1_2.jpg',
    },
    {
      productId: 21,
      sideCategory: 'CD&DVD',
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
      category: '포토 카드',
      sideCategory: 'Photo',
      info: ' [6/1 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니4.jpg',
      title: '샤이니(SHINee) - [2020 시즌그리팅(SEASONS GREETINGS 2020)',
      ProductName: '[2020 시즌그리팅(SEASONS GREETINGS 2020)',
      price: 40000,
      teg: 'BestSeller',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니4_1.jpg',
    },
    {
      productId: 24,
      category: '포토 카드',
      sideCategory: 'Photo',
      info: ' [6/12 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니5.jpg',
      title:
        '[특전증정] [SHINee] 2024 SEASONS GREETINGS 미공개 폴라로이드 포토카드 3종 세트​',
      ProductName: '미공개 폴라로이드 포토카드 3종 세트',
      price: 42000,
      teg: 'BestSeller',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니5_1.jpg',
    },
    {
      productId: 25,
      category: 'CD',
      sideCategory: 'CD&DVD',
      info: ' [6/5 출시]',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니6.jpg',
      title: '온유 (ONEW) - 미니앨범2집_[DICE] (Photo Book Ver.)​',
      ProductName: '온유 (ONEW) - 미니앨범2집',
      price: 35000,
      teg: 'BestSeller',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/샤이니6_1.jpg',
    },
    {
      productId: 26,
      category: 'CD',
      sideCategory: 'CD&DVD',
      info: '',
      artist: '샤이니',
      img: '/img/ProductCardImg/샤이니7.jpg',
      title: '샤이니(SHINee) - 정규 5집 [1 of 1] (카세트테이프 한정반)',
      ProductName: '샤이니(SHINee) - 정규 5집 ',
      price: 37000,
      teg: 'BestSeller',
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
      teg: 'BestSeller',
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

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/라이즈2_1.jpg',
    },
    {
      productId: 29,
      category: 'CD',
      sideCategory: 'CD&DVD',
      info: '',
      artist: '라이즈',
      img: '/img/ProductCardImg/라이즈3.jpg',
      title: 'RIIZE (라이즈) - 싱글앨범 1집 : Get A Guitar​',
      ProductName: 'Get A Guitar',
      price: 24900,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/라이즈3_1.jpg',
      contentImg2: '/img/ProductDetail/라이즈3_2.jpg',
    },
    {
      productId: 30,
      category: 'CD',
      sideCategory: 'CD&DVD',
      info: '',
      artist: '엑소',
      img: '/img/ProductCardImg/엑소1.jpg',
      title: '엑소(EXO) - 정규7집 [EXIST] (Photo Book Ver.) (RANDOM)​',
      ProductName: '엑소(EXO) - 정규7집 [EXIST]',
      price: 17800,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/엑소1_1.jpg',
    },
    {
      productId: 31,
      category: 'CD',
      sideCategory: 'New',
      info: '',
      artist: '레드벨벳',
      img: '/img/ProductCardImg/레드벨벳1.jpg',
      title:
        '레드벨벳 (Red Velvet) - 정규3집 Chill Kill (Photo Book Ver.) 2종세트​',
      ProductName: '레드벨벳 (Red Velvet) - 정규3집 Chill Kill',
      price: 30000,
      teg: 'NewAlbum',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/레드벨벳1_1.jpg',
    },
    {
      productId: 31,
      category: '포토 카드',
      sideCategory: 'Photo',
      info: '',
      artist: 'BTS',
      img: '/img/ProductCardImg/BTS2.jpg',
      title:
        '(포카+포토액자only) 지민 BTS 방탄소년단 FACE 페이스오프 Like Crazy 특전 포토카드​',
      ProductName: '지민 BTS 방탄소년단 FACE 페이스오프 ',
      price: 6500,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/BTS2_1.jpg',
    },
    {
      productId: 32,
      category: '포토 카드',
      sideCategory: 'Photo',
      info: '',
      artist: 'BTS',
      img: '/img/ProductCardImg/BTS3.jpg',
      title: '방탄소년단(BTS) - Proof Compact Edition 랜덤발송',
      ProductName: '지민 BTS 방탄소년단 FACE 페이스오프 ',
      price: 25000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/BTS3_1.jpg',
    },
    {
      productId: 33,
      category: '포토 카드',
      sideCategory: 'Photo',
      info: '',
      artist: '뉴진스',
      img: '/img/ProductCardImg/뉴진스1.jpg',
      title: '뉴진스 - OMG Weverse Albums ver',
      ProductName: '뉴진스 - OMG Weverse Albums ver',
      price: 9300,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/뉴진스1_1.jpg',
    },
    {
      productId: 34,
      sideCategory: 'CD&DVD',
      category: 'CD',
      info: '',
      artist: '뉴진스',
      img: '/img/ProductCardImg/뉴진스2.jpg',
      title:
        '뉴진스 2집 EP (NewJeans) - 2nd EP 겟업[Get Up] 버니비치백 (Bunny Beach Bag ver.',
      ProductName: '뉴진스 2집 EP (NewJeans)',
      price: 55000,
      isSoldOut: false,
      teg: 'Top10',
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/뉴진스2_1.jpg',
      contentImg2: '/img/ProductDetail/뉴진스2_2.jpg',
    },
    {
      productId: 35,
      sideCategory: 'Sundries',
      category: '응원봉',
      info: '',
      artist: '스트레이키즈',
      img: '/img/ProductCardImg/스트레이키즈3.jpg',
      title:
        '스트레이키즈(Stray Kids) OFFICIAL MD - 응원봉 OFFICIAL LIGHT STICK ver.2',
      ProductName: '스트레이키즈 OFFICIAL MD - 응원봉',
      price: 35000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/스트레이키즈3_1.jpg',
    },
    {
      productId: 35,
      sideCategory: '포토 카드',
      category: 'Photo',
      info: '',
      artist: '르세라핌',
      img: '/img/ProductCardImg/르세라핌1.jpg',
      title:
        '[특전증정] 르세라핌(LE SSERAFIM) - [LE SSERAFIMs DAY OFF IN JEJU PHOTOBOOK] ** 카드 리폼 스티커 1종 증정',
      ProductName:
        '르세라핌(LE SSERAFIM) - [LE SSERAFIMs DAY OFF IN JEJU PHOTOBOOK]',
      price: 9000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/르세라핌1_1.jpg',
    },
    {
      productId: 36,
      sideCategory: 'DVD',
      category: 'CD&DVD',
      info: '',
      artist: '세븐틴',
      img: '/img/ProductCardImg/세븐틴1.jpg',
      title:
        '세븐틴 (SEVENTEEN) - [2018 SEVENTEEN CONCERT IDEAL CUT IN SEOUL DVD] (3 DISC)',
      ProductName:
        '세븐틴 (SEVENTEEN) - [2018 SEVENTEEN CONCERT IDEAL CUT IN SEOUL DVD] (3 DISC)',
      price: 45000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/세븐틴1_1.jpg',
    },
    {
      productId: 37,
      sideCategory: 'DVD',
      category: 'CD&DVD',
      info: '',
      artist: '세븐틴',
      img: '/img/ProductCardImg/세븐틴2.jpg',
      title:
        '세븐틴(SEVENTEEN) - 2022 SVT 6TH FAN MEETING [SEVENTEEN in CARAT LAND] (MEMORY BOOK+ DVD)',
      ProductName:
        '세븐틴(SEVENTEEN) - 2022 SVT 6TH FAN MEETING [SEVENTEEN in CARAT LAND] (MEMORY BOOK+ DVD)',
      price: 45000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/세븐틴2_1.jpg',
    },
    {
      productId: 38,
      sideCategory: 'New',
      category: 'CD&DVD',
      info: '',
      artist: '더보이즈',
      img: '/img/ProductCardImg/더보이즈1.jpg',
      title: '더보이즈(THE BOYZ) - 2024 SEASON’S GREETINGS [THE BOYZ POTTERY]',
      ProductName:
        '더보이즈(THE BOYZ) - 2024 SEASON’S GREETINGS [THE BOYZ POTTERY]',
      teg: 'NewAlbum',
      price: 45000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/더보이즈1_1.jpg',
    },
    {
      productId: 39,
      sideCategory: 'New',
      category: '포토 카드',
      info: '',
      artist: '세븐틴',
      img: '/img/ProductCardImg/세븐틴3.jpg',
      title:
        'SEVENTEEN - SEVENTEEN 2024 SEASON’S GREETINGS + 2024 WALL CALENDAR (SET)',
      ProductName:
        'SEVENTEEN - SEVENTEEN 2024 SEASON’S GREETINGS + 2024 WALL CALENDAR (SET)',
      price: 67000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/세븐틴3_1.jpg',
    },
    {
      productId: 40,
      sideCategory: 'New',
      category: 'CD',
      info: '',
      artist: '스테이씨',
      img: '/img/ProductCardImg/스테이씨1.jpg',
      title:
        '스테이씨(STAYC) - The 3rd Mini Album [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
      ProductName:
        '스테이씨(STAYC) - The 3rd Mini Album [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
      teg: 'NewAlbum',
      price: 67000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/스테이씨1_1.jpg',
    },
    {
      productId: 41,
      sideCategory: 'Photo',
      category: '포토 카드 홀더',
      info: '',
      artist: '아이브',
      img: '/img/ProductCardImg/아이브1.jpg',
      title: 'IVE(아이브) - THE 1st EP [I VE MINE] (PLVE ver.)',
      ProductName: 'IVE(아이브) - THE 1st EP [I VE MINE] (PLVE ver.)',
      price: 6000,
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/아이브1_1.jpg',
    },
    {
      productId: 42,
      sideCategory: 'CD&DVD',
      category: 'DVD',
      info: '',
      artist: '몬스타엑스',
      img: '/img/ProductCardImg/몬스타엑스1.jpg',
      title:
        '몬스타엑스 (MONSTA X) - 2023 MONSTA X 7TH OFFICIAL FANCLUB MONBEBE FAN-CONCERT Blu-ray',
      ProductName:
        '몬스타엑스 (MONSTA X) - 2023 MONSTA X 7TH OFFICIAL FANCLUB MONBEBE FAN-CONCERT Blu-ray',
      price: 45000,
      teg: 'Top10',
      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/몬스타엑스1_1.jpg',
    },
    {
      productId: 43,
      sideCategory: 'New',
      category: 'CD',
      info: '',
      artist: '(여자)아이들',
      img: '/img/ProductCardImg/여자아이들1.jpg',
      title:
        '(여자)아이들((G)I-DLE) - 스페셜 앨범 [HEAT] (DIGIPAK - Member Ver.) (5종 중 1종 랜덤)',
      ProductName:
        '(여자)아이들((G)I-DLE) - 스페셜 앨범 [HEAT] (DIGIPAK - Member Ver.) (5종 중 1종 랜덤)',
      teg: 'NewAlbum',
      price: 14000,

      isSoldOut: false,
      remainingQuantity: 100,
      contentImg1: '/img/ProductDetail/여자아이들1_1.jpg',
    },
  ];

  const categories = [
    {
      name: 'CD&DVD',
      Category: ['CD', 'DVD'],
    },
    {
      name: 'Photo',
      Category: ['포토 카드', '포토 카드 홀더'],
    },
    {
      name: 'Sundries',
      Category: ['악세사리', '키링', '텀블러/컵', '핸드폰케이스', '그립톡'],
    },
    {
      name: 'Apparel',
      Category: ['모자', '후드티', '잠옷', '티셔츠'],
    },
    {
      name: 'Pompoms',
      Category: ['응원봉'],
    },
    {
      name: 'New',
      Category: ['CD', 'DVD', '티셔츠', '텀블러/컵', '잠옷'],
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
      dispatch(setFilterR(category));
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
    const lastPageNumber = Math.ceil(lastFilteredProduct.length / pageSize);
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

  const categoryLength = filteredProduct?.length || 0;

  return (
    <S.GoodsListContainer>
      <S.GoodsCategory>
        <S.Cate>
          {sideCategory}
          {/* <span> {`(${categoryLength})`}</span> */}
        </S.Cate>
      </S.GoodsCategory>
      <S.GoodsListContainerSection>
        <S.GoodsListSection1>
          <S.ArtistFilter isOpen={showArtistFilter}>
            <S.ArtistFilterWrapper>
              <S.ArtistFilterBtn
                isOpen={!showArtistFilter}
                onClick={() => setShowArtistFilter(!showArtistFilter)}
              >
                아티스트 필터
              </S.ArtistFilterBtn>
              {showArtistFilter && (
                <>
                  <S.ArtistFilterContainer>
                    {artists.map((artist) => (
                      <S.ArtistFilterArtist>
                        <S.ArtistFilterArtistInput
                          type="checkbox"
                          checked={selectedArtists.includes(artist)}
                          onChange={() => handleArtistChange(artist)}
                          id={artist}
                        />

                        <S.ArtistFilterArtistLabel htmlFor={artist}>
                          <p>{artist}</p>
                        </S.ArtistFilterArtistLabel>
                      </S.ArtistFilterArtist>
                    ))}
                  </S.ArtistFilterContainer>
                  <S.ArtistFilterReset onClick={resetArtistFilter}>
                    초기화
                  </S.ArtistFilterReset>
                </>
              )}
            </S.ArtistFilterWrapper>
          </S.ArtistFilter>
        </S.GoodsListSection1>
        <div style={{ flexGrow: '1' }}>
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
                  //   console.log('시작', currentPageGoodsList),
                  // console.log('카테고리 상품', lastFilteredProduct),
                  // console.log('필터 상품', filter),
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
                            <S.ProductCardInfoArtist>
                              {product.artist}
                            </S.ProductCardInfoArtist>
                            {/* <S.ProductCardInfo>
                              {product.info}
                            </S.ProductCardInfo> */}
                            <S.ProductCardTitle>
                              {product.title}
                            </S.ProductCardTitle>
                          </S.GoodsListCardSection1_1>
                          <S.GoodsListCardSection1_2>
                            <S.ProductCardPrice>
                              {product.price}원
                            </S.ProductCardPrice>
                            {/* {product.teg ? (
                              <S.ProductCardTeg
                                src={product.teg}
                                alt="이미지태그"
                              />
                            ) : (
                              ''
                            )} */}
                          </S.GoodsListCardSection1_2>
                        </S.GoodsListCardSection1>
                      </div>
                    </S.ProductCard>
                  ))
                ) : (
                  <S.NotProduct>상품이 없습니다.</S.NotProduct>
                )
              }
            </S.GoodsListSection3Wrapper>
          </S.GoodsListSection3>
          <S.GoodsListSection4>
            <S.GoodsListSection4Btn
              onClick={() => {
                handlePrevPage(pageNumber);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 0C31.0457 1.44847e-06 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 -1.44847e-06 31.0457 0 20C1.44847e-06 8.9543 8.95431 -1.44847e-06 20 0Z"
                  fill="black"
                />
                <path
                  d="M23.2 13.6C23.2005 13.8492 23.1137 14.0908 22.9547 14.2827L18.176 20L22.784 25.728C22.8726 25.8371 22.9388 25.9627 22.9787 26.0974C23.0186 26.2322 23.0315 26.3735 23.0167 26.5133C23.0018 26.653 22.9594 26.7885 22.8921 26.9118C22.8247 27.0352 22.7336 27.144 22.624 27.232C22.5149 27.3206 22.3894 27.3868 22.2546 27.4267C22.1198 27.4666 21.9785 27.4795 21.8387 27.4647C21.699 27.4498 21.5635 27.4074 21.4402 27.3401C21.3168 27.2727 21.208 27.1816 21.12 27.072L15.968 20.672C15.8111 20.4811 15.7253 20.2417 15.7253 19.9947C15.7253 19.7476 15.8111 19.5082 15.968 19.3173L21.3013 12.9173C21.3909 12.8093 21.5009 12.72 21.625 12.6546C21.7491 12.5892 21.8849 12.5488 22.0246 12.536C22.1643 12.5231 22.3052 12.5379 22.4391 12.5795C22.5731 12.6212 22.6975 12.6889 22.8053 12.7787C22.9277 12.8779 23.0265 13.0031 23.0948 13.1451C23.163 13.2871 23.199 13.4424 23.2 13.6Z"
                  fill="white"
                />
              </svg>
            </S.GoodsListSection4Btn>
            <S.GoodsListSection4Btn
              onClick={() => {
                handleNextPage(pageNumber);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 40C8.9543 40 -3.03189e-06 31.0457 1.74846e-06 20C2.7141e-06 8.9543 8.95431 -6.5288e-06 20 -1.74846e-06C31.0457 -7.8281e-07 40 8.95431 40 20C40 31.0457 31.0457 40 20 40Z"
                  fill="black"
                />
                <path
                  d="M16.8 26.4C16.7995 26.1508 16.8863 25.9092 17.0453 25.7173L21.824 20L17.216 14.272C17.1274 14.1629 17.0612 14.0373 17.0213 13.9026C16.9814 13.7678 16.9685 13.6265 16.9833 13.4867C16.9982 13.347 17.0406 13.2115 17.1079 13.0882C17.1753 12.9648 17.2664 12.856 17.376 12.768C17.4851 12.6794 17.6107 12.6132 17.7454 12.5733C17.8802 12.5334 18.0215 12.5205 18.1613 12.5353C18.301 12.5502 18.4365 12.5926 18.5598 12.6599C18.6832 12.7273 18.792 12.8184 18.88 12.928L24.032 19.328C24.1889 19.5189 24.2747 19.7583 24.2747 20.0053C24.2747 20.2524 24.1889 20.4918 24.032 20.6827L18.6987 27.0827C18.6091 27.1907 18.4991 27.28 18.375 27.3454C18.2509 27.4108 18.1151 27.4512 17.9754 27.464C17.8357 27.4769 17.6949 27.4621 17.5609 27.4205C17.4269 27.3788 17.3025 27.3111 17.1947 27.2213C17.0723 27.1221 16.9735 26.9969 16.9052 26.8549C16.837 26.7129 16.801 26.5576 16.8 26.4Z"
                  fill="white"
                />
              </svg>
            </S.GoodsListSection4Btn>
          </S.GoodsListSection4>
        </div>
      </S.GoodsListContainerSection>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
