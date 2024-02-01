import styled from 'styled-components';
//하단 캐러셀 스타일 start
export const Div = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 32.5rem;
  height: 32.5rem;
  margin: 0 auto;
  border-radius: 32.5rem;
  @media (max-width: 768px) {
    width: 21.5rem;
    height: 21.5rem;
  }
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: -25px;
  transform: translateY(-50%);
  display: block;
  z-index: 5;
  width: 1px;
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
  @media (max-width: 370px) {
    left: -12px;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: -25px;
  transform: translateY(-50%);
  display: block;
  z-index: 5;
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
  @media (max-width: 370px) {
    right: -12px;
  }
`;
export const MainTopCarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;
`;
export const MainTopCarousel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const MainTopCarouselItem = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MainTopCarouselItemText = styled.div``;

export const CarouselRange = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  background: var(--color-medium-gray-ee);
  margin: 0 auto;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    border: 4px solid var(--color-primary);
    width: 100px;
    background: var(--color-primary);
    cursor: pointer;
    box-shadow:
      3px 3px 1px var(--color-primary),
      0px 0px 1px #0d0d0d;
    transition:
      background 0.5s ease-in-out,
      border 0.5s ease-in-out,
      left 0.5s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
  }
`;
