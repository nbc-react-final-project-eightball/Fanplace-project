import styled from 'styled-components';

export const DtailContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 2.5rem 0 8.75rem;
  @media (max-width: 1024px) {
    padding: 0 0.5rem 0 6.75rem;
  }

  @media (max-width: 768px) {
    /* padding: 1rem 1rem;
    padding-left: 3rem; */
  }
`;

export const ProductSection1 = styled.section``;

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
`;

export const ProductSection2 = styled.section`
  padding: 20px 0;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  background: var(--color-light-gray-f5);
  border-radius: 8px;
  margin: 40px 0 100px;
  padding: 24px;
  line-height: 1.6;
  font-size: 14px;
  text-align: left;
  color: var(--color-primary-medium-55);
`;
export const PWrapper = styled.div`
  p {
    color: var(--color-primary-medium-99);
    b {
      color: var(--color-primary-medium-55);
      font-weight: 500;
    }
  }
`;
export const ProductTitle = styled.h1`
  display: flex;
  gap: 20px;
  font-size: 30px;
  font-weight: normal;

  padding-top: 20px;
  font-size: 16px;
  border-bottom: 1px solid var(--color-light-gray-e9);
  margin-bottom: 30px;
  button {
    padding: 12px 20px;
    cursor: pointer;
    color: var(--color-primary-medium-77);
  }
`;

export const ProductDetailImg = styled.img`
  display: block;
  width: 100%;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductInfoContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  width: 39.89%;
  max-width: 440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    max-width: 100%;
  }
`;

export const ProductInfoSection1 = styled.section`
  width: 100%;
`;
export const ProductInfoSection1_1 = styled.section`
  color: var(--color-medium-gray-aa);
  padding: 0 0 10px 0;
  font-size: 14px;
  border-bottom: 1px solid var(--color-light-gray-e9);
`;
export const ProductInfoSection1_2 = styled.section`
  margin-top: 20px;
  h1 {
    font-size: 20px;
    line-height: 1.5;
    margin-bottom: 4px;
    color: var(--color-primary);
  }
  h4 {
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-medium-gray-aa);
    font-weight: normal;
  }
`;
export const ProductInfoSection1_3 = styled.section`
  margin-top: 40px;

  h3 {
    color: var(--color-primary-medium-33);
    font-size: 20px;
    font-weight: 700;
  }
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
      font-size: 20px;
      font-weight: 700;
    }
    p {
      color: rgba(190, 190, 190, 0.93);
      font-size: 14px;
      font-weight: 400;
      text-decoration: line-through;
    }
  }
`;
export const ProductInfoSection2 = styled.section`
  padding-top: 40px;
  padding-bottom: 20px;
  width: 100%;
`;
export const ProductInfoSection2_1 = styled.section`
  padding-bottom: 40px;
  ul {
    font-size: 14px;
    color: var(--color-primary-medium-77);
  }
  h1 {
    font-weight: normal;
    font-size: 14px;
    margin-bottom: 4px;
    color: var(--color-primary);
  }
  li {
    display: flex;
    padding-top: 8px;
    gap: 30px;
    font-weight: normal;
  }
  li > span {
    display: inline-block;
    min-width: 38px;
  }
  span {
    line-height: normal;
  }
`;
export const ProductInfoSection2_2 = styled.section`
  padding-bottom: 20px;
`;
export const ProductInfoSection2_2CartBox = styled.div`
  background-color: var(--color-light-gray-f7);
  padding: 20px;
  border-radius: 10px;
`;
export const ProductInfoSection2_2CartBoxSection1 = styled.section`
  margin-bottom: 20px;
  line-height: 1.5;
  p {
    font-size: 14px;
    color: var(--color-primary-medium-99);
  }

  @media (max-width: 768px) {
  }
`;
export const ProductInfoSection2_2CartBoxSection2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 14px;
    color: var(--color-primary);
  }
  p {
    color: var(--color-primary);
  }
`;

export const ProductInfoBtn = styled.button`
  border-radius: 70px;
  margin-left: 10px;
  border: 1px solid #dedddd;
  color: #dedddd;
  background-color: var(--color-white);
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
  padding: 0 0 40px;
