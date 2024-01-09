import React, { useEffect, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

const MainBottomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // 현재 슬라이드의 인덱스
  const [autoSlide, setAutoSlide] = useState<NodeJS.Timeout | null>(null); // 자동 슬라이드를 위한 타이머
  const [timeId, setTimeId] = useState<NodeJS.Timeout | null>(null);
  const slides = [
    'img/p6.jpg',
    'img/P1.jpg',
    'img/P2.jpg',
    'img/P3.jpg',
    'img/P4.jpg',
    'img/P5.jpg',
    'img/p6.jpg',
    'img/P1.jpg',
  ];
  // TODO: 상품 이미지를 서버에서 받아와서 뿌려주기
  useEffect(() => {
    if (autoSlide) {
      clearTimeout(autoSlide);
    } // 슬라이드가 전환되기 전에 타이머를 제거

    setAutoSlide(
      setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, 3000), // 3초 후에 슬라이드를 전환
    );
    console.log(currentSlide);
  }, [currentSlide]);

  useEffect(() => {
    if (currentSlide === 0) {
      // setTimeId(setTimeout(() => setCurrentSlide(slides.length - 1), 3000));
    } else if (currentSlide === slides.length - 1) {
      setTimeId(setTimeout(() => setCurrentSlide(0), 3000));
    }
  }, [currentSlide, slides.length]);

  const handlePrev = () => {
    if (timeId) {
      clearTimeout(timeId);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  const handleNext = () => {
    if (timeId) {
      clearTimeout(timeId);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };
  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(
      Math.floor((Number(event.target.value) * slides.length) / 100),
    );
  };

  return (
    <S.Div>
      {' '}
      <S.PrevButton onClick={handlePrev}>
        <FontAwesomeIcon
          icon={faChevronCircleLeft}
          style={{ fontSize: '5rem' }}
        />
      </S.PrevButton>
      <S.CarouselContainer>
        <S.Carousel style={{ transform: `translateX(-${currentSlide * 20}%)` }}>
          {slides.map((slide, index) => (
            <S.Slide key={index} className="slide">
              <img
                style={{ width: '100%' }}
                src={slide}
                alt={`Slide ${index}`}
              />
            </S.Slide>
          ))}
        </S.Carousel>

        <S.CarouselRange
          type="range"
          min="1"
          max="100"
          value={(currentSlide * 100) / slides.length}
          onChange={handleScroll}
        />
      </S.CarouselContainer>
      <S.NextButton onClick={handleNext}>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          style={{ fontSize: '5rem' }}
        />
      </S.NextButton>
    </S.Div>
  );
};

export default MainBottomCarousel;
