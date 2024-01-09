import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s;
  transform: translateX(-20%);
`;

export const Slide = styled.div`
  flex: 0 0 auto;
  width: 33%;
  margin: 0 0.5rem;
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
`;

export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: #b4b4b4;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    border: 1px solid #000000;
    width: 100px;
    height: 150px;
    background: #000000;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    transition: background 0.5s ease-in-out, border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
  }
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
