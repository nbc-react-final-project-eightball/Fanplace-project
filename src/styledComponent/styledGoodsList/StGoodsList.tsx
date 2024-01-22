import styled from 'styled-components';
type AtistFilterProps = {
  isOpen: boolean;
  onClick?: () => void;
};
export const Div = styled.div``;

export const GoodsListContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;

export const GoodsListContainerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;
//아티스트 선별? // 페이지 위치 알려주는곳 ? 여기는 flex 써도 될듯?
export const GoodsListSection1 = styled.section`
  display: flex;
  flex-direction: row;

  width: 250px;
  height: 10vh;
  margin-bottom: 20px;
`;
//아티스트 필터
export const AtistFilter = styled.button<AtistFilterProps>`
  width: 200px;
  font-size: 20px;
  padding-top: 5px;
  padding-left: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.02);
  height: 3vh;
  transition: 0.1s;
  color: #555;
  /* color: ${(props) => (props.isOpen ? 'white' : 'black')}; */
  /* background-color: ${(props) => (props.isOpen ? '#000000' : 'white')}; */
`;
export const AtistFilterBtn = styled.button<AtistFilterProps>`
  width: 100%;
  text-align: left;

  /* background-color: ${(props) => (props.isOpen ? 'white' : '#000000')}; */
`;
export const AtistFilterWrapper = styled.div`
  position: relative;
  width: 250px;
`;
export const AtistFilterContainer = styled.div`
  width: 210px;
  background-color: white;
  position: absolute;
  top: 30px;
  left: -10px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.02);
  /* background-color: #000000; */
  z-index: 1;
`;
export const AtistFilterArtist = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
`;

// input[type='checkbox'] {
//   display: none;
// }
// input[type='checkbox'] :checked + label::before {
//   position: absolute;
//   top: 1px;
//   left: 1px;
//   /* 체크표시 */
//   content: '✔';
//   color: white;
//   width: 18px;
//   height: 18px;
// }
// label {
//   width: 20px;
//   height: 20px;
//   border-radius: 2px;
//   border: 1px solid #a8a8a8;
//   position: relative;
// }

export const AtistFilterArtistInput = styled.input`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #a8a8a8;
`;
export const AtistFilterReset = styled.button`
  position: absolute;
  left: 120px;
  border-radius: 20px;
  color: #a8a8a8;
`;
export const Cate = styled.h2`
  font-size: 20px;
`;

export const AtistFilterArtistLabel = styled.label`
  color: #555;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 400;
`;

//페이지 위치 알려주는곳
export const PageLocation = styled.div``;
//상품종류 필터 ex) 후드티 모자 티셔츠 잠옷 등
export const GoodsListSection2 = styled.section`
  width: 100%;
`;
export const GoodsListSection2Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
`;
interface ProductsTabProps {
  selected?: boolean;
}
export const ProductsTab = styled.div<ProductsTabProps>`
  width: calc((100% - 20px) / 3);
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  padding: 10px;
  border: 1px solid black;
  border-radius: 209px;
  transition: all 0.3s ease-in-out;
  color: ${(props) => (props.selected ? '#ffffff' : '#000000')};
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#333' : '#ffffff')};
  &:hover {
    background-color: #333;
    color: #ffffff;
  }
`;
//상품리스트
export const GoodsListSection3 = styled.section`
  width: 100%;
  position: relative;
`;
export const GoodsListSection3Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 40px;
`;
export const GoodsCategory = styled.div`
  position: absolute;
  left: 28px;
  top: -15px;
`;
export const ProductCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ProductCardImg = styled.img`
  flex: 1;
  width: 300px;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;
export const ProductCardImgBox = styled.div`
  width: 300px;
  margin-bottom: 20px;
  border-radius: 30px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.08);
`;
export const ProductCardInfoArtist = styled.div`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
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

  font-weight: 500px;
`;

export const ProductCardPrice = styled.p`
  width: 100%;
  height: 100%;
  color: #333;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 10px;
`;
export const ProductCardTeg = styled.img`
  width: 25%;
`;

export const GoodsListCardSection1 = styled.section`
  margin-top: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
//상품안에서 타이틀이랑 인포 나눠줌
export const GoodsListCardSection1_1 = styled.section`
  margin-bottom: 10px;
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
`;
export const GoodsListCardSection1_2 = styled.section`
  margin-bottom: 10px;
`;
//상품리스트 1,2,3,4,5 버튼
export const GoodsListSection4 = styled.section`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin: 0 auto;
`;

export const GoodsListSection4Btn = styled.button`
  background-color: white;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
  }
`;

export const NotProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 30px;
`;
