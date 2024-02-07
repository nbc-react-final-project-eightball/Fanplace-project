import styled, { css } from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  /* height: 0.433; */
  padding-bottom: 300px;
  background: var(--color-light-gray-f9);
  flex-shrink: 0;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 900px;
  top: 112px;
  padding: 0 2.5rem 0 8.75rem;
  @media screen and (max-width: 768px) {
    padding: 0 2.5rem 0 2.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    /* width: 450px; */
  }
`;

export const CartTitle = styled.div`
  width: 100%;
  color: var(--color-primary);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 40px auto 20px;
  display: flex;
  justify-content: space-between;
`;
export const Process = styled.div`
  display: flex;
  align-items: center;
  span {
    color: var(--color-primary-medium-99);
    font-size: 16px;
    font-weight: 400;
  }
  span.action {
    color: var(--color-primary);
    font-size: 16px;
    font-weight: 600;
  }
`;
export const LeftContainer = styled.div`
  max-width: 720px;
  width: 66.6666%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #efefef;
  background: var(--color-white);
  padding: 20px;

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox']:checked + label:before {
    position: absolute;
    top: 0;
    left: 0;
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
    border: 1px solid var(--color-light-gray-e9);
    position: relative;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    max-width: unset;
    width: 100%;
  }
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

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
    width: 54%;
    @media screen and (max-width: 760px) {
      width: 50%;
    }
    @media screen and (max-width: 480px) {
    }
  }
  .circleArea {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding-right: 10px;
    @media screen and (max-width: 680px) {
      margin-left: auto;
      padding-top: 40px;
      padding-right: 0;
    }
    @media screen and (max-width: 480px) {
      padding-top: 20px;
    }
  }
  .circle {
    width: 22px;
    height: 22px;
    background-color: var(--color-white);
    border: 1px solid #ddd;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    /* width: 50%; */
    color: var(--color-primary-medium-33);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .productprice {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }
  @media screen and (max-width: 680px) {
    .productprice {
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
  @media screen and (max-width: 480px) {
    .productprice {
      bottom: 0;
    }
  }
`;
export const RightContainer = styled.div`
  max-width: 22.5rem;
  width: 33.3334%;
  height: 320px;
  padding: 20px;
  border-radius: 10px;
  background: var(--color-white);

  @media screen and (max-width: 1024px) {
    max-width: unset;
    width: 400px;
    margin-left: auto;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PaymentInfo = styled.h2`
  font-size: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-light-gray-e9);
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  h3 {
    color: var(--color-primary-medium-99);
    font-weight: 500;
  }
  span {
    font-size: 16px;
    color: var(--color-primary-medium-33);
    font-weight: 500;
  }
  h2 {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 16px;
    color: var(--color-primary-medium-33);
    font-weight: 600;
    border-top: 1px solid var(--color-light-gray-e9);
    padding: 20px 0 30px;
  }
  h2 span {
    font-size: 20px;
  }
`;
export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 0;
`;

export const PaymentButton = styled.button`
  width: 100%;
  height: 48px;
  text-align: center;
  flex-shrink: 0;
  border-radius: 28px;
  background: var(--color-primary);
  color: var(--color-white);
  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--color-medium-gray-be);
      cursor: not-allowed;
    `}
`;
export const CartList = styled.ul`
  gap: 20px;
  li:first-child {
    border-top: 1px solid var(--color-light-gray-e9);
  }
  li {
    border-top: 1px solid #e9e9e9;
  }
`;

export const CartWrapper = styled.li`
  position: relative;
  display: flex;
  padding: 20px 0 20px 0;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
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
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const TotalAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  .div1 {
    color: var(--color-primary-medium-99);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .div2 {
    color: var(--color-primary-medium-33);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
