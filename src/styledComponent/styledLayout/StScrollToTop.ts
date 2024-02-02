import styled from 'styled-components';

export const ScrollToTopButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  right: 16px;
  bottom: 106px;
  display: flex;
  opacity: ${(props) => (props.$isVisible ? '1' : '0')};
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 30px;
  border: 1px solid var(--color-primary-medium-55);
  transition: all 200ms;
  z-index: 99;
  @media (max-width: 768px) {
    bottom: 146px;
  }
`;
