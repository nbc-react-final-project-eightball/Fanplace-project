import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 2.5rem 0 8.75rem;
`;

export const InfoText = styled.div``;

export const LeftArea = styled.div`
  width: 720px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #efefef;
  background: #fff;
  padding: 20px;

  .artistName {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
  }

  .titleWrapper {
    display: flex;
    flex-direction: column;
  }
  .circleArea {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-right: 56px;
  }
  .circle {
    width: 22px;
    height: 22px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    width: 360px;
    color: #333;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .productprice {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CartList = styled.ul`
  gap: 20px;
  li:first-child {
    border-top: 1px solid #d9d9d9;
  }
  li {
    border-top: 1px solid #e9e9e9;
  }
`;
export const CartWrapper = styled.div`
  display: flex;
  padding: 20px 0;
`;
export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

export const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #efefef;
  margin-left: 20px;
  margin-right: 20px;
  background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;
`;
