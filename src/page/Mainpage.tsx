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
  const [NewArrival, setNewArrival] = useState<DocumentData>([]);
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
          where('tag', '==', 'Top10'),
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
      // NewArrival
      const cachedNewArrival = localStorage.getItem('NewArrival');
      if (cachedNewArrival && expiry && new Date().getTime() < Number(expiry)) {
        setNewArrival(JSON.parse(cachedNewArrival));
      } else {
        const NewArrivalQuery = query(
          goodsCollection,
          where('tag', '==', 'NewArrival'),
          orderBy('productId', 'desc'),
          limit(10),
        );
        const NewArrivalSnapshot = await getDocs(NewArrivalQuery);
        const NewArrivalList = NewArrivalSnapshot.docs.map((doc) => doc.data());
        setNewArrival(NewArrivalList);
        localStorage.setItem('NewArrival', JSON.stringify(NewArrivalList));
      }
      // 앨범
      const cachedAlbumQuery = localStorage.getItem('albumQuery');
      if (cachedAlbumQuery && expiry && new Date().getTime() < Number(expiry)) {
        setNewAlbum(JSON.parse(cachedAlbumQuery));
      } else {
        const newAlbumQuery = query(
          goodsCollection,
          where('tag', '==', 'NewAlbum'),
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
      <S.Div>
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
            <MainBottomCarousel caroueslList={NewArrival} />
            <MainBttomAlbum newAlbum={newAlbum} />
          </>
        )}
        {/* TODO: 나중에 백그라운드 이미지 변경 해야함 */}
      </S.Div>
    </>
  );
};

export default Mainpage;
