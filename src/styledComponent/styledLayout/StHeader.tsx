import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 80px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
  @media (max-width: 768px) {
    background: var(--color-white);
    box-shadow: 0px 4px 8px 2px rgba(0, 0, 0, 0.02);
    border-bottom: 1px solid var(--color-medium-gray-ee);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  .logo {
    width: 200px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    object-fit: cover;
  }
`;
export const BrandLogo = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
`;
export const HeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  & > * {
    display: flex;
    justify-content: center;
    padding: 0.375rem;
    background: var(--color-white);
    border-radius: 4rem;
  }
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    height: 64px;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    background-color: var(--color-white);
    @media (max-width: 768px) {
      box-shadow: 0px -4px 8px 2px rgba(0, 0, 0, 0.04);
    }
    gap: 0;
    & > * {
      width: 25%;
      padding: 0;
    }

    @media (max-width: 768px) {
      & > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
      }
      svg {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    position: fixed;
    width: 100%;
    margin: 0 auto;
  }
`;

export const LoginButton = styled(Link)`
  gap: 4px;
  font-size: 0.875rem;
`;

export const Exchange = styled.div`
  gap: 4px;
`;

export const ProfileCard = styled.div`
  gap: 4px;
  @media screen and (max-width: 768px) {
    a {
      height: 28px;
    }
  }
`;
export const LogoutButton = styled.button`
  font-size: 0.875rem;
`;

export const MobileName = styled.p`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;
