import styled from 'styled-components';
type ArtistFilterProps = {
  $isOpen: boolean;
  onClick?: () => void;
};
export const GoodsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1360px;
  min-height: 1200px;
  padding: 0 2.5rem 0 8.75rem;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const GoodsListContainerSection = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
//아티스트 선별? // 페이지 위치 알려주는곳 ? 여기는 flex 써도 될듯?
export const GoodsListSection1 = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 20px;
  & + div {
    margin-left: 1.25rem;
  }
  @media (max-width: 768px) {
    & + div {
      margin-left: 0;
    }
  }

  @media (max-width: 480px) {
  }
`;
//아티스트 필터
export const ArtistFilter = styled.div<ArtistFilterProps>`
  width: 140px;
  height: 100%;
  font-size: 14px;
  border-radius: 8px;
  color: var(--color-primary-medium-55);
  background: var(--color-white);
  box-sizing: border-box;
`;
export const ArtistFilterBtn = styled.button<ArtistFilterProps>`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 10px;
  @media (max-width: 768px) {
    position: relative;
  }
`;
export const ArtistFilterWrapper = styled.div`
  position: relative;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.02);
`;
export const ArtistFilterContainer = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: 0 0 20px 20px;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    width: 402px;
    padding: 20px;
    position: absolute;
    top: 30px;
    z-index: 2;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    width: 280px;
  }
`;
export const ArtistFilterArtist = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    width: auto;
    min-width: 118px;
  }
`;

export const ArtistFilterArtistInput = styled.input`
  display: none;
  &:checked + label::before {
    position: absolute;
    top: 5px;
    left: 10px;
    display: block;
    content: url('/img/common/checked.svg');
    border: 1px solid var(--color-primary);
    border-radius: 3px;
    width: 20px;
    height: 20px;
  }
`;
export const ArtistFilterReset = styled.button`
  position: absolute;
  top: 2px;
  right: 0;
  padding: 10px;
  font-size: 12px;
  border-radius: 20px;
  color: #a8a8a8;
`;
export const Cate = styled.h2`
  font-size: 20px;
  color: var(--color-primary-medium-33);
  span {
    font-weight: normal;
  }
`;

export const ArtistFilterArtistLabel = styled.label`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 10px;
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid var(--color-light-gray-e9);
  }
  p {
    margin-left: 35px;
    padding: 4px 0;
  }
`;

export const GoodsListSection2 = styled.section`
  width: 100%;
`;
export const GoodsListSection2Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px 20px;
  margin-bottom: 2.5rem;
`;
interface ProductsTabProps {
  selected?: boolean;
}
export const ProductsTab = styled.div<ProductsTabProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 40px) / 3);
  height: 2.5rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1;
  border: 1px solid #ccc;
  border-radius: 3rem;
  color: ${(props) =>
    props.selected ? 'var(--color-white)' : 'var(--color-primary)'};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? 'var(--color-primary)' : 'var(--color-white)'};
  transition: all 200ms;
  &:hover {
    background-color: ${(props) =>
      props.selected
        ? 'var(--color-primary-medium-33)'
        : 'var(--color-medium-gray-ee)'};
  }
  &:active {
    transform: scale(1.008);
  }
  @media (max-width: 1024px) {
    width: calc((100% - 20px) / 2);
  }
  @media (max-width: 768px) {
    /* flex: 0 0 49%; */
  }

  @media (max-width: 480px) {
    /* flex: 0 0 100%; */
    width: 100%;
  }
`;
//상품리스트
export const GoodsListSection3 = styled.section`
  position: relative;
  width: 100%;
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
  }
`;
export const GoodsListSection3Wrapper = styled.div``;
export const GoodsCategory = styled.div`
  width: 100%;
`;
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  width: calc((100% - 40px) / 3);
  cursor: pointer;
  @media (max-width: 1024px) {
    width: calc((100% - 20px) / 2);
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

export const ProductCardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const ProductCardImgBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
  border-radius: 8px;
  background: var(--color-light-gray-f5);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.04);
`;
export const ProductCardInfoArtist = styled.div`
  margin-bottom: 4px;
  color: var(--color-medium-gray-aa);
  font-size: 14px;
  font-style: normal;
  line-height: 1.5; /* 171.429% */
`;
export const ProductCardInfo = styled.span`
  flex: 2;
  width: 100%;
  height: 100%;
  color: #ffbd76;
  font-weight: 500;
  display: inline;
`;

export const ProductCardTitle = styled.h1`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 43px;
  width: 100%;
  font-weight: 500;
`;

export const ProductReleaseDate = styled.div`
  margin-top: 10px;
  color: var(--color-primary-medium-99);
  font-size: 14px;
  font-weight: 400;
`;
export const ProductCardPrice = styled.div`
  width: 100%;
  height: 100%;
  color: var(--color-primary-medium-33);
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
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
export const ProductCardTeg = styled.img`
  width: 25%;
`;

export const GoodsListCardSection1 = styled.section`
  display: flex;
  flex-direction: column;
`;
//상품안에서 타이틀이랑 인포 나눠줌
export const GoodsListCardSection1_1 = styled.section`
  margin-bottom: 20px;
  color: var(--color-primary-medium-33);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;
export const GoodsListCardSection1_2 = styled.section`
  margin-bottom: 20px;
`;
//상품리스트 1,2,3,4,5 버튼
export const GoodsListSection4 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
  margin: 80px auto 100px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const GoodsListSection4Btn = styled.button`
  margin-right: 10px;
  cursor: pointer;
`;

export const NotProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  font-size: 18px;
`;
