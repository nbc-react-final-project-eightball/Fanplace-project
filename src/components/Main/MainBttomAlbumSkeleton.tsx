import React from 'react';
import * as S from '../../styledComponent/styledMain/MainBttomSkeleton';
const MainBttomAlbumSkeleton = () => {
  return (
    <S.Div>
      <S.CarouselContainer>
        <S.Title></S.Title>
        <S.TitleText></S.TitleText>
        <S.CarouselWrapper>
          <S.ButtonPrev>
            <S.BtnImg src="/img/L.svg" alt="" />
          </S.ButtonPrev>
          <S.SlideContainer>
            <S.Slide>
              <S.Img />
              <S.SlideInTextDiv>
                <S.Artist></S.Artist>
                <S.ProductTitle></S.ProductTitle>
                <S.ReleaseDate></S.ReleaseDate>
                <S.Price></S.Price>
              </S.SlideInTextDiv>
            </S.Slide>
            <S.Slide>
              <S.Img />
              <S.SlideInTextDiv>
                <S.Artist></S.Artist>
                <S.ProductTitle></S.ProductTitle>
                <S.ReleaseDate></S.ReleaseDate>
                <S.Price></S.Price>
              </S.SlideInTextDiv>
            </S.Slide>
            <S.Slide>
              <S.Img />
              <S.SlideInTextDiv>
                <S.Artist></S.Artist>
                <S.ProductTitle></S.ProductTitle>
                <S.ReleaseDate></S.ReleaseDate>
                <S.Price></S.Price>
              </S.SlideInTextDiv>
            </S.Slide>
            <S.Slide>
              <S.Img />
              <S.SlideInTextDiv>
                <S.Artist></S.Artist>
                <S.ProductTitle></S.ProductTitle>
                <S.ReleaseDate></S.ReleaseDate>
                <S.Price></S.Price>
              </S.SlideInTextDiv>
            </S.Slide>
          </S.SlideContainer>
          <S.ButtonNext>
            <S.BtnImg src="/img/R.svg" alt="" />
          </S.ButtonNext>
        </S.CarouselWrapper>
        <S.CarouselRange type="range" min="1" max="100" value={0} />
      </S.CarouselContainer>
    </S.Div>
  );
};

export default MainBttomAlbumSkeleton;
