import React from 'react';
import * as S from '../styledComponent/styledMain/StMain';
import MainBottomCarousel from '../components/Main/MainBottomCarousel';
import MainBttomAlbum from '../components/Main/MainBttomAlbum';
import MainTopCarousel from 'components/Main/MainTopCarousel';

const Mainpage = () => {
  return (
    <>
      <div
        style={{
          width: '90%',
          height: '170vh',
          margin: 'auto',
          marginTop: '5vh',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <MainTopCarousel />
        <MainBottomCarousel />
        <MainBottomCarousel />
        <MainBttomAlbum />
        {/* TODO: 나중에 백그라운드 이미지 변경 해야함 */}
        <div
          style={{
            backgroundImage: `url('img/bg1.jpg')`,
            backgroundSize: '320',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'right 25% center',
            height: '20vh',
            width: '100%',
          }}
        />
      </div>
    </>
  );
};

export default Mainpage;
