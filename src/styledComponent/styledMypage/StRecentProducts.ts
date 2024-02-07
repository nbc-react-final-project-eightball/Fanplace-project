import { Link } from 'react-router-dom';
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
    color: var(--color-primary-medium-99);
    font-size: 0.875rem;
    word-break: keep-all;
  }
  border-bottom: 1px solid var(--color-medium-gray-dd);
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
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const RecentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  width: calc((100% - 40px) / 3);
  cursor: pointer;
  @media (max-width: 1200px) {
  }
  @media (max-width: 768px) {
    width: calc((100% - 40px) / 2);
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
`;
export const imgWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;
export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: lightgray 50%;
  object-fit: cover;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.06);
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
  }
`;
export const ListInTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Artist = styled.p`
  color: var(--color-primary-medium-99);
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
  color: var(--color-primary-medium-33);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5; /* 150% */
  margin-bottom: 10px;
`;
export const ReleaseDate = styled.p`
  color: var(--color-primary-medium-55);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  margin-bottom: 20px;
`;
export const Price = styled.p`
  color: var(--color-primary-medium-33);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5; /* 133.333% */

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
