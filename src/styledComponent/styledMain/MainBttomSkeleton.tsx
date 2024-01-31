import styled from 'styled-components';

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

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  flex-grow: 20;
  margin-bottom: 40px;
`;
export const CarouselWrapper = styled.div`
  position: relative;
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 25%;

  margin-top: 40px;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    flex-grow: 1;
    width: 25%;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    flex-grow: 0;
    width: 25%;
  }
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
    /* 768px 이하 화면 크기에 대한 스타일 */
    flex-grow: 0;
    width: 90%;
    gap: 20px;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    flex-grow: 0;
    width: 70%;
    gap: 60px;
  }
`;

export const CarouselWrapper1 = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: #333;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  margin-bottom: 10px;
  height: 40px;
  background: lightgray 50% / cover no-repeat;
  width: 100px;
`;
export const TitleText = styled.p`
  color: #555;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  height: 24px;
  background: lightgray 50% / cover no-repeat;
  width: 50px;
`;
export const Img = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 8px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 168px;
    height: 168px;
  }
  @media (max-width: 480px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 120px;
    height: 120px;
  }
`;

export const SlideInTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const Artist = styled.p`
  width: 50px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 171.429% */
  background: lightgray 50% / cover no-repeat;
  height: 24px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  margin-bottom: 10px;
  width: 250px;
  height: 24px;
  background: lightgray 50% / cover no-repeat;
`;

export const ReleaseDate = styled.p`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
  width: 100px;
  height: 14px;
  background: lightgray 50% / cover no-repeat;
`;
//가격
export const Price = styled.p`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 133.333% */
  width: 100px;
  height: 24px;
  background: lightgray 50% / cover no-repeat;
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
      color: #333;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      color: rgba(190, 190, 190, 0.93);
      font-size: 14px;
      font-weight: 400;
      text-decoration-line: strikethrough;
    }
  }
`;

export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: #eeeeee;
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 100px;
    background: #000000;
    cursor: pointer;
    box-shadow: none;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
  }
`;

export const ButtonPrev = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  left: -10px;
  z-index: 1;
`;
export const ButtonNext = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.06);
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 150px;
  right: -10px;
  z-index: 1;
`;
export const BtnImg = styled.img`
  display: block;
  margin: auto;
  width: 32px;
  height: 32px;
`;
