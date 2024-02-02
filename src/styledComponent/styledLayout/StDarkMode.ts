import styled from 'styled-components';

interface DarkModeButtonProps {
  $darkMode: boolean;
}

export const DarkeModeButton = styled.button<DarkModeButtonProps>`
  position: fixed;
  right: 16px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  /* background: var(--color-primary); */
  background: #fff;
  /* border: 1px solid var(--color-primary-medium-55); */
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.14);
  border-radius: 30px;
  transition: all 200ms;
  z-index: 99;
  @media (max-width: 768px) {
    bottom: 80px;
  }
`;
