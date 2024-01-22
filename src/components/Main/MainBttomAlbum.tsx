import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
const MainBttomAlbum = () => {
  const [currentSlide, setCurrentSlide] = useState(2); // 현재 슬라이드의 인덱스
  // const [autoSlide, setAutoSlide] = useState<NodeJS.Timeout | null>(null); // 자동 슬라이드를 위한 타이머
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
    'img/Album2.jpg',
    'img/Album3.jpg',
    'img/Album4.jpg',
  ];
  // TODO: 앨범상품 이미지를 서버에서 받아와서 뿌려주기
  const copiedSlides = [...slides];
  const autoSlide = useRef<NodeJS.Timeout | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoSlide.current) {
      clearTimeout(autoSlide.current);
    }
    autoSlide.current = setTimeout(() => {
      // 마지막 슬라이드일 때
      if (currentSlide >= slides.length - 1) {
        // 바로 첫 번째 슬라이드로 이동
        if (slideRef.current) {
          // 이동 애니메이션 제거
          slideRef.current.style.transition = 'all 500ms ease-in-out';
          slideRef.current.style.transition = 'none';
          // 바로 첫 번째 슬라이드로 이동
          setCurrentSlide(slides.length);
          // 다음 자동 스크롤을 위해 다시 애니메이션 적용
          const nextSlide = () => {
            setCurrentSlide(1);
          };
          nextSlide();
          setTimeout(() => {
            if (slideRef.current) {
              slideRef.current.style.transition = 'all 500ms ease-in-out';
            }
          }, 100);
        }
      } else {
        // 다음 슬라이드로 이동
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 500ms ease-in-out';
        }
        setCurrentSlide((prev) => prev + 1.5);
      }
    }, 3000);
    if (currentSlide === 1) {
      // 다음 슬라이드로 이동
      setTimeout(() => {
        if (slideRef.current) {
          if (autoSlide.current) {
            clearTimeout(autoSlide.current);

            slideRef.current.style.transition = 'all 500ms ease-in-out';
          }
        }
        setCurrentSlide((prev) => prev + 1);
      }, 1);
    }

    return () => {
      if (autoSlide.current) {
        clearTimeout(autoSlide.current);
      }
    };
  }, [currentSlide, slides.length]);
  // useEffect(() => {
  //   if (autoSlide) {
  //     clearTimeout(autoSlide);
  //   } // 슬라이드가 전환되기 전에 타이머를 제거
  //   setAutoSlide(
  //     setTimeout(() => {
  //       setCurrentSlide((currentSlide + 1) % slides.length);
  //       if (currentSlide === null) {
  //         clearTimeout(currentSlide);
  //         moveSlide(0);
  //       }
  //     }, 3000), // 3초 후에 슬라이드를 전환
  //   );
  // }, [currentSlide]);

  const handleNext = () => {
    if (currentSlide >= slides.length - 1) {
      // 마지막 슬라이드에서 다음 버튼을 누르면 첫 번째 슬라이드로 돌아갑니다.
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        setCurrentSlide(0);
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
      setCurrentSlide((prev) => prev + 1);
    }
    // setCurrentSlide((prev) => (prev === slides.length + 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
      // 첫 번째 슬라이드에서 이전 버튼을 누르면 마지막 슬라이드로 돌아갑니다.
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
    // setCurrentSlide((prev) => (prev === 1 ? slides.length - 1 : prev - 1));
  };

  const handleScroll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSlide(
      Math.floor((Number(event.target.value) * slides.length + 3) / 100),
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
            }}
          >
            {copiedSlides.map((slide, index) => (
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
