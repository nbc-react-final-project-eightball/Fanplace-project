import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from '../../styledComponent/styledMain/StMainTopCarousel';
import React, { useEffect, useRef, useState } from 'react';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const MainTopCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // 현재 슬라이드의 인덱스
  const [autoSlide, setAutoSlide] = useState<NodeJS.Timeout | null>(null); // 자동 슬라이드를 위한 타이머
  const [timeId, setTimeId] = useState<NodeJS.Timeout | null>(null);
  const slides = [
    'img/MainTopCarouseImg/TopC1.jpg',
    'img/MainTopCarouseImg/TopC2.jpg',
    'img/MainTopCarouseImg/TopC3.jpg',
    'img/MainTopCarouseImg/TopC4.jpg',
    'img/MainTopCarouseImg/TopC5.jpg',
    'img/MainTopCarouseImg/TopC6.jpg',
    'img/MainTopCarouseImg/TopC7.jpg',
  ];
  // TODO: 상품 이미지를 서버에서 받아와서 뿌려주기
  const SLIDE_NUM = slides.length;
  const beforeSlide = slides[SLIDE_NUM - 1];
  // 원래 배열의 첫 부분
  const afterSlide = slides[0];
  // 앞뒤에 안붙여주면 슬라이드가 끊겨보임
  const copiedSlides = [beforeSlide, ...slides, , beforeSlide, afterSlide];
  const slideRef = useRef<HTMLDivElement>(null);

  const moveSlide = (index: number) => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'none';
      if (index === 0) {
      }
      setCurrentSlide(index);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 500ms ease-in-out';
          slideRef.current.style.transform = `translateX(-${index * 102}%)`;
        }
      }, 1000);
    }
  };
  useEffect(() => {
    if (currentSlide === 0) {
      clearTimeout(currentSlide);
      moveSlide(1);
    } else if (currentSlide === SLIDE_NUM - 2) {
      setTimeId(setTimeout(() => setCurrentSlide(1), 3000));
    }
  }, [currentSlide, SLIDE_NUM]);
  useEffect(() => {
    if (autoSlide) {
      clearTimeout(autoSlide);
    } // 슬라이드가 전환되기 전에 타이머를 제거
    setAutoSlide(
      setTimeout(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
      }, 3000), // 3초 후에 슬라이드를 전환
    );
    console.log('카운트 인덱스', currentSlide);
  }, [currentSlide]);
  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(
      Math.floor((Number(event.target.value) * slides.length) / 100),
    );
  };
  const handlePrev = () => {
    if (timeId) {
      clearTimeout(timeId);
    }
    setCurrentSlide((prev) => (prev === 1 ? slides.length - 2 : prev - 1));
  };

  const handleNext = () => {
    if (timeId) {
      clearTimeout(timeId);
    }
    setCurrentSlide((prev) => (prev === slides.length - 2 ? 0 : prev + 1));
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
      <S.MainTopCarouselContainer>
        <S.MainTopCarousel
          ref={slideRef}
          style={{
            transform: `translateX(-${currentSlide * 101}%)`,
            transition: 'all 500ms ease-in-out',
          }}
        >
          {copiedSlides?.map((slide, index) => (
            <S.MainTopCarouselItem key={index}>
              <img
                style={{ width: '100%' }}
                src={slide}
                alt={`Slide ${index}`}
              />
              {/* TODO:파이어베이스에 데이터 생기면 맵돌리기 */}
              <S.MainTopCarouselItemText>
                <h1>영어</h1>
              </S.MainTopCarouselItemText>
            </S.MainTopCarouselItem>
          ))}
        </S.MainTopCarousel>
        <S.CarouselRange
          type="range"
          min="1"
          max="100"
          value={(currentSlide * 100) / slides.length}
          onChange={handleScroll}
        />
      </S.MainTopCarouselContainer>
      <S.NextButton onClick={handleNext}>
        <FontAwesomeIcon
          icon={faChevronCircleRight}
          style={{ fontSize: '5rem' }}
        />
      </S.NextButton>
    </S.Div>
  );
};

export default MainTopCarousel;
