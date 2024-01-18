import styled from 'styled-components';
//하단 캐러셀 스타일 start
export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const PrevButton = styled.button`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  text-align: center;
  order: 0;
`;

export const NextButton = styled.button`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  text-align: center;
  order: 0;
`;
export const MainTopCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;
`;
export const MainTopCarousel = styled.div`
  display: flex;
`;
export const MainTopCarouselItem = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 100%;
  margin: 0 0.5rem;
`;

export const MainTopCarouselItemText = styled.div``;

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
    border: 4px solid #000000;
    width: 100px;
    background: #000000;
    cursor: pointer;
    box-shadow:
      3px 3px 1px #000000,
      0px 0px 1px #0d0d0d;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
  }
`;
