import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { DocumentData } from 'firebase/firestore';
interface MainBttomAlbumProps {
  newAlbum?: DocumentData;
}
const MainBttomAlbum: React.FC<MainBttomAlbumProps> = ({ newAlbum }) => {
  const [currentSlide, setCurrentSlide] = useState(2); // 현재 슬라이드의 인덱스
  // const [autoSlide, setAutoSlide] = useState<NodeJS.Timeout | null>(null); // 자동 슬라이드를 위한 타이머

  const slides1 = [
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
  const slides = newAlbum?.slice(0, 7);
  // TODO: 앨범상품 이미지를 서버에서 받아와서 뿌려주기
  // console.log('NewAlbum111', NewAlbum[0]);
  const newCopiedSlides = newAlbum
    ? [
        slides[4],
        ...slides,
        slides[1],
        slides[2],
        slides[3],
        slides[4],
        slides[5],
      ]
    : slides1;
  console.log('newCopiedSlides', newCopiedSlides);
  const copiedSlides = newAlbum ? [...slides] : [];
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
            setCurrentSlide(0);
          };
          nextSlide();
          setTimeout(() => {
            if (slideRef.current) {
              slideRef.current.style.transition = 'all 500ms ease-in-out';
            }
          }, 1000);
        }
      } else {
        // 다음 슬라이드로 이동
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 500ms ease-in-out';
        }
        setCurrentSlide((prev) => prev + 1);
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
        }, 1000);
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

  console.log('newCopiedSlides11', newCopiedSlides);
  if (!newAlbum || newAlbum.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <>
      {/* <h1>새로운 앨범!</h1> */}
      <S.AlbumDiv>
        <S.AlbumPrevButton onClick={handlePrev}>
          <S.BtnImg src="/img/L.svg" alt="" />
        </S.AlbumPrevButton>
        <S.AlbumContainer>
          <S.AlbumDivTitle>NEW ALBUM</S.AlbumDivTitle>
          <S.AlbumDivTitleText>아티스트 이 달의 앨범</S.AlbumDivTitleText>W
          <S.AlbumWrapper>
            <S.AlbumCarousel
              ref={slideRef}
              style={{
                transform: `translateX(-${currentSlide * 300}px)`,
              }}
            >
              {newAlbum &&
                newCopiedSlides.map((Album, index) => (
                  <S.AlbumSlide key={index}>
                    <S.AlbumImg src={Album.img} alt="img" />
                    <S.AlbumTitle>
                      {' '}
                      {Album.artist} {Album.title}
                    </S.AlbumTitle>
                  </S.AlbumSlide>
                ))}
            </S.AlbumCarousel>
          </S.AlbumWrapper>
        </S.AlbumContainer>
        <S.AlbumNextButton onClick={handleNext}>
          <S.BtnImg src="/img/R.svg" alt="" />
        </S.AlbumNextButton>
      </S.AlbumDiv>
    </>
  );
};

export default MainBttomAlbum;
