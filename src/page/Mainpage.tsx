import React from 'react';
import * as S from '../styledComponent/styledMain/StMain';
import MainBottomCarousel from '../component/Main/MainBottomCarousel';

const Mainpage = () => {
  return (
    <>
      <div style={{ width: '70%', justifyContent: 'center', margin: 'auto' }}>
        <MainBottomCarousel />
        <MainBottomCarousel />
      </div>
    </>
  );
};

export default Mainpage;
