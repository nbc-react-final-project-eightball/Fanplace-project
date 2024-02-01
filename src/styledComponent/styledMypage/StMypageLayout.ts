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
  background: var(--color-light-gray-f9);
  @media (max-width: 1024px) {
    height: auto;
    padding: 2.5rem 2.5rem 2.5rem 8.75rem;
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  }
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
    background: var(--color-white);
    border: 1px solid var(--color-light-gray-ef);
    border-radius: 0.5rem;
    padding: 2rem 1rem 2rem 2rem;
    box-sizing: border-box;
  }
  & > a:first-child {
    padding: 1.5rem;
  }
  & > a h3 {
    color: var(--color-primary-medium-55);
    font-weight: 600;
    font-size: 1rem;
  }
  & > a h4 {
    display: flex;
    align-items: center;
    gap: 0.125rem;
    margin: 1rem 0;
    color: var(--color-accent);
    font-size: 1.5rem;
    font-weight: 600;
  }
  & > a h4 span {
    color: var(--color-accent);
    font-size: 1.25rem;
  }
  & > a p {
    color: var(--color-primary-medium-99);
    font-size: 0.875rem;
  }
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    > a {
      width: calc(33.3333% - 6.6666px);
      padding: 1.75rem 1rem 1.75rem 1.75rem;
    }
    > a:last-child {
      display: none;
    }
  }

  @media (max-width: 640px) {
    > a {
      width: calc(50% - 5px);
    }
    > a:last-child {
      display: block;
    }
  }
  @media (max-width: 480px) {
    > a {
      position: relative;
      display: flex;
      width: 100%;
      height: 5.25rem;
      padding: 1.25rem;
    }
    > a:first-child {
      align-items: center;
      padding: 1.25rem;
      gap: 0.5rem;
    }
    > a h4 {
      position: absolute;
      top: 50%;
      right: 3rem;
      transform: translateY(-50%);
      margin: 0;
      font-size: 1rem;
      line-height: 1.5;
    }
    > a h4 span {
      font-size: 1rem;
    }
    > a:not(:first-child) p {
      position: absolute;
      bottom: 1.25rem;
    }
  }
`;
export const MyInfoBox = styled(Link)`
  span {
    font-size: 0.875rem;
    color: var(--color-primary-medium-55);
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
  @media (max-width: 480px) {
    width: 2.625rem;
    height: 2.625rem;
    margin-bottom: 0;
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
    color: var(--color-medium-gray-aa);
    font-weight: 300;
  }
  @media (max-width: 480px) {
    margin-bottom: 0;
  }
`;
export const MyWishListBox = styled(Link)`
  @media (max-width: 480px) {
  }
`;
export const MyCouponBox = styled(Link)``;
export const MyChatBox = styled(Link)``;
export const MoreLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  @media (max-width: 460px) {
    top: 50%;
    transform: translateY(-50%);
    right: 1.25rem;
  }
`;

export const MainContentBox = styled.div`
  width: 100%;
  padding: 0 2.5rem 0 8.75rem;
  margin-bottom: 6.25rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const MainContentInnerBox = styled.div`
  display: flex;
  max-width: 75rem;
  margin: 3.5rem auto 0;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
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
  @media (max-width: 1024px) {
    width: 100%;
    padding-right: 0;
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
    color: var(--color-primary-medium-55);
    border: 1px solid var(--color-light-gray-ef);
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.25rem 1.06rem 1.25rem 1.25rem;
    word-break: keep-all;
  }
  li a.active {
    color: var(--color-accent);
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 3.5rem;
    li {
      width: 33.3333%;
    }
  }

  @media (max-width: 768px) {
    li {
      width: 50%;
    }
  }
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;
