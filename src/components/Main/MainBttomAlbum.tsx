import React, { useEffect, useRef, useState } from 'react';
import * as S from '../../styledComponent/styledMain/StMainCarousel';
import { DocumentData } from 'firebase/firestore';
interface MainBttomAlbumProps {
  newAlbum?: DocumentData;
}
const MainBttomAlbum: React.FC<MainBttomAlbumProps> = ({ newAlbum }) => {
  const [currentSlide, setCurrentSlide] = useState(1); // 현재 슬라이드의 인덱스

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

  const newCopiedSlides = newAlbum
    ? [
        slides[5],
        ...slides,
        slides[1],
        slides[2],
        slides[3],
        slides[4],
        slides[5],
        slides[6],
      ]
    : slides1;

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
  const handleNext = () => {
    if (currentSlide >= slides.length) {
      // 마지막 슬라이드에서 다음 버튼을 누르면 첫 번째 슬라이드로 돌아갑니다.
      if (slideRef.current) {
        slideRef.current.style.transition = 'none';
        setCurrentSlide(1);
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

  if (!newAlbum || newAlbum.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <S.AlbumDiv>
        <S.AlbumPrevButton onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M25 0C38.8071 1.81058e-06 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 -1.81058e-06 38.8071 0 25C1.81058e-06 11.1929 11.1929 -1.81058e-06 25 0Z"
              fill="var(--color-primary)"
            />
            <path
              d="M29 17C29.0006 17.3115 28.8921 17.6135 28.6933 17.8533L22.72 25L28.48 32.16C28.5908 32.2964 28.6735 32.4533 28.7234 32.6218C28.7733 32.7902 28.7894 32.9669 28.7708 33.1416C28.7522 33.3163 28.6993 33.4856 28.6151 33.6398C28.5308 33.794 28.417 33.93 28.28 34.04C28.1436 34.1508 27.9867 34.2335 27.8182 34.2834C27.6498 34.3333 27.4731 34.3494 27.2984 34.3308C27.1237 34.3122 26.9544 34.2593 26.8002 34.1751C26.646 34.0908 26.51 33.977 26.4 33.84L19.96 25.84C19.7639 25.6014 19.6567 25.3022 19.6567 24.9933C19.6567 24.6845 19.7639 24.3852 19.96 24.1467L26.6267 16.1467C26.7386 16.0117 26.8761 15.9001 27.0312 15.8183C27.1863 15.7364 27.3561 15.6861 27.5307 15.67C27.7053 15.6539 27.8814 15.6724 28.0489 15.7244C28.2164 15.7765 28.3719 15.8611 28.5067 15.9733C28.6596 16.0974 28.7832 16.2538 28.8685 16.4313C28.9538 16.6089 28.9987 16.8031 29 17Z"
              fill="var(--color-white)"
            />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <path
              d="M25 50C11.1929 50 -6.03528e-07 38.8071 0 25C6.03528e-07 11.1929 11.1929 -6.03528e-07 25 0C38.8071 6.03528e-07 50 11.1929 50 25C50 38.8071 38.8071 50 25 50Z"
              fill="var(--color-primary)"
            />
            <path
              d="M21 33C20.9994 32.6885 21.1079 32.3866 21.3067 32.1467L27.28 25L21.52 17.84C21.4092 17.7036 21.3265 17.5467 21.2766 17.3782C21.2267 17.2098 21.2106 17.0331 21.2292 16.8584C21.2478 16.6837 21.3007 16.5144 21.3849 16.3602C21.4692 16.206 21.583 16.07 21.72 15.96C21.8564 15.8492 22.0133 15.7665 22.1818 15.7166C22.3502 15.6667 22.5269 15.6506 22.7016 15.6692C22.8763 15.6878 23.0456 15.7407 23.1998 15.8249C23.354 15.9092 23.49 16.023 23.6 16.16L30.04 24.16C30.2361 24.3986 30.3433 24.6978 30.3433 25.0067C30.3433 25.3155 30.2361 25.6148 30.04 25.8533L23.3733 33.8533C23.2614 33.9883 23.1239 34.0999 22.9688 34.1818C22.8137 34.2636 22.6439 34.3139 22.4693 34.3301C22.2947 34.3462 22.1186 34.3276 21.9511 34.2756C21.7836 34.2235 21.6281 34.1389 21.4933 34.0267C21.3404 33.9026 21.2168 33.7462 21.1315 33.5687C21.0462 33.3911 21.0013 33.1969 21 33Z"
              fill="var(--color-white)"
            />
          </svg>
        </S.AlbumNextButton>
      </S.AlbumDiv>
    </>
  );
};

export default MainBttomAlbum;