`;
export const ProductInfoSection3 = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;

  font-size: 16px;
  font-weight: 800;
`;
export const ProductInfoSection3_1 = styled.section`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
export const ProductInfoSection3Btn1 = styled.button`
  border-radius: 30px;
  height: 56px;
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: normal;
  background-color: var(--color-primary);
  color: var(--color-white);
  transition: all 200ms;
  &:hover {
    background-color: var(--color-primary-medium-33);
  }
  &:active {
    transform: scale(1.008);
  }
`;
export const ProductInfoSection3Btn2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50%;
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: var(--color-primary);
  border: 1px solid var(--color-medium-gray-aa);
  background-color: var(--color-white);
  transition: all 200ms;
  &:hover {
    background: var(--color-medium-gray-ee);
  }
  &:active {
    transform: scale(1.008);
  }
`;
export const ProductP = styled.div`
  display: flex;
  gap: 24px;
  justify-content: flex-end;
  text-align: right;
  align-items: baseline;
  span {
    color: var(--color-primary-medium-99);
    font-size: 14px;
  }
`;
export const ProductH1 = styled.h1`
  font-size: 18px;
  color: var(--color-primary);
`;
export const ProductInfoSection3Btn3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 50%;
  height: 48px;
  border-radius: 30px;
  font-weight: normal;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);

  transition: all 200ms;
  &:hover {
    background: #f2f1ff;
  }
  &:active {
    transform: scale(1.008);
  }
`;

export const DetailReviewContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const DetailReviewInPut = styled.input`
  width: 100%;
  height: 100px;
  border-radius: 30px;
  border: 1px solid var(--color-primary-medium-99);
  padding: 20px;
  font-size: 16px;
  font-weight: 800;
  flex: 1;

  &:focus {
    outline: 1px solid var(--color-primary-medium-99);
  }
`;
export const DetailReviewRatingInput = styled.input`
  /* 라디오타입의 인풋박스 */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid var(--color-primary-medium-99);
  padding: 20px;
  font-size: 16px;
  font-weight: 800;

  &:focus {
    outline: 1px solid var(--color-primary-medium-99);
  }
`;
export const DetailReviewRatingLabel = styled.label`
  color: #ccc;
  &:hover {
    color: #fc0;
  }
`;

export const DetailReviewBtn = styled.button`
  width: 20%;
  height: 100px;
  border-radius: 30px;
  font-weight: normal;
  background-color: var(--color-primary);
  transition: all 0.2s;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: var(--color-primary-medium-33);
  }
`;
export const DetailReviewRating = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const DetailReviewForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;

  gap: 20px;
`;
export const DetailReviewFormSection1 = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;
export const DetailReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const DetailReviewContent = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;
export const DetailReviewContentSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DetailReviewContentSection1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailReviewContentSection1_1 = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    align-items: start;
  }
`;
export const DetailReviewContentSection1_2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DetailReviewContentSection2 = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DetailReviewImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const DetailReviewDeleteBtn = styled.button`
  width: 50px;
  height: 20px;
  border-radius: 30px;
  font-weight: normal;
  background-color: var(--color-primary);
  transition: all 0.2s;

  color: #ffffff;
  &:hover {
    color: var(--color-primary);
    background-color: #ffffff;
  }
  @media (max-width: 768px) {
    width: 30px;
  }
  @media (max-width: 480px) {
    width: 30px;
  }
`;
export const DetailReviewerNameH1 = styled.h1`
  width: 100%;
  font-size: 16px;
  font-weight: 800;
  text-align: left;

  @media (max-width: 768px) {
    width: 150px;
  }
  @media (max-width: 480px) {
    width: 60px;
  }
`;
export const DetailReviewercreatedAtP = styled.p`
  width: 100%;
  font-size: 12px;
  font-weight: 800;
  text-align: left;

  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 638px) {
    width: 230px;
  }
  @media (max-width: 480px) {
    width: 210px;
  }
`;
