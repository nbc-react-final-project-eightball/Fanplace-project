import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledGoodsList/StGoodsList';
import { db } from '../firebase/config';
import {
  collection,
  query,
  getDocs,
  DocumentData,
  where,
  addDoc,
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

  useEffect(() => {
    setFilter(null);
    setShowArtistFilter(false);
  }, [sideCategory]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const saveProduct = async (productList: typeProduct[]) => {
  //   try {
  //     const addGoodsList = await collection(db, 'goodsList');
  //     for (const product of productList) {
  //       await addDoc(addGoodsList, product);
  //     }
  //   } catch (error) {
  //     console.error('상품을 저장하는 데 실패했습니다:', error);
  //   }
  // };

  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');
      const goodsQuery = query(
        goodsCollection,
        where('sideCategory', '==', `${sideCategory}`),
      );

      const goodsSnapshot = await getDocs(goodsQuery);
      const getGoodsList = goodsSnapshot.docs.map((doc) => doc.data());
      setGoodsList(getGoodsList);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };
  useEffect(() => {
    fetchGoods();
  }, [sideCategory]);

  let pageNumber = useSelector((state: RootState) => state.goods.currentPage);
  const filteredProduct = goodsList.filter(
    (product: typeProduct) =>
      (selectedArtists.length === 0 ||
        selectedArtists.includes(product.artist)) &&
      (!filter || product.category === filter) &&
      (!sideCategory || product.sideCategory === sideCategory),
  );
  const totalPage = Math.ceil(filteredProduct.length / pageSize);
  const currentPageGoodsList = filteredProduct.slice(
    (pageNumber - 1) * pageSize,
    pageNumber * pageSize,
  );
  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
    window.scrollTo(0, 0);
  };
  // sideCategory = 왼쪽 사이드바 카테고리
  // category = 사이트바 카테고리 필터후 나오는 카테고리

  // const ProducList = [
  //   {
  //     productId: 1,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '[2/13출시]',
  //     img: '/img/ProductCardImg/nct1.webp',
  //     artist: 'NCT',
  //     title: 'NCT 127 - 2023 시즌그리팅 PhotoCard 세트',
  //     titleEn: "NCT 127 - 2023 SEASON'S GREETINGS PHOTOCARD SET",
  //     price: 23000,
  //     ProductName: '2023 시즌그리팅 PhotoCard 세트',
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/nct1_1.webp',
  //     releaseDate: '2023-02-22',
  //   },
  //   {
  //     productId: 2,
  //     sideCategory: 'CD/DVD',
  //     category: 'CD',
  //     info: '[7/13출시]',
  //     img: '/img/ProductCardImg/nct2.webp',
  //     artist: 'NCT',
  //     title: '정규 4집 - [골든에이지] 아카이빙 버전',
  //     titleEn: 'The 4th Album - [Golden Age] (Archiving Ver.)',
  //     ProductName: '정규 4집 - [골든에이지] 아카이빙 버전 ',
  //     price: 23800,
  //     // 19% 할인 19,300
  //     salePrice: 19300,
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/nct2_1.webp',
  //     releaseDate: '2023-07-13',
  //   },
  //   {
  //     productId: 3,
  //     sideCategory: 'Apparel',
  //     category: '티셔츠',
  //     info: '[CONNECTION]',
  //     img: '/img/ProductCardImg/nct3.webp',
  //     artist: 'NCT',
  //     title: ' [엔시티 꼬마즈 그로서리 스토어] 티셔츠 세트 [마크 ver.]',
  //     titleEn: ' [NCT CCOMAZ GROCERY STORE] 티셔츠 SET [MARK ver.]',
  //     ProductName: '티셔츠 세트 [마크 ver.]',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/nct3_1.webp',
  //     releaseDate: '2023-12-18',
  //   },
  //   {
  //     productId: 4,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '[예약]',
  //     artist: '있지',
  //     img: '/img/ProductCardImg/itzy1.webp',
  //     title: '있지 - BORN TO BE (스폐셜 에디션) (Mr. Vampire Ver.)',
  //     titleEn: 'ITZY - BORN TO BE (SPECIAL EDITION) (Mr. Vampire Ver.)',
  //     ProductName: 'BORN TO BE (스폐셜 에디션)',
  //     price: 12800,
  //     salePrice: 10400,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/itzy1_1.webp',
  //     releaseDate: '2024-01-16',
  //   },
  //   {
  //     productId: 5,
  //     sideCategory: 'Apparel',
  //     category: '잠옷',
  //     info: '[CONNECTION]',
  //     artist: '에스파',
  //     img: '/img/ProductCardImg/aespa1.webp',
  //     title: '파자마 [닝닝 Ver.]',
  //     titleEn: 'PAJAMAS [NINGNING Ver.]',
  //     ProductName: '파자마 [닝닝 Ver.]',
  //     price: 32000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/aespa1_1.webp',
  //     releaseDate: '2023-12-27',
  //   },
  //   {
  //     productId: 6,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '[2/13출시]',
  //     artist: '에스파',
  //     img: '/img/ProductCardImg/aespa2.webp',
  //     title: '미니 4집 [Drama] (Giant Ver.)',
  //     titleEn: 'The 4th Mini Album [Drama] (Giant Ver.)',
  //     ProductName: '미니 4집 [Drama] (Giant Ver.)',
  //     price: 20200,
  //     salePrice: 16400,
  //     // 16400원 19%
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 20,
  //     contentImg1: '/img/ProductDetail/aespa2_1.webp',
  //     releaseDate: '2024-01-04',
  //   },
  //   {
  //     productId: 7,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '[2/13출시]',
  //     artist: '칸나',
  //     img: '/img/ProductCardImg/kanna1.webp',
  //     title: '아이리 칸나 - ADDICT!ON',
  //     titleEn: 'Airi Kanna - ADDICT!ON',
  //     ProductName: '최종화 ',
  //     price: 44000,
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 20,
  //     contentImg1: '/img/ProductDetail/kanna1_1.webp',
  //     releaseDate: '2023-11-18',
  //   },
  //   {
  //     productId: 8,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '',
  //     artist: 'BTS',
  //     img: '/img/ProductCardImg/bts1.webp',
  //     title: "스페셜 8 포토-폴리오 Me, Myself, 뷔 'Veautiful Days'",
  //     titleEn: 'Special 8 Photo-Folio Me, Myself, and V ‘Veautiful Days’',
  //     ProductName: "포토-폴리오 Me, Myself, 뷔 'Veautiful Days'",
  //     price: 33000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts1_1.webp',
  //     releaseDate: '2024-01-08',
  //   },
  //   {
  //     productId: 9,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts2.webp',
  //     title: '지민 (방탄소년단) - FACE / 1집 솔로앨범',
  //     titleEn: 'JIMIN (BTS) - FACE / 1st Album',
  //     ProductName: 'FACE / 1집 솔로앨범',
  //     price: 22000,
  //     salePrice: 18600,
  //     // 18,600 15%
  //     tag: '/img/new.svg',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts2_1.webp',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 10,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: '트와이스',
  //     img: '/img/ProductCardImg/twice1.webp',
  //     title: '나연 리유저블 컵 - IM NAYEON',
  //     titleEn: 'NAYEON REUSABLE CUP - IM NAYEON',
  //     ProductName: '나연 리유저블 컵',
  //     price: 13000,
  //     tag: '/img/new.svg',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/twice1_1.webp',
  //     releaseDate: '2023-12-06',
  //   },
  //   {
  //     productId: 11,
  //     sideCategory: 'Sundries',
  //     category: '액세서리',
  //     info: '',
  //     artist: '트와이스',
  //     img: '/img/ProductCardImg/twice2.webp',
  //     title: '트와이스 ONCE AGAIN 목걸이 - ONCE AGAIN',
  //     titleEn: 'TWICE ONCE AGAIN NECKLACE - ONCE AGAIN',
  //     ProductName: 'ONCE AGAIN 목걸이',
  //     tag: 'Top10',
  //     price: 29000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/twice2_1.webp',
  //     releaseDate: '2024-01-11',
  //   },
  //   {
  //     productId: 12,
  //     sideCategory: 'Sundries',
  //     category: '키링',
  //     info: '',
  //     artist: '트와이스',
  //     img: '/img/ProductCardImg/twice3.webp',
  //     title: '트와이스 휴대폰 키링 세트 - ONCE AGAIN',
  //     titleEn: 'TWICE PHONE KEYRING SET - ONCE AGAIN',
  //     ProductName: '휴대폰 키링 세트 - ONCE AGAIN',
  //     price: 19000,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/twice3_1.webp',
  //     contentImg2: '/img/ProductDetail/twice3_2.webp',
  //     releaseDate: '2023-11-14',
  //   },
  //   {
  //     productId: 13,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '',
  //     artist: '트와이스',
  //     img: '/img/ProductCardImg/twice4.webp',
  //     title: '트와이스 아크릴 PhotoCard 스탠드 - ONCE AGAIN',
  //     titleEn: 'TWICE ACRYLIC PHOTOCARD STAND - ONCE AGAIN',
  //     ProductName: '아크릴 PhotoCard 스탠드',
  //     price: 29000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/twice4_1.webp',
  //     contentImg2: '/img/ProductDetail/twice4_2.webp',
  //     releaseDate: '2023-12-04',
  //   },
  //   {
  //     productId: 14,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '트와이스',
  //     img: '/img/ProductCardImg/twice5.webp',
  //     title: '트와이스 (TWICE) / TWICE TV4 (3 DVD) (한정판)',
  //     titleEn: 'TWICE ACRYLIC PHOTOCARD STAND - ONCE AGAIN',
  //     ProductName: '트와이스 - TWICE TV4 DVD',
  //     price: 39600,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/twice5_1.webp',
  //     releaseDate: '2023-12-31',
  //   },
  //   {
  //     productId: 15,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids1.webp',
  //     title: '스트레이키즈 미니 앨범 樂-STAR (POSTCARD VER.)',
  //     titleEn: 'Stray Kids Mini Album 樂-STAR (POSTCARD VER.)',
  //     ProductName: '미니 앨범 樂-STAR (POSTCARD VER.)',
  //     price: 14700,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids1_1.webp',
  //     releaseDate: '2023-12-30',
  //   },
  //   {
  //     productId: 16,
  //     sideCategory: 'Apparel',
  //     category: '잠옷',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids2.webp',
  //     title: "SKZOO 파자마 세트 - 'PILOT : FOR ★★★★★'",
  //     titleEn: "SKZOO PAJAMA SET - 'PILOT : FOR ★★★★★'",
  //     ProductName: '스트레이 키즈 3집 정규 앨범 ',
  //     price: 89000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids2_1.webp',
  //     releaseDate: '2023-12-11',
  //   },
  //   {
  //     productId: 17,
  //     sideCategory: 'Sundries',
  //     category: '그립톡',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids3.webp',
  //     title: '스트레이 키즈 x SKZOO [THE VICTORY] 그립톡',
  //     titleEn: '스트레이 키즈 x SKZOO [THE VICTORY] SMART TOK',
  //     ProductName: 'SKZOO [THE VICTORY] 그립톡',
  //     price: 13000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids3_1.webp',
  //     releaseDate: '2023-03-20',
  //   },
  //   {
  //     productId: 18,
  //     sideCategory: 'Apparel',
  //     category: '모자',
  //     info: '',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink1.webp',
  //     title: '[ME] 지수 비니',
  //     titleEn: '[ME] JISOO BEANIE',
  //     ProductName: '지수 비니',
  //     price: 45000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink1_1.webp',
  //     releaseDate: '2023-09-27',
  //   },
  //   {
  //     productId: 19,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink2.webp',
  //     title: '블랙핑크 - BORN PINK / 2집 정규 앨범 (KiT ALBUM)',
  //     titleEn: 'BLACKPINK - BORN PINK / The 2nd Album (KiT ALBUM)',
  //     ProductName: '블랙핑크 - BORN PINK / 2집 정규 앨범',
  //     price: 34900,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink2_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 20,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '[2/10 출시]',
  //     artist: '샤이니',
  //     img: '/img/ProductCardImg/shinee2.webp',
  //     title: '샤이니 2024 시즌 그리팅',
  //     titleEn: "SHINee 2024 Season's Greetings",
  //     ProductName: '샤이니 2024 시즌 그리팅',
  //     price: 45000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/shinee2_1.webp',
  //     releaseDate: '2024-02-01',
  //   },
  //   {
  //     productId: 21,
  //     category: 'CD&DVD',
  //     sideCategory: 'CD',
  //     info: '',
  //     artist: '샤이니',
  //     img: '/img/ProductCardImg/shinee2.webp',
  //     title: "정규 7집 - 'Don't Call Me' (Jewel Case Ver.) (랜덤 커버 ver.)",
  //     titleEn:
  //       'The 7th Album - ‘Don’t Call Me’ (Jewel Case Ver.) (Random cover ver.)',
  //     ProductName: "정규 7집 - 'Don't Call Me' (Jewel Case Ver.)",
  //     price: 10900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/shinee2_1.webp',
  //     releaseDate: '2023-01-22',
  //   },
  //   {
  //     productId: 22,
  //     sideCategory: 'Apparel',
  //     category: '모자',
  //     info: '',
  //     artist: '샤이니',
  //     img: '/img/ProductCardImg/shinee3.webp',
  //     title: '아티스트 버킷햇',
  //     titleEn: 'ARTIST BUCKET HAT',
  //     ProductName: '아티스트 버킷햇',
  //     price: 48000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/shinee_3_1.webp',
  //     releaseDate: '2022-04-11',
  //   },
  //   {
  //     productId: 23,
  //     sideCategory: 'Sundries',
  //     category: '액세서리',
  //     info: ' ',
  //     artist: '투바투',
  //     img: '/img/ProductCardImg/txt1.webp',
  //     title: '[태현] 반지 (골드)',
  //     titleEn: '[TAEHYUN] Ring (Gold)',
  //     ProductName: '[태현] 반지 (골드)',
  //     price: 40000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/txt1_1.webp',
  //     releaseDate: '2023-11-11',
  //   },
  //   {
  //     productId: 24,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '',
  //     artist: '투바투',
  //     img: '/img/ProductCardImg/txt2.webp',
  //     title: 'The Name Chapter: FREEFALL (GRAVITY Ver.) 세트​',

  //     titleEn: 'The Name Chapter: FREEFALL (GRAVITY Ver.) Set',
  //     ProductName: 'The Name Chapter: FREEFALL (GRAVITY Ver.) 세트',
  //     price: 63000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/txt2_1.webp',
  //     releaseDate: '2023-09-11',
  //   },
  //   {
  //     productId: 25,
  //     sideCategory: 'CD',
  //     category: 'CD&DVD',
  //     info: ' ',
  //     artist: '샤이니',
  //     img: '/img/ProductCardImg/shinee6.webp',
  //     title: '온유 - 미니앨범2집_[DICE] (Photo Book Ver.)​',
  //     titleEn: 'ONEW - 2nd Album_[DICE] (Photo Book Ver.)',
  //     ProductName: '온유 (ONEW) - 미니앨범2집',
  //     price: 35000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/shinee6_1.webp',
  //     releaseDate: '2022-04-11',
  //   },
  //   {
  //     productId: 26,
  //     sideCategory: 'CD',
  //     category: 'CD&DVD',
  //     info: '',
  //     artist: '샤이니',
  //     img: '/img/ProductCardImg/shinee7.webp',
  //     title: '샤이니(SHINee) - 정규 5집 [1 of 1] (카세트테이프 한정반)',
  //     titleEn: 'SHINee - 5th album [1 of 1] (cassette tape limited edition)',
  //     ProductName: '샤이니(SHINee) - 정규 5집 [1 of 1] (카세트테이프 한정반)',
  //     price: 37000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/shinee7_1.webp',
  //     releaseDate: '2016-10-05',
  //   },
  //   {
  //     productId: 27,
  //     sideCategory: 'Sundries',
  //     category: '키링',
  //     info: '',
  //     artist: '라이즈',
  //     img: '/img/ProductCardImg/riize1.webp',
  //     title: '11 ID 포토 키링 (RIIZE Ver.) / 2024 시즌 그리팅',
  //     titleEn: '11 ID Photo Key Ring (RIIZE Ver.) / 2024 SEASON S GREETINGS',
  //     ProductName: '11 ID 포토 키링 (RIIZE Ver.) / 2024 시즌 그리팅',
  //     price: 9000,
  //     tag: 'NewArrival',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/riize1_1.webp',
  //     releaseDate: '2023-12-27',
  //   },
  //   {
  //     productId: 28,
  //     sideCategory: 'Sundries',
  //     category: '키링',
  //     info: '[2/21 출시]',
  //     artist: '라이즈',
  //     img: '/img/ProductCardImg/riize2.webp',
  //     title: '[RIIZE Get A Guitar] 아크릴 키링 + PhotoCard 세트 [앤톤 ver.]',
  //     titleEn:
  //       '[RIIZE Get A Guitar] ACRYLIC KEY RING + PHOTO CARD SET [앤톤 ver.]',
  //     ProductName: '아크릴 키링 + PhotoCard 세트 [앤톤 ver.]',
  //     price: 12000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/riize2_1.webp',
  //     releaseDate: '2023-11-09',
  //   },
  //   {
  //     productId: 29,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '라이즈',
  //     img: '/img/ProductCardImg/riize3.webp',
  //     title: '라이즈 - 싱글앨범 1집 : Get A Guitar​',
  //     titleEn: 'RIIZE - 1st Single Album : Get A Guitar​',
  //     ProductName: '라이즈 - 싱글앨범 1집 : Get A Guitar',
  //     price: 24900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/riize3_1.webp',
  //     releaseDate: '2023-11-09',
  //   },
  //   {
  //     productId: 30,
  //     sideCategory: 'Apparel',
  //     category: '후드티',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim2.webp',
  //     title: '크롭 후디 (Black)​',
  //     titleEn: 'Crop Hoodie (Black)',
  //     ProductName: '크롭 후디 (Black)',
  //     price: 99000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim2_1.webp',
  //     releaseDate: '2024-01-09',
  //   },
  //   {
  //     productId: 31,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '',
  //     artist: '레드벨벳',
  //     img: '/img/ProductCardImg/redvelvet1.webp',
  //     title: '레드벨벳 - 정규 3집 Chill Kill (Photo Book Ver.) 2종 세트​',
  //     titleEn:
  //       'Red Velvet - 3rd Album Chill Kill (Photo Book Ver.) 2-piece set​',
  //     ProductName: '정규 3집 Chill Kill (Photo Book Ver.) 2종 세트',
  //     price: 30000,
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/redvelvet1_1.webp',
  //     releaseDate: '2024-01-20',
  //   },
  //   {
  //     productId: 32,
  //     sideCategory: 'Apparel',
  //     category: '티셔츠',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim3.webp',
  //     title: '오버사이즈 S/S 티셔츠 (블랙)​',
  //     titleEn: 'Oversized S/S T-shirt (Black)',
  //     ProductName: '오버사이즈 S/S 티셔츠 (Black)',
  //     price: 79000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim3_1.webp',
  //     releaseDate: '2024-01-22',
  //   },
  //   {
  //     productId: 33,
  //     sideCategory: 'Sundries',
  //     category: '폰케이스',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim4.webp',
  //     title: '폰케이스 (스탠다드) (No.2)',
  //     titleEn: 'PHONECASE (STANDARD) (No.2)',
  //     ProductName: '폰케이스 (스탠다드) (No.2)',
  //     price: 19800,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim4_1.webp',
  //     releaseDate: '2023-12-22',
  //   },
  //   {
  //     productId: 34,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '',
  //     artist: '뉴진스',
  //     img: '/img/ProductCardImg/newjeans1.webp',
  //     title: '뉴진스 - OMG Weverse Albums.ver',
  //     titleEn: 'NEWJEANS - OMG Weverse Albums.ver',
  //     ProductName: 'OMG Weverse Albums ver',
  //     price: 13500,
  //     salePrice: 11000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/newjeans1_1.webp',
  //     releaseDate: '2023-04-22',
  //   },
  //   {
  //     productId: 35,
  //     sideCategory: 'CD&DVD',
  //     category: 'DVD',
  //     info: '',
  //     artist: '뉴진스',
  //     img: '/img/ProductCardImg/newjeans2.webp',
  //     title: '뉴진스 2집 EP - 2nd EP 겟업[Get Up] 버니비치백',
  //     titleEn: 'NewJeans - 2nd EP [Get Up] (Bunny Beach Bag ver.)',
  //     ProductName: '뉴진스 2집 EP - 2nd EP 겟업[Get Up] 버니비치백',
  //     price: 55000,
  //     isSoldOut: false,
  //     tag: 'Top10',
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/newjeans2_1.webp',
  //     contentImg2: '/img/ProductDetail/newjeans2_2.webp',
  //     releaseDate: '2023-06-24',
  //   },
  //   {
  //     productId: 36,
  //     sideCategory: 'Pompoms',
  //     category: '응원봉',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids4.webp',
  //     title: '스트레이키즈 - 응원봉 ver.2',
  //     titleEn: 'Stray Kids - OFFICIAL LIGHT STICK ver.2',
  //     ProductName: '스트레이키즈 - 응원봉 ver.2',
  //     price: 35000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids4_1.webp',
  //     releaseDate: '2023-09-24',
  //   },
  //   {
  //     productId: 37,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim1.webp',
  //     title: '르세라핌 - [르세라핌 제주 포토북]',
  //     titleEn: 'LE SSERAFIM - [LE SSERAFIMs DAY OFF IN JEJU PHOTOBOOK]',
  //     ProductName: '르세라핌 - [르세라핌 제주 포토북]',
  //     price: 9000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim1_1.webp',
  //     releaseDate: '2023-12-09',
  //   },
  //   {
  //     productId: 38,
  //     sideCategory: 'CD&DVD',
  //     category: 'DVD',
  //     info: '',
  //     artist: '세븐틴',
  //     img: '/img/ProductCardImg/seventeen1.webp',
  //     title: '세븐틴 - [2018 세븐틴 서울 콘서트 DVD] (3 DISC)',
  //     titleEn:
  //       '세븐틴 (SEVENTEEN) - [2018 SEVENTEEN CONCERT IDEAL CUT IN SEOUL DVD] (3 DISC)',
  //     ProductName: '세븐틴 - [2018 세븐틴 서울 콘서트 DVD] (3 DISC)',
  //     price: 45000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/seventeen1_1.webp',
  //     releaseDate: '2019-01-03',
  //   },
  //   {
  //     productId: 39,
  //     sideCategory: 'CD&DVD',
  //     category: 'DVD',
  //     info: '',
  //     artist: '세븐틴',
  //     img: '/img/ProductCardImg/seventeen2.webp',
  //     title: '세븐틴 - 2022 세븐틴 6th 팬미팅 [SEVENTEEN in CARAT LAND]',
  //     titleEn: 'SEVENTEEN - 2022 SVT 6TH FAN MEETING [SEVENTEEN in CARAT LAND]',
  //     ProductName: '세븐틴 - 2022 세븐틴 6th 팬미팅 [SEVENTEEN in CARAT LAND]',
  //     price: 45000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/seventeen2_1.webp',
  //     releaseDate: '2023-01-20',
  //   },
  //   {
  //     productId: 40,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '',
  //     artist: '더보이즈',
  //     img: '/img/ProductCardImg/theboyz1.webp',
  //     title: '더보이즈- 2024 시즌 그리팅 [THE BOYZ POTTERY]',
  //     titleEn: 'THE BOYZ - 2024 SEASON’S GREETINGS [THE BOYZ POTTERY]',
  //     ProductName: '더보이즈- 2024 시즌 그리팅 [THE BOYZ POTTERY]',
  //     price: 45000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/theboyz1_1.webp',
  //     releaseDate: '2024-01-28',
  //   },
  //   {
  //     productId: 41,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '',
  //     artist: '세븐틴',
  //     img: '/img/ProductCardImg/seventeen3.webp',
  //     title: '세븐틴 2024 시즌 그리팅 + 2024 달력 (세트)',
  //     titleEn: 'SEVENTEEN 2024 SEASON’S GREETINGS + 2024 WALL CALENDAR (SET)',
  //     ProductName: '세븐틴 2024 시즌 그리팅 + 2024 달력 (세트)',
  //     price: 67000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/seventeen3_1.webp',
  //     releaseDate: '2024-01-08',
  //   },
  //   {
  //     productId: 42,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '',
  //     artist: '스테이씨',
  //     img: '/img/ProductCardImg/stayc1.webp',
  //     title:
  //       '스테이씨 - 3집 미니 앨범 [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
  //     titleEn:
  //       '스테이씨(STAYC) - The 3rd Mini Album [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
  //     ProductName: '스테이씨 - 3집 미니 앨범 [TEENFRESH] (6종 중 랜덤 1종)',
  //     tag: 'NewAlbum',
  //     price: 67000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/stayc1_1.webp',
  //     releaseDate: '2023-11-08',
  //   },
  //   {
  //     productId: 43,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive1.webp',
  //     title: "아이브 - THE 1st EP [I'VE MINE]",
  //     titleEn: "IVE- THE 1st EP [I'VE MINE]",
  //     ProductName: "아이브 - THE 1st EP [I'VE MINE]",
  //     price: 88000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive1_1.webp',
  //     releaseDate: '2023-10-17',
  //   },
  //   {
  //     productId: 44,
  //     sideCategory: 'CD&DVD',
  //     category: 'DVD',
  //     info: '',
  //     artist: '몬스타엑스',
  //     img: '/img/ProductCardImg/monstax1.webp',
  //     title: '몬스타엑스 - 2023 7th 정규 몬베베 팬 콘서트 블루레이',
  //     titleEn:
  //       '몬스타엑스 (MONSTA X) - 2023 MONSTA X 7TH OFFICIAL FANCLUB MONBEBE FAN-CONCERT Blu-ray',
  //     ProductName: '몬스타엑스 - 2023 7th 정규 몬베베 팬 콘서트 블루레이',
  //     price: 45000,
  //     tag: 'Top10',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/monstax1_1.webp',
  //     releaseDate: '2023-08-27',
  //   },
  //   {
  //     productId: 45,
  //     sideCategory: 'CD&DVD',
  //     category: 'DVD',
  //     info: '',
  //     artist: '(여자)아이들',
  //     img: '/img/ProductCardImg/idle1.webp',
  //     title:
  //       '(여자)아이들 - 스페셜 앨범 [HEAT] (DIGIPAK - Member Ver.) (5종 중 1종 랜덤)',
  //     titleEn:
  //       '(G)I-DLE - Special Album [HEAT] (DIGIPAK - Member Ver.) (1 random out of 5 types)',
  //     ProductName:
  //       '(여자)아이들 - 스페셜 앨범 [HEAT] (DIGIPAK - Member Ver.) (5종 중 1종 랜덤)',
  //     tag: 'NewAlbum',
  //     price: 14000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/idle1_1.webp',
  //     releaseDate: '2023-10-27',
  //   },
  //   {
  //     productId: 46,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '[2/13출시]',
  //     artist: '칸나',
  //     img: '/img/ProductCardImg/kanna1.webp',
  //     title: '아이리 칸나 - ADDICT!ON',
  //     titleEn: 'Airi Kanna - ADDICT!ON',
  //     ProductName: '최종화 ',
  //     price: 44000,
  //     tag: 'NewAlbum',
  //     isSoldOut: false,
  //     remainingQuantity: 20,
  //     contentImg1: '/img/ProductDetail/kanna1_1.webp',
  //     releaseDate: '2023-09-06',
  //   },
  //   {
  //     productId: 47,
  //     sideCategory: 'Pompoms',
  //     category: '응원봉',
  //     info: '',
  //     artist: '아이즈원',
  //     img: '/img/ProductCardImg/izone1.webp',
  //     title: '아이즈원 - 공식 응원봉',
  //     titleEn: 'IZONE - OFFICIAL FANLIGHT',
  //     ProductName: '공식 응원봉',
  //     price: 35000,
  //     tag: '/img/new.svg',
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/izone1_1.webp',
  //     releaseDate: '2022-10-20',
  //   },
  //   {
  //     productId: 48,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드 홀더',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive2.webp',
  //     title: "아이브 - THE 1st EP [I'VE MINE] (PLVE Ver.)",
  //     titleEn: "IVE- THE 1st EP [I'VE MINE] (PLVE Ver.)",
  //     ProductName: "아이브 - THE 1st EP [I'VE MINE] (PLVE Ver.)",
  //     price: 14700,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive2_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 49,
  //     sideCategory: 'New',
  //     category: '응원봉',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim5.webp',
  //     title: '르세라핌 - 공식 응원봉​',
  //     titleEn: 'Le SSERAFIM - Official Light Stick',
  //     ProductName: '르세라핌 - 공식 응원봉',
  //     price: 49000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim5_1.webp',
  //     releaseDate: '2024-01-20',
  //   },
  //   {
  //     productId: 50,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '',
  //     artist: '레드벨벳',
  //     img: '/img/ProductCardImg/redvelvet2.webp',
  //     title: '레드벨벳 - CHILL KILL [정규 3집] [SMINI VER]​',
  //     titleEn: 'REDVELVET - CHILL KILL [Third Album] [SMINI VER]',
  //     ProductName: '레드벨벳 - CHILL KILL [정규 3집] [SMINI VER]',
  //     price: 15500,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/redvelvet2_1.webp',
  //     releaseDate: '2023-12-20',
  //   },
  //   {
  //     productId: 51,
  //     sideCategory: 'PhotoCard',
  //     category: '포토북',
  //     info: '',
  //     artist: '세븐틴',
  //     img: '/img/ProductCardImg/seventeen4.webp',
  //     title:
  //       '세븐틴 (SEVENTEEN) - 2023 SVT 7TH FAN MEETING [SEVENTEEN in CARAT LAND] MEMORY BOOK+ DIGITAL CODE​',
  //     titleEn: 'MEMORY BOOK+ DIGITAL CODE',
  //     ProductName: '세븐틴 (SEVENTEEN) - 2023 SVT 7TH FAN MEETING',
  //     price: 45500,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/seventeen4_1.webp',
  //     releaseDate: '2023-12-20',
  //   },
  //   {
  //     productId: 52,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids5.webp',
  //     title:
  //       'Stray Kids(스트레이 키즈) - 정규 1집 리패키지 IN生 (IN LIFE) 랜덤',
  //     titleEn:
  //       'Stray Kids(스트레이 키즈) - 정규 1집 리패키지 IN生 (IN LIFE) 랜덤',
  //     ProductName:
  //       'Stray Kids(스트레이 키즈) - 정규 1집 리패키지 IN生 (IN LIFE) 랜덤',
  //     price: 17900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids15_1.webp',
  //     releaseDate: '2023-12-20',
  //   },
  //   {
  //     productId: 53,
  //     sideCategory: 'New',
  //     category: 'CD',
  //     info: '',
  //     artist: '스트레이키즈',
  //     img: '/img/ProductCardImg/straykids6.webp',
  //     title:
  //       '스트레이 키즈(Stray Kids) - 정규 3집 [★★★★★ (5-STAR)] (LIMITED VER.)',
  //     titleEn:
  //       '스트레이 키즈(Stray Kids) - 정규 3집 [★★★★★ (5-STAR)] (LIMITED VER.)',
  //     ProductName:
  //       '스트레이 키즈(Stray Kids) - 정규 3집 [★★★★★ (5-STAR)] (LIMITED VER.)',
  //     price: 17900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/straykids16_1.webp',
  //     releaseDate: '2024-02-07',
  //   },
  //   {
  //     productId: 54,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '있지',
  //     img: '/img/ProductCardImg/itzy2.webp',
  //     title: '있지(ITZY) - [BORN TO BE] (LIMITED VER.)',
  //     titleEn: '있지(ITZY) - [BORN TO BE] (LIMITED VER.)',
  //     ProductName: '있지(ITZY) - [BORN TO BE] (LIMITED VER.)',
  //     price: 15500,
  //     salePrice: 13400,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/itzy2_1.webp',
  //     releaseDate: '2024-01-16',
  //   },
  //   {
  //     productId: 55,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '있지',
  //     img: '/img/ProductCardImg/itzy3.webp',
  //     title: 'ITZY(있지) - [IT Z ME] (버전 3종 중 랜덤)',
  //     titleEn: 'ITZY(있지) - [IT Z ME] (버전 3종 중 랜덤)',
  //     ProductName: 'ITZY(있지) - [IT Z ME] (버전 3종 중 랜덤)',
  //     price: 15500,
  //     salePrice: 13300,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/itzy3_1.webp',
  //     releaseDate: '2024-01-16',
  //   },
  //   {
  //     productId: 56,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '있지',
  //     img: '/img/ProductCardImg/itzy4.webp',
  //     title: '있지(ITZY) - [IT’z ICY] (IT’Z ver / ICY ver. 2종 중 랜덤발송)',
  //     titleEn: '있지(ITZY) - [IT’z ICY] (IT’Z ver / ICY ver. 2종 중 랜덤발송)',
  //     ProductName:
  //       '있지(ITZY) - [IT’z ICY] (IT’Z ver / ICY ver. 2종 중 랜덤발송)',
  //     price: 15500,
  //     salePrice: 13300,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/itzy4_1.webp',
  //     releaseDate: '2024-01-16',
  //   },
  //   {
  //     productId: 57,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '스테이씨',
  //     img: '/img/ProductCardImg/stayc2.webp',
  //     title:
  //       '스테이씨 - 3집 미니 앨범 [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
  //     titleEn:
  //       '스테이씨(STAYC) - The 3rd Mini Album [TEENFRESH] (6종 중 랜덤 1종) (Digipak Ver.)',
  //     ProductName: '스테이씨 - 3집 미니 앨범 [TEENFRESH] (6종 중 랜덤 1종)',
  //     price: 47500,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/stayc2_1.webp',
  //     releaseDate: '2023-11-08',
  //   },
  //   {
  //     productId: 58,
  //     sideCategory: 'Pompoms',
  //     category: '응원봉',
  //     info: '',
  //     artist: '스테이씨',
  //     img: '/img/ProductCardImg/stayc3.webp',
  //     title:
  //       '스테이씨 (STAYC) 2ND FANMEETING [SWITH GELATO FACTORY] OFFICIAL MD - 공식 응원봉 OFFICIAL LIGHT STICK',
  //     titleEn: '',
  //     ProductName: '스테이씨 공식 응원봉 OFFICIAL LIGHT STICK',
  //     price: 43000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/stayc3_1.webp',
  //     releaseDate: '2023-06-20',
  //   },
  //   {
  //     productId: 59,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim6.webp',
  //     title:
  //       '르세라핌 (LE SSERAFIM) - 미니 3집 [EASY] (Weverse Albums ver.) (2종 세트)​',
  //     titleEn:
  //       '르세라핌 (LE SSERAFIM) - 미니 3집 [EASY] (Weverse Albums ver.) (2종 세트)',
  //     ProductName:
  //       '르세라핌 (LE SSERAFIM) - 미니 3집 [EASY] (Weverse Albums ver.) (2종 세트)',
  //     price: 49000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim6_1.webp',
  //     releaseDate: '2024-01-20',
  //   },
  //   {
  //     productId: 60,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim7.webp',
  //     title:
  //       '르세라핌(LE SSERAFIM) - 2nd 미니앨범 [ANTIFRAGILE] (Weverse Albums Ver.)​',
  //     titleEn:
  //       '르세라핌(LE SSERAFIM) - 2nd 미니앨범 [ANTIFRAGILE] (Weverse Albums Ver.)',
  //     ProductName:
  //       '르세라핌(LE SSERAFIM) - 2nd 미니앨범 [ANTIFRAGILE] (Weverse Albums Ver.)',
  //     price: 49000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim7_1.webp',
  //     releaseDate: '2022-10-17',
  //   },
  //   {
  //     productId: 61,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     info: '',
  //     artist: '르세라핌',
  //     img: '/img/ProductCardImg/lesserafim8.webp',
  //     title: '르세라핌 (LE SSERAFIM) - [FEARLESS] (1ST 미니앨범) (세트)​',
  //     titleEn: '르세라핌 (LE SSERAFIM) - [FEARLESS] (1ST 미니앨범) (세트)',
  //     ProductName: '르세라핌 (LE SSERAFIM) - [FEARLESS] (1ST 미니앨범) (세트)',
  //     price: 35400,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/lesserafim8_1.webp',
  //     releaseDate: '2022-10-17',
  //   },
  //   {
  //     productId: 62,
  //     sideCategory: 'Sundries',
  //     category: '폰케이스',
  //     info: '',
  //     artist: '(여자)아이들',
  //     img: '/img/ProductCardImg/idle2.webp',
  //     title: '[(G)I-DLE] I-LAND:WHO AM I 폰스트랩',
  //     titleEn: '',
  //     ProductName: '[(G)I-DLE] I-LAND:WHO AM I 폰스트랩',

  //     price: 10000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/idle2_1.webp',
  //     releaseDate: '2023-10-27',
  //   },
  //   {
  //     productId: 63,
  //     sideCategory: 'PhotoCard',
  //     category: '포토카드',
  //     info: '',
  //     artist: '(여자)아이들',
  //     img: '/img/ProductCardImg/idle3.webp',
  //     title: '[(G)I-DLE] I-LAND:WHO AM I 스페셜 포토 티켓 세트',
  //     titleEn: '',
  //     ProductName: '[(G)I-DLE] I-LAND:WHO AM I 스페셜 포토 티켓 세트',
  //     price: 10000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/idle3_1.webp',
  //     releaseDate: '2023-10-27',
  //   },
  //   {
  //     productId: 64,
  //     sideCategory: 'Apparel',
  //     category: '티셔츠',
  //     info: '',
  //     artist: '(여자)아이들',
  //     img: '/img/ProductCardImg/idle4.webp',
  //     title: '[(G)I-DLE] I-LAND:WHO AM I 티셔츠',
  //     titleEn: '',
  //     ProductName: '[(G)I-DLE] I-LAND:WHO AM I 티셔츠',
  //     price: 32000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/idle4_1.webp',
  //     releaseDate: '2023-10-27',
  //   },
  //   {
  //     productId: 65,
  //     sideCategory: 'Apparel',
  //     category: '후드티',
  //     info: '',
  //     artist: '(여자)아이들',
  //     img: '/img/ProductCardImg/idle5.webp',
  //     title:
  //       '(G)I-DLE (여자)아이들 [GBC in the NEVERLAND] OFFICIAL MD 후드 티셔츠',
  //     titleEn: '',
  //     ProductName:
  //       '(G)I-DLE (여자)아이들 [GBC in the NEVERLAND] OFFICIAL MD 후드 티셔츠',
  //     price: 52000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/idle4_1.webp',
  //     releaseDate: '2023-10-27',
  //   },
  //   {
  //     productId: 66,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink3.webp',
  //     title:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (ROSE ver.)',
  //     titleEn: '',
  //     ProductName:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (ROSE ver.)',
  //     price: 15900,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink3_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 67,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink4.webp',
  //     title:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (JISOO ver.)',
  //     titleEn: '',
  //     ProductName:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (JISOO ver.)',
  //     price: 15900,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink3_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 67,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink5.webp',
  //     title:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (LISA ver.)',
  //     titleEn: '',
  //     ProductName:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (LISA ver.)',
  //     price: 15900,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink3_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 68,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink6.webp',
  //     title:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (JENNIE ver.)',
  //     titleEn: '',
  //     ProductName:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (JENNIE ver.)',
  //     price: 15900,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink3_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 69,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink7.webp',
  //     title:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (4종 세트)',
  //     titleEn: '',
  //     ProductName:
  //       '블랙핑크(BLACKPINK) - 2nd ALBUM [BORN PINK] (DIGIPACK ver.) (4종 세트)',
  //     price: 52900,

  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink3_1.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 70,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink8.webp',
  //     title:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (JENNIE Ver.) (수입반)',
  //     titleEn: '',
  //     ProductName:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (JENNIE Ver.) (수입반)',
  //     price: 65900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink8_1.webp',
  //     contentImg2: '/img/ProductDetail/blackpink8_2.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 71,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink9.webp',
  //     title:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (JISOO Ver.) (수입반)',
  //     titleEn: '',
  //     ProductName:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (JISOO Ver.) (수입반)',
  //     price: 65900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink9_1.webp',
  //     contentImg2: '/img/ProductDetail/blackpink9_2.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 71,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink10.webp',
  //     title:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (LISA Ver.) (수입반)',
  //     titleEn: '',
  //     ProductName:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (LISA Ver.) (수입반)',
  //     price: 65900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink10_1.webp',
  //     contentImg2: '/img/ProductDetail/blackpink10_2.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 72,
  //     sideCategory: 'CD&DVD',
  //     category: 'CD',
  //     artist: '블랙핑크',
  //     img: '/img/ProductCardImg/blackpink11.webp',
  //     title:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (ROSÉ Ver.) (수입반)',
  //     titleEn: '',
  //     ProductName:
  //       '[교환반품불가] 블랙핑크 (BLACKPINK) - 1st FULL ALBUM [THE ALBUM] (JP Ver.) (ROSÉ Ver.) (수입반)',
  //     price: 65900,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/blackpink11_1.webp',
  //     contentImg2: '/img/ProductDetail/blackpink11_2.webp',
  //     releaseDate: '2023-07-11',
  //   },
  //   {
  //     productId: 73,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive3.webp',
  //     title: '아이브(IVE) - [THE PROM QUEENS] Official MD - 머그컵 MUG CUP',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 머그컵 MUG CUP',
  //     price: 14700,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive3_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 74,
  //     sideCategory: 'Pompoms',
  //     category: '응원봉',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive4.webp',
  //     title:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 응원봉 OFFICIAL LIGHT STICK ver.1',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 응원봉 OFFICIAL LIGHT STICK ver.1',
  //     price: 42700,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive4_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 75,
  //     sideCategory: 'Apparel',
  //     category: '모자',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive5.webp',
  //     title: '아이브(IVE) - [THE PROM QUEENS] Official MD - 볼캡 BALL CAP',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 볼캡 BALL CAP',
  //     price: 35700,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive5_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 76,
  //     sideCategory: 'Apparel',
  //     category: '후드티',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive6.webp',
  //     title: '아이브(IVE) - [THE PROM QUEENS] Official MD - 후드티 HOODIE',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 후드티 HOODIE',
  //     price: 65000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive6_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 77,
  //     sideCategory: 'Sundries',
  //     category: '액세서리',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive7.webp',
  //     title:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 헤어핀 세트 HAIR PIN SET',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 헤어핀 세트 HAIR PIN SET',
  //     price: 65000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive7_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 78,
  //     sideCategory: 'Sundries',
  //     category: '액세서리',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive8.webp',
  //     title:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 스크런치 세트 SCRUNCHIE SET',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 스크런치 세트 SCRUNCHIE SET',
  //     price: 25000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive8_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 79,
  //     sideCategory: 'Sundries',
  //     category: '그립톡',
  //     info: '',
  //     artist: '아이브',
  //     img: '/img/ProductCardImg/ive9.webp',
  //     title:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 스크런치 세트 SCRUNCHIE SET',
  //     titleEn: '',
  //     ProductName:
  //       '아이브(IVE) - [THE PROM QUEENS] Official MD - 스크런치 세트 SCRUNCHIE SET',
  //     price: 25000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/ive9_1.webp',
  //     releaseDate: '2023-11-20',
  //   },
  //   {
  //     productId: 80,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts3.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (BTS)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (BTS)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 81,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts4.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (RM)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (RM)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 82,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts5.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (진)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (진)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 83,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts6.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (슈가)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (슈가)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 84,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts7.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (제이홉)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (제이홉)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 85,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts8.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (지민)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (지민)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 86,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts9.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (뷔)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (뷔)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  //   {
  //     productId: 87,
  //     sideCategory: 'Sundries',
  //     category: '텀블러/컵',
  //     info: '',
  //     artist: 'bts',
  //     img: '/img/ProductCardImg/bts10.webp',
  //     title: '[반품교환불가] 방탄소년단(BTS) - Built NY x BTS 보틀 (정국)',
  //     titleEn: '',
  //     ProductName: '방탄소년단(BTS) - Built NY x BTS 보틀 (정국)',
  //     price: 36000,
  //     isSoldOut: false,
  //     remainingQuantity: 100,
  //     contentImg1: '/img/ProductDetail/bts3_1.jpg',
  //     releaseDate: '2024-01-18',
  //   },
  // ];

  const categories = [
    {
      name: 'CD&DVD',
      category: ['CD', 'DVD'],
    },
    {
      name: 'PhotoCard',
      category: ['포토카드', '포토북', '포토카드 홀더'],
    },
    {
      name: 'Sundries',
      category: ['액세서리', '키링', '텀블러/컵', '폰케이스', '그립톡'],
    },
    {
      name: 'Apparel',
      category: ['모자', '후드티', '잠옷', '티셔츠'],
    },
    {
      name: 'Pompoms',
      category: ['응원봉'],
    },
    {
      name: 'New',
      category: ['CD', 'DVD', '티셔츠', '텀블러/컵', '잠옷'],
    },
  ];
  const artists = [
    '뉴진스',
    '더보이즈',
    '라이즈',
    '레드벨벳',
    '르세라핌',
    '몬스타엑스',
    '블랙핑크',
    '샤이니',
    '세븐틴',
    '스테이씨',
    '스트레이키즈',
    '(여자)아이들',
    '아이브',
    '아이즈원',
    '에스파',
    '엑소',
    '엔시티',
    '있지',
    '제로베이스원',
    '칸나',
    '투바투',
    '트와이스',
    'BTS',
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
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(page));
  };
  const handlePrevPage = (pageNumber: number) => {
    let page = pageNumber - 1;
    if (page < 1) {
      page = 1;
    }
    window.scrollTo(0, 0);
    dispatch(setCurrentPage(page));
  };

  const sideCategoryFilter = categories.find(
    (category) => category.name === sideCategory,
  );

  return (
    <S.GoodsListContainer>
      <S.GoodsCategory>
        <S.Cate>
          {sideCategory}
          <span>({lastFilteredProduct.length})</span>
        </S.Cate>
      </S.GoodsCategory>
      <S.GoodsListContainerSection>
        <S.GoodsListSection1>
          <S.ArtistFilter $isOpen={showArtistFilter}>
            <S.ArtistFilterWrapper>
              <S.ArtistFilterBtn
                $isOpen={!showArtistFilter}
                onClick={() => setShowArtistFilter(!showArtistFilter)}
              >
                아티스트 필터
              </S.ArtistFilterBtn>
              {showArtistFilter && (
                <>
                  <S.ArtistFilterContainer>
                    {artists.map((artist) => (
                      <S.ArtistFilterArtist key={artist}>
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
          {/* <button
            onClick={() => {
              saveProduct(ProducList);
            }}
          >
            {' '}
            상품추가 테스트용
          </button> */}

          <S.GoodsListSection2>
            <S.GoodsListSection2Wrapper>
              <S.ProductsTab
                onClick={() => {
                  setFilter(null);
                }}
                selected={filter === null}
              >
                전체보기
              </S.ProductsTab>
              {sideCategoryFilter?.category.map((item: string) => (
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
                  (filter == null
                    ? currentPageGoodsList
                    : lastFilteredProduct
                  )?.map((product: typeProduct) => (
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
                            <S.ProductCardTitle>
                              {product.title}
                            </S.ProductCardTitle>
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
                                  <h3>
                                    {product.salePrice.toLocaleString()}원
                                  </h3>
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
                  ))
                ) : (
                  <S.NotProduct>
                    <div>
                      {Array.from({ length: 12 }).map((_, index) => (
                        <S.ProductCard>
                          <S.ProductCardImgBox>
                            <S.Simg />
                            <div></div>
                          </S.ProductCardImgBox>
                          <div>
                            <S.GoodsListCardSection1>
                              <S.GoodsListCardSection1_1>
                                <S.ProductCardInfoArtist>
                                  <S.SBar />
                                </S.ProductCardInfoArtist>
                                <S.ProductCardTitle>
                                  <S.SBar />
                                </S.ProductCardTitle>
                                <S.ProductReleaseDate>
                                  <S.SBar />
                                </S.ProductReleaseDate>
                              </S.GoodsListCardSection1_1>
                              <S.GoodsListCardSection1_2>
                                <S.ProductCardPrice>
                                  <S.SBar />
                                </S.ProductCardPrice>
                              </S.GoodsListCardSection1_2>
                            </S.GoodsListCardSection1>
                          </div>
                        </S.ProductCard>
                      ))}
                    </div>
                  </S.NotProduct>
                )
              }
            </S.GoodsListSection3Wrapper>
          </S.GoodsListSection3>
          <S.GoodsListSection4>
            {totalPage
              ? totalPage > 1 && (
                  <>
                    <S.GoodsListSection4Btn
                      onClick={() => {
                        handlePrevPage(pageNumber);
                      }}
                      aria-label="이전페이지"
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
                          fill="var(--color-primary)"
                        />
                        <path
                          d="M23.2 13.6C23.2005 13.8492 23.1137 14.0908 22.9547 14.2827L18.176 20L22.784 25.728C22.8726 25.8371 22.9388 25.9627 22.9787 26.0974C23.0186 26.2322 23.0315 26.3735 23.0167 26.5133C23.0018 26.653 22.9594 26.7885 22.8921 26.9118C22.8247 27.0352 22.7336 27.144 22.624 27.232C22.5149 27.3206 22.3894 27.3868 22.2546 27.4267C22.1198 27.4666 21.9785 27.4795 21.8387 27.4647C21.699 27.4498 21.5635 27.4074 21.4402 27.3401C21.3168 27.2727 21.208 27.1816 21.12 27.072L15.968 20.672C15.8111 20.4811 15.7253 20.2417 15.7253 19.9947C15.7253 19.7476 15.8111 19.5082 15.968 19.3173L21.3013 12.9173C21.3909 12.8093 21.5009 12.72 21.625 12.6546C21.7491 12.5892 21.8849 12.5488 22.0246 12.536C22.1643 12.5231 22.3052 12.5379 22.4391 12.5795C22.5731 12.6212 22.6975 12.6889 22.8053 12.7787C22.9277 12.8779 23.0265 13.0031 23.0948 13.1451C23.163 13.2871 23.199 13.4424 23.2 13.6Z"
                          fill="var(--color-white)"
                        />
                      </svg>
                    </S.GoodsListSection4Btn>
                    <S.GoodsListPageNumber>
                      {[...Array(totalPage).keys()].map((_, index) => (
                        <S.GoodsListPageNumberButton
                          key={index}
                          style={{
                            fontWeight:
                              index + 1 === pageNumber ? 'bold' : 'normal',
                            backgroundColor:
                              index + 1 === pageNumber ? '#f7f7f7' : '#FFFFFF',
                            color:
                              index + 1 === pageNumber ? '#333333' : '#999999',
                          }}
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </S.GoodsListPageNumberButton>
                      ))}
                    </S.GoodsListPageNumber>
                    <S.GoodsListSection4Btn
                      onClick={() => {
                        handleNextPage(pageNumber);
                      }}
                      aria-label="다음페이지"
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
                          fill="var(--color-primary)"
                        />
                        <path
                          d="M16.8 26.4C16.7995 26.1508 16.8863 25.9092 17.0453 25.7173L21.824 20L17.216 14.272C17.1274 14.1629 17.0612 14.0373 17.0213 13.9026C16.9814 13.7678 16.9685 13.6265 16.9833 13.4867C16.9982 13.347 17.0406 13.2115 17.1079 13.0882C17.1753 12.9648 17.2664 12.856 17.376 12.768C17.4851 12.6794 17.6107 12.6132 17.7454 12.5733C17.8802 12.5334 18.0215 12.5205 18.1613 12.5353C18.301 12.5502 18.4365 12.5926 18.5598 12.6599C18.6832 12.7273 18.792 12.8184 18.88 12.928L24.032 19.328C24.1889 19.5189 24.2747 19.7583 24.2747 20.0053C24.2747 20.2524 24.1889 20.4918 24.032 20.6827L18.6987 27.0827C18.6091 27.1907 18.4991 27.28 18.375 27.3454C18.2509 27.4108 18.1151 27.4512 17.9754 27.464C17.8357 27.4769 17.6949 27.4621 17.5609 27.4205C17.4269 27.3788 17.3025 27.3111 17.1947 27.2213C17.0723 27.1221 16.9735 26.9969 16.9052 26.8549C16.837 26.7129 16.801 26.5576 16.8 26.4Z"
                          fill="var(--color-white)"
                        />
                      </svg>
                    </S.GoodsListSection4Btn>
                  </>
                )
              : null}
          </S.GoodsListSection4>
        </div>
      </S.GoodsListContainerSection>
    </S.GoodsListContainer>
  );
};

export default GoodsList;
