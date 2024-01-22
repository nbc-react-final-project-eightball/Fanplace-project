import styled from 'styled-components';

export const DtailContainer = styled.div`
  margin-left: 150px;
  width: 1800px;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: center;
`;

export const ProductSection1 = styled.section`
  padding: 20px;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;
export const ProductSideImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 20px;
`;
export const ProductImgContainer = styled.div``;
export const ProductImgContainerSection1 = styled.section``;
export const ProductImgContainerSection2 = styled.section`
  margin-top: 20px;
`;

export const ProductContainer = styled.div`
  height: 100%;
  width: 900px;
  margin-right: 30px;
`;

export const ProductSection2 = styled.section`
  padding: 20px;
  justify-content: center;

  text-align: center;
  overflow: hidden;
`;

export const ProductTitle = styled.h1`
  display: flex;
  gap: 20px;
  font-size: 30px;
  font-weight: 700;

  padding-top: 20px;
  font-size: 16px;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 30px;
  span {
    padding: 20px;
    cursor: pointer;
    border-bottom: 2px solid #000;
  }
`;

export const ProductDetailImg = styled.img`
  display: block;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
  border-radius: 20px;
`;

export const ProductInfoContainer = styled.div`
  position: sticky;
  top: 100px;
  margin-right: 230px;
  height: 700px;
  width: 600px;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  padding: 10px;

  border-radius: 20px;
`;

export const ProductInfoSection1 = styled.section`
  width: 100%;
  height: 200px;
  padding: 10px;
`;
export const ProductInfoSection1_1 = styled.section`
  color: #aaa;
  padding: 10px;
  border-bottom: 1px solid #e9e9e9;
`;
export const ProductInfoSection1_2 = styled.section`
  margin-top: 20px;
  h1 {
    font-size: 26px;
  }
`;
export const ProductInfoSection1_3 = styled.section`
  margin-top: 20px;
  h1 {
    font-size: 26px;
    color: #8f86ff;
  }
`;
export const ProductInfoSection2 = styled.section`
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  height: 350px;
`;
export const ProductInfoSection2_1 = styled.section`
  padding-bottom: 20px;
  ul {
    font-size: 14px;
    color: #777;
  }
  li {
    display: flex;
    padding-top: 12px;
    gap: 43px;
  }
  span {
    font-weight: 400;

    line-height: normal;
  }
`;
export const ProductInfoSection2_2 = styled.section`
  padding-bottom: 20px;
`;
export const ProductInfoSection2_2CartBox = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;
export const ProductInfoSection2_2CartBoxSection1 = styled.section`
  padding: 10px;
  padding-bottom: 20px;
`;
export const ProductInfoSection2_2CartBoxSection2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductInfoBtn = styled.button`
  border-radius: 70px;
  margin-right: 10px;
  margin-left: 10px;
  color: #dedddd;
  border: 1px solid #dedddd;
  background-color: #ffff;
  text-align: center;
  width: 25px;
  height: 25px;
`;
export const ProductInfoSection2_3 = styled.section`
  justify-content: right;
  padding: 20px;
`;
export const ProductInfoSection3 = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 800;
`;
export const ProductInfoSection3_1 = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
export const ProductInfoSection3Btn1 = styled.button`
  color: white;
  border-radius: 28px;
  margin-right: 10px;
  height: 60px;
  width: 96%;
  margin: 0 auto;
  background-color: #000000;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: #333;
  }
`;
export const ProductInfoSection3Btn2 = styled.button`
  width: 50%;
  height: 60px;
  border-radius: 28px;
  margin-left: 10px;
  margin-right: 10px;
  color: #000;
  border: 1px solid #999;
  background-color: #ffffff;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #ffffff;
    background-color: #333;
  }
`;
export const ProductP = styled.p`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  text-align: right;
  span {
    color: #999;
  }
`;
export const ProductH1 = styled.h1`
  display: inline;
`;
export const ProductInfoSection3Btn3 = styled.button`
  width: 50%;
  height: 60px;
  border-radius: 28px;
  margin-left: 10px;
  margin-right: 10px;
  color: #8f86ff;
  border: 1px solid #8f86ff;

  transition: all 0.5s ease-in-out;
  &:hover {
    color: #ffffff;
    background-color: #8f86ff;
  }
`;
