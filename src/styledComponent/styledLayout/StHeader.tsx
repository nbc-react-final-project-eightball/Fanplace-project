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
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    object-fit: cover;
    cursor: pointer;
  }
`;
export const BrandLogo = styled.div`
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
  gap: 1rem;

  & button {
    padding: 0.5rem;
    background: #fff;
    border-radius: 4rem;
  }
`;

export const LoginButton = styled.button`
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
