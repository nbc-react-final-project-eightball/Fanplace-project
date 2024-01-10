import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
const MainBttomAlbum = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // 현재 슬라이드의 인덱스
  const [autoSlide, setAutoSlide] = useState<NodeJS.Timeout | null>(null); // 자동 슬라이드를 위한 타이머
  const [timeId, setTimeId] = useState<NodeJS.Timeout | null>(null);
  const slides = [
    'img/Album8.jpg',
    'img/Album1.jpg',
    'img/Album2.jpg',
    'img/Album3.jpg',
    'img/Album4.jpg',
    'img/Album5.jpg',
    'img/Album6.png',
    'img/Album7.jpg',
    'img/Album8.jpg',
    'img/Album1.jpg',
  ];
  // TODO: 앨범상품 이미지를 서버에서 받아와서 뿌려주기
  const SLIDE_NUM = slides.length;
  const beforeSlide = slides[SLIDE_NUM - 1];
  // 원래 배열의 첫 부분
  const afterSlide = slides[0];
  const copiedSlides = [beforeSlide, ...slides, , beforeSlide, afterSlide];
  const slideRef = useRef<HTMLDivElement>(null);
  const moveSlide = (index: number) => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = 'none';
      setCurrentSlide(index);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 500ms ease-in-out';
          slideRef.current.style.transform = `translateX(-${index * 25}%)`;
        }
      }, 1);
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
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(
      Math.floor((Number(event.target.value) * slides.length) / 100),
    );
  };

  return (
    <>
      <h1>새로운 앨범!</h1>
      <S.AlbumDiv>
        <S.PrevButton onClick={handlePrev}>
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            style={{ fontSize: '5rem' }}
          />
        </S.PrevButton>
        <S.AlbumContainer>
          <S.AlbumCarousel
            ref={slideRef}
            style={{
              transform: `translateX(-${currentSlide * 25}%)`,
              transition: 'all 500ms ease-in-out',
            }}
          >
            {slides.map((slide, index) => (
              <S.AlbumSlide key={index}>
                <img src={slide} alt="img" style={{ width: '100%' }} />
                <S.AlbumTitle> 앨범타이틀 : 어쩌구블라 </S.AlbumTitle>
              </S.AlbumSlide>
            ))}
          </S.AlbumCarousel>
          <S.CarouselRange
            type="range"
            min="1"
            max="100"
            value={(currentSlide * 100) / slides.length}
            onChange={handleScroll}
          />
        </S.AlbumContainer>
        <S.PrevButton onClick={handleNext}>
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            style={{ fontSize: '5rem' }}
          />
        </S.PrevButton>
      </S.AlbumDiv>
    </>
  );
};

export default MainBttomAlbum;
