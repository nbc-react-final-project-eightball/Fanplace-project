import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
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
    flex-grow: 1;
    width: 25%;
  }

  @media (max-width: 480px) {
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
    flex-grow: 0;
    width: 90%;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 70%;
    gap: 60px;
  }
`;

export const CarouselWrapper1 = styled.div`
  position: relative;
`;

export const Title = styled.h2`
  color: var(--color-primary-medium-33);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  letter-spacing: -0.96px;
  margin-bottom: 10px;
  height: 40px;
  background: var(--color-medium-gray-ee);
  width: 100px;
`;
export const TitleText = styled.p`
  color: var(--color-primary-medium-55);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5; /* 150% */
  height: 24px;
  background: var(--color-medium-gray-ee);
  width: 50px;
`;
export const Img = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 8px;
  background: var(--color-medium-gray-ee);
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    width: 168px;
    height: 168px;
  }
  @media (max-width: 480px) {
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
  background: var(--color-medium-gray-ee);
  height: 24px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.h1`
  color: var(--color-primary-medium-33);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  margin-bottom: 10px;
  width: 250px;
  height: 24px;
  background: var(--color-medium-gray-ee);
`;

export const ReleaseDate = styled.p`
  color: var(--color-primary-medium-99);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
  width: 100px;
  height: 14px;
  background: var(--color-medium-gray-ee);
`;
//가격
export const Price = styled.p`
  color: var(--color-primary-medium-33);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 133.333% */
  width: 100px;
  height: 24px;
  background: var(--color-medium-gray-ee);
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

export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: var(--color-medium-gray-ee);
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    width: 100px;
    background: var(--color-primary);
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
  background-color: var(--color-primary);
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
  background-color: var(--color-primary);
  border-radius: 50%;
  position: absolute;
  top: 150px;
  right: -10px;
  z-index: 1;
`;
