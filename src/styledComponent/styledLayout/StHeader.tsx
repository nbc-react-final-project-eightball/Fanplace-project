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
  @media (max-width: 768px) {
    padding: 0 2rem;
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
      width: 50%;
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
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
  }
`;
export const LogoutButton = styled.button`
  font-size: 0.875rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileName = styled.p`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 14px;
  }
`;

export const SearchDiv = styled.div`
  position: relative;
`;
interface SearchProps {
  $setchClick: boolean;
}
export const Searchinput = styled.input<SearchProps>`
  display: flex;
  justify-content: center;
  padding: 0.375rem;
  background: var(--color-white);
  border-radius: 4rem;
  position: absolute;
  left: -150px;
  visibility: ${(props) => (props.$setchClick ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.$setchClick ? 1 : 0)};
  transition: all 1s ease-in-out;
`;

export const SearchinputButton1 = styled.button<SearchProps>`
  visibility: ${(props) => (props.$setchClick ? 'visible' : 'hidden')};
  left: 0px;
  z-index: ${(props) => (props.$setchClick ? 1 : 0)};
`;

export const SearchinputButton2 = styled.button<SearchProps>`
  visibility: ${(props) => (props.$setchClick ? 'hidden' : 'visible')};
  z-index: 2;
  position: absolute;
`;
