import styled from 'styled-components';

export const RecentProductsWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
  div h3 {
    font-size: 1.125rem;
  }
  div p {
    color: #999;
    font-size: 0.875rem;
    word-break: keep-all;
  }
  border-bottom: 1px solid #ddd;
  @media (max-width: 480px) {
    div {
      align-items: center;
      gap: 0.625rem;
    }
    div h3 {
      min-width: 4.25rem;
    }
  }
`;

export const RecentContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  @media (max-width: 1200px) {
    /* 1200px 이하 화면 크기에 대한 스타일 */
  }
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    padding-left: 100px;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    padding-left: 60px;
  }
`;
export const RecentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  @media (max-width: 1200px) {
    gap: 100px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 544px) {
    gap: 40px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;
export const List = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  width: calc((100% - 60px) / 3);
  cursor: pointer;
  @media (max-width: 1200px) {
    /* 1200px 이하 화면 크기에 대한 스타일 */
    flex: 0 0 33%;
  }
  @media (max-width: 768px) {
    flex: 0 0 45%;
  }

  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

export const Img = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 8px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    width: 240px;
    height: 240px;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    width: 250px;
    height: 250px;
  }
`;
export const ListInTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Artist = styled.p`
  color: #999;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 171.429% */
`;

export const ProductTitle = styled.h1`
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  height: 43px;
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  margin-bottom: 10px;
`;
export const ReleaseDate = styled.p`
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
`;
export const Price = styled.p`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 133.333% */
`;
