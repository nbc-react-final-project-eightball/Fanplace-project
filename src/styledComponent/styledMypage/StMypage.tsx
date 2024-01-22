import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoreLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
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
    color: #999;
    font-size: 0.875rem;
  }
  a {
    position: relative;
    top: -5px;
    right: unset;
  }
`;

export const TableWrapper = styled.div``;
export const TableHead = styled.div`
  height: 3rem;
  border-top: 1px solid #000;
  border-bottom: 1px solid #ddd;
  color: #555;
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
`;
export const TableBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem;
  p {
    color: #999;
  }
`;
