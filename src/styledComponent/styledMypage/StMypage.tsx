import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoreLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
`;

export const RightWrapper = styled.div`
  width: 100%;
`;
export const OrderList = styled.div`
  width: 100%;
`;
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
  a {
    position: relative;
    top: -8px;
    right: unset;
  }
  border-bottom: 1px solid var(--color-primary);
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

export const TableWrapper = styled.div``;
export const TableHead = styled.div`
  height: 3rem;
  border-bottom: 1px solid var(--color-medium-gray-dd);
  color: var(--color-primary-medium-55);
  ul {
    display: flex;
    width: 100%;
    height: 100%;
  }
  ul li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.875rem;
  }
  ul li:nth-child(2) {
    flex: 2;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const TableBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  margin-bottom: 100px;
  border-bottom: 1px solid var(--color-medium-gray-ee);
  p {
    color: var(--color-primary-medium-99);
  }
`;
