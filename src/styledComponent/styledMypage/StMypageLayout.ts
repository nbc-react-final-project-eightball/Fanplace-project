import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MypageWrapper = styled.div`
  margin: 80px auto 0;
`;
export const InfoBoxBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  padding: 0 2.5rem 0 8.75rem;
  background: #f9f9f9;
`;
export const MyInfoBoxWrapper = styled.div`
  display: flex;
  max-width: 75rem;
  width: 100%;
  gap: 0.625rem;
  & > a {
    position: relative;
    width: 25%;
    height: 9.5rem;
    background: #fff;
    border: 1px solid #efefef;
    border-radius: 0.5rem;
    padding: 2rem;
    box-sizing: border-box;
  }
  & > a:first-child {
    padding: 1.5rem;
  }
  & > a h3 {
    color: #555;
    font-weight: 600;
    font-size: 1rem;
  }
  & > a h4 {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    margin: 1rem 0;
    color: #8f86ff;
    font-size: 1.5rem;
    font-weight: 600;
  }
  & > a h4 span {
    color: #8f86ff;
    font-size: 1.25rem;
  }
  & > a span {
    color: #999;
    font-size: 0.875rem;
  }
`;
export const MyInfoBox = styled(Link)`
  span {
    font-size: 0.875rem;
    color: #555;
  }
`;

export const MyInfoImgBox = styled.div`
  width: 3rem;
  height: 3rem;
  margin-bottom: 0.75rem;
  border-radius: 1.5rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: baseline;
  margin-bottom: 0.625rem;
  span {
    font-size: 0.75rem;
    color: #aaa;
    font-weight: 300;
  }
`;
export const MyWishListBox = styled(Link)``;
export const MyCouponBox = styled(Link)``;
export const MyChatBox = styled(Link)``;
export const MoreLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const MainContentBox = styled.div`
  width: 100%;
  padding: 0 2.5rem 0 8.75rem;
  margin-bottom: 6.25rem;
`;

export const MainContentInnerBox = styled.div`
  display: flex;
  max-width: 75rem;
  margin: 3.5rem auto 0;
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  width: 13.75rem;
  min-width: 13.75rem;
  border-radius: 16px;
  padding-right: 1.875rem;
  h3 {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;
export const MenuBox = styled.ul`
  width: 100%;

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    margin-bottom: -1px;
    color: #555;
    border: 1px solid #efefef;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.25rem 1.06rem 1.25rem 1.25rem;
  }
  li a.active {
    color: #8f86ff;
    font-weight: 500;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
