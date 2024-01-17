import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  cursor: pointer;
`;
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 560px;
  height: auto;
  padding: 20px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  z-index: 11;
`;

export const LoginTitle = styled.h2``;
