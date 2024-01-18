import styled from 'styled-components';
type AtistFilterProps = {
  isOpen: boolean;
  onClick?: () => void;
};
export const Div = styled.div``;

export const GoodsListContainer = styled.div`
  max-width: 2200px;

  margin: auto;
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`;
//아티스트 선별? // 페이지 위치 알려주는곳 ? 여기는 flex 써도 될듯?
export const GoodsListSection1 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  margin-bottom: 20px;
  padding: 20px;
`;
//아티스트 필터
export const AtistFilter = styled.button<AtistFilterProps>`
  width: 250px;
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  height: 3vh;
  transition: 0.1s;
  color: ${(props) => (props.isOpen ? 'white' : 'black')};
  background-color: ${(props) => (props.isOpen ? '#000000' : 'white')};
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
  width: 250px;

  background-color: white;
  position: absolute;
  top: -22px;
  left: 260px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #000000;
  z-index: 1;
`;
export const AtistFilterArtist = styled.div`
  margin-top: 5px;
  padding: 10px;
  width: 100%;
  height: 100%;
`;
export const AtistFilterReset = styled.button`
  position: absolute;
  left: 150px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
//페이지 위치 알려주는곳
export const PageLocation = styled.div``;
//상품종류 필터 ex) 후드티 모자 티셔츠 잠옷 등
export const GoodsListSection2 = styled.section`
  width: 100%;
`;
export const GoodsListSection2Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 20px;
`;
export const ProductsTab = styled.div`
  width: 250px;
  height: 50px;
  margin: auto;
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  background-color: black;
  color: white;
  &:hover {
    background-color: #faafaf;
  }
`;
//상품리스트
export const GoodsListSection3 = styled.section`
  width: 100%;
`;
export const GoodsListSection3Wrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 40px;
`;

export const ProductCard = styled.div`
  width: 250px;
  height: 370px;
  padding: 5px;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;

export const ProductCardImg = styled.img`
  flex: 1;
  width: 100%;
  max-height: 230px;
  height: 100%;
  border-radius: 30px;
  margin: auto;
`;
export const ProductCardImgBox = styled.div`
  width: 100%;

  border-radius: 30px;
  background-color: #f5f5f5;
`;
export const ProductCardInfo = styled.span`
  flex: 2;
  width: 100%;
  height: 100%;
  color: #ffbd76;
  font-weight: 700;
  display: inline;
`;

export const ProductCardTitle = styled.h1`
  width: 100%;
  height: 100%;
  display: inline;
  font-weight: 700;
`;

export const ProductCardPrice = styled.p`
  width: 100%;
  height: 100%;
  color: #405cfe;
  font-weight: 700;
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
  justify-content: space-between;
`;
//상품안에서 타이틀이랑 인포 나눠줌
export const GoodsListCardSection1_1 = styled.section`
  margin-bottom: 10px;
`;
export const GoodsListCardSection1_2 = styled.section`
  margin-bottom: 10px;
`;
//상품리스트 1,2,3,4,5 버튼
export const GoodsListSection4 = styled.section``;
