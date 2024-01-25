import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { DocumentData } from 'firebase/firestore';
import { SAMLAuthProvider } from 'firebase/auth';
import { set } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../../redux/modules/GoodsList/GoodsListSlice';

config.autoAddCss = false;

interface MainBottomCarouselProps {
  caroueslList?: DocumentData;
  isLoading?: boolean;
}

const MainBottomCarousel: React.FC<MainBottomCarouselProps> = ({
  caroueslList,
  isLoading,
}) => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드의 인덱스
  const autoSlide = useRef<NodeJS.Timeout | null>(null);
  const [timeId, setTimeId] = useState<NodeJS.Timeout | null>(null);
  const slides = caroueslList ? caroueslList?.slice(0, 10) : [];

  const SLIDE_NUM = slides.length;
  const beforeSlide1 = slides[SLIDE_NUM - 1];
  const slides2 = [
    'img/p6.jpg',
    'img/P1.jpg',
    'img/P2.jpg',
    'img/P3.jpg',
    'img/P4.jpg',
    'img/P5.jpg',
    'img/p6.jpg',
  ];
  const afterSlide1 = slides[0];
  const afterSlide2 = slides[1];
  const afterSlide3 = slides[2];
  const copiedSlides = [
    beforeSlide1,
    ...slides,
    afterSlide1,
    afterSlide2,
    afterSlide3,
  ];
  // TODO: 상품 이미지를 서버에서 받아와서 뿌려주기

  // 원래 배열의 첫 부분

  const slideRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (autoSlide.current) {
  //     clearTimeout(autoSlide.current);
  //   }
  //   autoSlide.current = setTimeout(() => {
  //     if (currentSlide >= slides.length - 1) {
  //       if (slideRef.current) {
  //         slideRef.current.style.transition = 'none';
  //         setCurrentSlide(0);
  //         setTimeout(() => {
  //           if (slideRef.current) {
  //             slideRef.current.style.transition = 'all 500ms ease-in-out';
  //           }
  //         }, 100);
  //       }
  //     } else {
  //       if (slideRef.current) {
  //         slideRef.current.style.transition = 'all 500ms ease-in-out';
  //       }
  //       setCurrentSlide((prev) => prev + 1);
  //     }
  //   }, 3000);

  //   return () => {
  //     if (autoSlide.current) {
  //       clearTimeout(autoSlide.current);
  //     }
  //   };
  // }, [currentSlide, slides.length]);
  const resetIndex = () => {
    setCurrentSlide((prev) => prev + 1);
  };
  useEffect(() => {
    console.log('슬라이드 인덱스', currentSlide);
  }, [currentSlide]);
  const handleNext = () => {
    if (currentSlide >= slides.length) {
      if (slideRef.current) {
        resetIndex();
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'none';
            setCurrentSlide(0);
          }
        }, 500);

        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'all 500ms ease-in-out';
          }
        }, 700);
      }
    } else {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 500ms ease-in-out';
      }
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        setCurrentSlide(slides.length - 1);
        setTimeout(() => {
          if (slideRef.current) {
            slideRef.current.style.transition = 'all 500ms ease-in-out';
          }
        }, 100);
      }
    } else {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 500ms ease-in-out';
      }
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(
      Math.floor((Number(event.target.value) * slides.length) / 100),
    );
  };
  if (!caroueslList || caroueslList.length === 0 || !slides) {
    return <div>로딩중</div>;
  }
  return (
    <S.Div>
      {' '}
      <S.PrevButton onClick={handlePrev}>
        <S.BtnImg src="/img/L.svg" alt="" />
      </S.PrevButton>
      <S.CarouselContainer>
        {caroueslList[0].teg === `Top10` ? (
          <>
            <S.Title>BEST 10</S.Title>
            <S.TitleText>판매율 높은 베스트 10!</S.TitleText>
          </>
        ) : (
          <>
            <S.Title>BestSeller</S.Title>
            <S.TitleText>이번주 새로운 상품을 만나보세요!</S.TitleText>
          </>
        )}

        <S.CarouselWrapper>
          <S.SlideContainer
            ref={slideRef}
            style={{
              transform: `translateX(-${currentSlide * 25}%)`,
              transition: 'all 500ms ease-in-out',
            }}
          >
            {copiedSlides?.map((list: any, index: number) => (
              <S.Slide key={index}>
                <Link
                  to={`/Detail/${list.productId}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                  onClick={() => {
                    dispatch(setSelectedProduct(list));
                  }}
                >
                  <S.Img
                    style={{ width: '100%' }}
                    src={list.img}
                    alt={`Slide ${index}`}
                  />
                  <S.SlideInTextDiv>
                    <S.Artist>{list.artist}</S.Artist>
                    {/* <h1>{list.artist}</h1> */}
                    <S.ProductTitle>품명 {list.title}</S.ProductTitle>
                    <S.ReleaseDate>발매일</S.ReleaseDate>
                    <S.Price>{list.price} 원</S.Price>
                  </S.SlideInTextDiv>
                </Link>
              </S.Slide>
            ))}
          </S.SlideContainer>
        </S.CarouselWrapper>
        <S.CarouselRange
          type="range"
          min="1"
          max="100"
          value={(currentSlide * 100) / slides.length}
          onChange={handleScroll}
        />
      </S.CarouselContainer>
      <S.NextButton onClick={handleNext}>
        <S.BtnImg src="/img/R.svg" alt="" />
      </S.NextButton>
    </S.Div>
  );
};

export default MainBottomCarousel;
