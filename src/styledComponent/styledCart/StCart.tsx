import styled from 'styled-components';

export const CartContainer = styled.div`
  border: solid black 2px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartTItle = styled.div`
  border: solid black 2px;
  width: 100%;
  height: 60vh;
`;

export const CartList = styled.ul`
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;

export const CartWrapper = styled.li`
  display: flex;

  gap: 12px;
  color: white;
  padding: 12px;
  border: 1px solid white;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const TotalAmount = styled.div`
  margin-top: 100px;
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  border-radius: 12px;
  padding: 12px;
  color: white;

  div {
    font-size: x-large;
    height: 100px;
  }
  button {
    background-color: white;
    width: 100px;
    height: 50px;
    color: black;
  }
`;
