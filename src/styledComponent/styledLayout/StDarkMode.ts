import styled from 'styled-components';

export const DarkeModeButton = styled.button`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--color-white);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.14);
  border-radius: 30px;
  transition: all 200ms;
  z-index: 99;
  svg {
    width: 24px;
  }
`;
