import styled from 'styled-components';

export {};

//하단 캐러셀 스타일 start
export const Div = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SlideInTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const Img = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 8px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;
export const Artist = styled.p`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 171.429% */
`;

export const ProductTitle = styled.h1`
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 43px;
  color: var(--color-primary-medium-33);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  color: var(--color-primary-medium-55);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
`;
//가격
export const Price = styled.p`
  color: var(--color-primary-medium-33);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 133.333% */

  > div {
    display: flex;
    gap: 10px;
    align-items: baseline;
    span {
      color: #ff6565;
      font-size: 18px;
      font-weight: 600;
    }
    h3 {
      color: var(--color-primary-medium-33);
      font-size: 18px;
      font-weight: 600;
    }
    p {
      color: rgba(190, 190, 190, 0.93);
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
    }
  }
`;
export const Slide = styled.div`
  /* flex: 0 0 auto; */
  position: relative;
  width: 25%;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 23%;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;

  @media (max-width: 768px) {
    flex-grow: 0;
    width: 90%;
  }

  @media (max-width: 480px) {
    flex-grow: 0;
    width: 100%;
  }
`;
export const CarouselWrapper = styled.div`
  position: relative;
  margin-left: -560px;
  @media (max-width: 768px) {
    margin-left: -250px;
  }

  @media (max-width: 480px) {
    margin-left: -590px;
  }

  @media (max-width: 414px) {
    margin-left: -600px;
  }
  @media (max-width: 364px) {
    margin-left: -650px;
  }
`;
export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: #b4b4b4;
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    border: 1px solid var(--color-primary);
    width: 100px;

    background: var(--color-primary);
    cursor: pointer;
    box-shadow:
      1px 1px 1px var(--color-primary),
      0px 0px 1px #0d0d0d;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }
`;
export const PrevButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: -20px;
  z-index: 1;
  svg {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    @media (max-width: 768px) {
      /* 768px 이하 화면 크기에 대한 스타일 */
      width: 45px;
      height: 45px;
    }
    @media (max-width: 480px) {
      /* 480px 이하 화면 크기에 대한 스타일 */
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 45px;
    height: 45px;
    left: 2%;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 35px;
    height: 35px;
    top: 50%;
    left: 2%;
  }
`;
export const BtnImg = styled.img`
  display: block;
  margin: auto;
  width: 32px;
  height: 32px;
`;
export const NextButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 300px;
  right: -20px;
  z-index: 1;
  svg {
    width: 50px;
    height: 50px;
    @media (max-width: 768px) {
      width: 45px;
      height: 45px;
    }
    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    right: 2%;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    top: 50%;
    right: 2%;
  }
`;

export const Title = styled.h2`
  color: var(--color-primary-medium-33);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  text-align: left;
`;
export const TitleText = styled.p`
  color: var(--color-primary-medium-55);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  text-align: left;
`;
export const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 40px;
  width: 100%;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 90px;
  }
  @media (max-width: 480px) {
    gap: 110px;
  }
  @media (max-width: 364px) {
    gap: 130px;
  }
`;
//하단 캐러셀 스타일 end

//앨범 캐러셀 스타일 start
export const AlbumDiv = styled.div`
  margin-top: 116px;
  margin-bottom: 100px;
  width: 1200px;
  height: 646px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  position: relative;
  background: #000;
  border: 1px solid var(--color-primary);
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;
`;
export const AlbumWrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: -660px;
  @media (max-width: 768px) {
    margin-left: -230px;
  }

  @media (max-width: 480px) {
    margin-left: -100px;
  }
  @media (max-width: 386px) {
    margin-left: -130px;
  }
  @media (max-width: 414px) {
    margin-left: -140px;
  }
  @media (max-width: 364px) {
    margin-left: -160px;
  }
`;

export const AlbumCarousel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 40px;
  gap: 20px;
`;

export const AlbumSlide = styled.div`
  width: 280px;
  flex: 0 1 auto;
  position: relative;
  transform: translateX(-25%);
`;
export const AlbumImg = styled.img`
  height: 280px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  border-radius: 135px;
  position: relative;
  @media (max-width: 768px) {
    height: 180px;
  }
`;
export const AlbumTitle = styled.h2`
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 43px;
  position: absolute;
  left: -0px;
  margin-top: 10px;
  @media (max-width: 768px) {
    left: -30px;
  }
`;

export const AlbumSlideTitle = styled.h2`
  color: var(--color-primary-medium-33);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  margin-bottom: 10px;
`;
export const AlbumSlideTitleText = styled.p`
  color: var(--color-primary-medium-55);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
`;
export const AlbumPrevButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: 430px;
  z-index: 1;
  @media (max-width: 768px) {
    left: 220px;
  }

  @media (max-width: 480px) {
    left: 10%;
  }
`;

export const AlbumNextButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 300px;
  right: 410px;
  z-index: 1;
  @media (max-width: 768px) {
    right: 210px;
  }

  @media (max-width: 480px) {
    right: 10%;
  }
`;
export const AlbumDivTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  text-align: center;
`;
export const AlbumDivTitleText = styled.p`
  color: #aaa;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  text-align: center;
`;
