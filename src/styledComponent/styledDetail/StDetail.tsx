import styled from 'styled-components';

export const DtailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 2.5rem 0 8.75rem;
  @media (max-width: 768px) {
    padding: 1rem 1rem;
    padding-left: 3rem;
    flex: 0 0 100%;
  }

  @media (max-width: 480px) {
  }
`;

export const ProductSection1 = styled.section`
  /* padding: 20px; */
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
export const ProductSideImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 4px;
`;
export const ProductImgContainer = styled.div``;
export const ProductImgContainerSection1 = styled.section``;
export const ProductImgContainerSection2 = styled.section`
  margin-top: 20px;
`;

export const ProductContainer = styled.div`
  width: 51.85%;
  max-width: 520px;
  height: 100%;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
  }
`;

export const ProductSection2 = styled.section`
  padding: 20px;
  justify-content: center;

  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0px;
  }

  @media (max-width: 480px) {
  }
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
`;

export const ProductInfoContainer = styled.div`
  position: sticky;
  top: 100px;
  width: 39.89%;
  max-width: 400px;
  height: 700px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 480px) {
  }
`;

export const ProductInfoSection1 = styled.section`
  width: 100%;
  height: 200px;
`;
export const ProductInfoSection1_1 = styled.section`
  color: #aaa;
  padding: 0 0 10px 0;
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
  h1 {
    font-weight: normal;
  }
  li {
    display: flex;
    padding-top: 12px;
    gap: 30px;
    font-weight: normal;
  }
  span {
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
  margin-bottom: 20px;
`;
export const ProductInfoSection2_2CartBoxSection2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProductInfoBtn = styled.button`
  border-radius: 70px;
  margin-left: 10px;
  border: 1px solid #dedddd;
  color: #dedddd;
  background-color: #ffff;
  text-align: center;
  width: 22px;
  height: 22px;
  &:first-child {
    margin-left: 0;
    margin-right: 10px;
  }
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

  font-size: 16px;
  font-weight: 800;
`;
export const ProductInfoSection3_1 = styled.section`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
export const ProductInfoSection3Btn1 = styled.button`
  color: white;
  border-radius: 30px;
  height: 56px;
  width: 100%;
  margin: 0 auto;
  font-weight: normal;
  background-color: #000000;
  transition: all 0.2s;
  &:hover {
    background-color: #333;
  }
`;
export const ProductInfoSection3Btn2 = styled.button`
  width: 50%;
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: #000;
  border: 1px solid #999;
  background-color: #ffffff;
  transition: all 0.2s;
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
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: #8f86ff;
  border: 1px solid #8f86ff;

  transition: all 0.2s;
  &:hover {
    color: #ffffff;
    background-color: #8f86ff;
  }
`;
