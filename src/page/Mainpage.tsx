import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledMain/StMain';
import MainBottomCarousel from '../components/Main/MainBottomCarousel';
import MainBttomAlbum from '../components/Main/MainBttomAlbum';
import MainTopCarousel from 'components/Main/MainTopCarousel';
import {
  DocumentData,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import MainBttomSkeleton from 'components/Main/MainBttomSkeleton';
import MainBttomAlbumSkeleton from 'components/Main/MainBttomAlbumSkeleton';
import { set } from 'react-hook-form';

const Mainpage = () => {
  const [goodsList, setGoodsList] = useState<DocumentData>([]);
  const [newAlbum, setNewAlbum] = useState<DocumentData>([]);
  const [top10, setTop10] = useState<DocumentData>([]);
  const [BestSeller, setBestSeller] = useState<DocumentData>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');

      // 탑10
      const cachedTop10 = localStorage.getItem('top10');
      const expiry = localStorage.getItem('expiry');
      if (cachedTop10 && expiry && new Date().getTime() < Number(expiry)) {
        setTop10(JSON.parse(cachedTop10));
      } else {
        const top10Query = query(
          goodsCollection,
          where('teg', '==', 'Top10'),
          orderBy('productId', 'desc'),
          limit(10),
        );
        const top10Snapshot = await getDocs(top10Query);
        const top10List = top10Snapshot.docs.map((doc) => doc.data());
        setTop10(top10List);
        localStorage.setItem('top10', JSON.stringify(top10List));
        localStorage.setItem(
          'expiry',
          (new Date().getTime() + 60 * 60 * 1000).toString(),
        );
      }
      // 베스트셀러
      const cachedBestSeller = localStorage.getItem('bestSeller');
      if (cachedBestSeller && expiry && new Date().getTime() < Number(expiry)) {
        setBestSeller(JSON.parse(cachedBestSeller));
      } else {
        const bestSellerQuery = query(
          goodsCollection,
          where('teg', '==', 'BestSeller'),
          orderBy('productId', 'desc'),
          limit(10),
        );
        const bestSellerSnapshot = await getDocs(bestSellerQuery);
        const bestSellerList = bestSellerSnapshot.docs.map((doc) => doc.data());
        setBestSeller(bestSellerList);
        localStorage.setItem('bestSeller', JSON.stringify(bestSellerList));
      }
      // 앨범
      const cachedAlbumQuery = localStorage.getItem('albumQuery');
      if (cachedAlbumQuery && expiry && new Date().getTime() < Number(expiry)) {
        setNewAlbum(JSON.parse(cachedAlbumQuery));
      } else {
        const newAlbumQuery = query(
          goodsCollection,
          where('teg', '==', 'NewAlbum'),
          orderBy('productId', 'desc'),
          limit(10),
        );
        const newAlbumSnapshot = await getDocs(newAlbumQuery);
        const newAlbumList = newAlbumSnapshot.docs.map((doc) => doc.data());
        setNewAlbum(newAlbumList);
        localStorage.setItem('albumQuery', JSON.stringify(newAlbumList));
      }
      setIsLoading(true);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };
  // fetchGoods();
  useEffect(() => {
    fetchGoods();
  }, []);

  useEffect(() => {
    console.log('캐러', goodsList);
  }, [goodsList]);
  return (
    <>
      <div
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <MainTopCarousel />
        {!isLoading ? (
          <>
            <MainBttomSkeleton />
            <MainBttomSkeleton />
            <MainBttomAlbumSkeleton />
          </>
        ) : (
          <>
            <MainBottomCarousel caroueslList={top10} />
            <MainBottomCarousel caroueslList={BestSeller} />
            <MainBttomAlbum newAlbum={newAlbum} />
          </>
        )}
        {/* TODO: 나중에 백그라운드 이미지 변경 해야함 */}
      </div>
    </>
  );
};

export default Mainpage;
