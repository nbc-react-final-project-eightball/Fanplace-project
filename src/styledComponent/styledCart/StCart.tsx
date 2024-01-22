import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  height: 900px;
  background: #f7f7f7;
  flex-shrink: 0;

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + label:before {
    position: absolute;
    top: 1px;
    left: 1px;
    display: block;
    content: url('img/common/checked.svg');
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  label {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    border: 1px solid #d9d9d9;
    position: relative;
  }
`;

export const Cart = styled.div`
  width: 1200px;
  height: 900px;
  top: 112px;
  padding-left: 165px;
  display: flex;
  flex-direction: column;
  .allArea {
    display: flex;
  }
`;
export const CartTitle = styled.div`
  width: 100%;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: space-between;
`;
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
export const RightArea = styled.div`
  width: 280px;
  height: 321px;
  border-radius: 10px;
  background: #fff;
  padding: 20px;

  .paymentInfo {
    color: #333;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
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

export const CartWrapper = styled.li`
  display: flex;
  padding: 20px 0;
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

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  margin-left: 59px;
  .amount1 {
    justify-content: center;
    padding: 20px;
  }
`;
