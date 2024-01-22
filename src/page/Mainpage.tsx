import React, { useEffect, useState } from 'react';
import * as S from '../styledComponent/styledMain/StMain';
import MainBottomCarousel from '../components/Main/MainBottomCarousel';
import MainBttomAlbum from '../components/Main/MainBttomAlbum';
import MainTopCarousel from 'components/Main/MainTopCarousel';
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { db } from '../firebase/config';

const Mainpage = () => {
  const [goodsList, setGoodsList] = useState<DocumentData>([]);
  const fetchGoods = async () => {
    try {
      const goodsCollection = collection(db, 'goodsList');
      const goodsQuery = query(goodsCollection, orderBy('category'));

      const goodsSnapshot = await getDocs(goodsQuery);
      const getGoodsList = goodsSnapshot.docs.map((doc) => doc.data());
      setGoodsList(getGoodsList);
    } catch (error) {
      console.log('상품 가져오기 실패!', error);
    }
  };
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
          overflow: 'hidden',
        }}
      >
        <MainTopCarousel />
        <MainBottomCarousel caroueslList={goodsList.slice(0, 7)} />
        <MainBottomCarousel caroueslList={goodsList.slice(19, 25)} />
        <MainBttomAlbum />
        {/* TODO: 나중에 백그라운드 이미지 변경 해야함 */}
        <div
        // style={{
        //   backgroundImage: `url('img/bg1.jpg')`,
        //   backgroundSize: '320',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundAttachment: 'fixed',
        //   backgroundPosition: 'right 25% center',
        //   height: '20vh',
        //   width: '100%',
        // }}
        />
      </div>
    </>
  );
};

export default Mainpage;
