import styled from 'styled-components';
//하단 캐러셀 스타일 start
export const Div = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;

  position: relative;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
  }
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
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);
`;
export const Artist = styled.p`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
`;

export const ProductTitle = styled.h1`
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 43px;
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  margin-bottom: 10px;
`;

export const ReleaseDate = styled.p`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
`;
//가격
export const Price = styled.p`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
`;
export const Slide = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 25%;

  margin-top: 40px;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;

  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    flex-grow: 0;
    width: 90%;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    flex-grow: 0;
    width: 70%;
  }
`;
export const CarouselWrapper = styled.div`
  position: relative;
`;
export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: #b4b4b4;
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    border: 1px solid #000000;
    width: 100px;

    background: #000000;
    cursor: pointer;
    box-shadow:
      1px 1px 1px #000000,
      0px 0px 1px #0d0d0d;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
  }
`;
export const PrevButton = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: -20px;
  z-index: 1;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    left: 2%;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    left: 12%;
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
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  right: -20px;
  z-index: 1;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    right: 2%;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
  }
`;

export const Title = styled.h2`
  color: #333;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  text-align: left;
`;
export const TitleText = styled.p`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
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
`;
//하단 캐러셀 스타일 end

//앨범 캐러셀 스타일 start
export const AlbumDiv = styled.div`
  margin-top: 116px;
  margin-bottom: 100px;
  width: 1200px;
  height: 646px;
  border-radius: 16px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  position: relative;
  background: #000;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 768px;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 480px;
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
    /* 768px 이하 화면 크기에 대한 스타일 */
    margin-left: -280px;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 25px;
    height: 25px;
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
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);
  border-radius: 135px;
`;
export const AlbumTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
`;

export const AlbumSlideTitle = styled.h2`
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  margin-bottom: 10px;
`;
export const AlbumSlideTitleText = styled.p`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;
export const AlbumPrevButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: 430px;
  z-index: 1;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    left: 220px;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 25px;
    height: 25px;
  }
`;

export const AlbumNextButton = styled.button`
  width: 50px;
  height: 50px;

  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  right: 410px;
  z-index: 1;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    right: 210px;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 25px;
    height: 25px;
  }
`;
export const AlbumDivTitle = styled.h2`
  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
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
  line-height: 24px; /* 150% */
  text-align: center;
`;
