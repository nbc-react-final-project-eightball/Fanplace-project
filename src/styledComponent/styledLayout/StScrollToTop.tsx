import styled from 'styled-components';

export const ScrollToTopButton = styled.button<{ isVisible: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #000;
  border-radius: 30px;
  transition: all 200ms;
`;
