import styled from 'styled-components';
//하단 캐러셀 스타일 start
export const Div = styled.div`
  display: flex;
  justify-content: center;
`;

export const Carousel = styled.div`
  display: flex;
  /* transition: all 500ms ease-in-out; */
`;
export const SlideInTextDiv = styled.div`
  /* visibility: hidden; */
  position: absolute;
  width: 100%;
  top: 80%;
  left: 50%;
  height: 40%;
  padding: 5px;
  transform: translate(-50%, -50%);
  /* transition: all 0.5s ease-in-out; */
  background-color: rgba(43, 81, 114, 0.5);
  color: whitesmoke;
  text-shadow: 1px 1px 1px black;
  line-height: 150%;
`;
export const Slide = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 25%;
  margin: 0 0.5rem;
  &:hover ${SlideInTextDiv} {
    visibility: visible;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;
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
//하단 캐러셀 스타일 end

//앨범 캐러셀 스타일 start
export const AlbumDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const AlbumContainer = styled.div`
  position: relative;
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  flex-grow: 20;
`;

export const AlbumCarousel = styled.div`
  display: flex;
  transition: transform 0.5s;
`;

export const AlbumSlide = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 25%;
  margin: 0 4rem;
  transform: translateX(-25%);
`;
export const AlbumTitle = styled.h2`
  text-align: center;
  margin-top: 10px;
`;
