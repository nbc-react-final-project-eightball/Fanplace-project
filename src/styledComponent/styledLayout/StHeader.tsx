import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'transparent' ? 'black' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 80px;
  box-shadow: var(--box-shadow);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
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
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: red;
`;
export const HeaderButton = styled.div`
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;
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
