import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 80px;
  /* margin-top: 2.5rem; */
  box-shadow: var(--box-shadow);
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
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  & > * {
    padding: 0.375rem;
    background: #fff;
    border-radius: 4rem;
  }
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    position: fixed;
    width: 100%;
    height: 50px;
    margin: 0 auto;

    right: 0;
    bottom: 0;
    background-color: #ffffff;
  }

  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    position: fixed;
    width: 100%;
    height: 30px;

    margin: 0 auto;
    top: 70px;
    right: -30px;
    bottom: 0;
    background-color: #ffffff;
  }
`;

export const LoginButton = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const Exchange = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`;
export const LogoutButton = styled.button`
  font-size: 0.875rem;
`;
