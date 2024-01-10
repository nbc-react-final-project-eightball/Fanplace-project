import React from 'react';
import * as S from '../styledComponent/styledMain/StMain';
import MainBottomCarousel from '../components/Main/MainBottomCarousel';
import MainBttomAlbum from '../components/Main/MainBttomAlbum';

const Mainpage = () => {
  return (
    <>
      <div
        style={{
          width: '90%',
          height: '100vh',
          margin: 'auto',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <MainBottomCarousel />
        <MainBottomCarousel />
        <MainBttomAlbum />
      </div>
    </>
  );
};

export default Mainpage;
