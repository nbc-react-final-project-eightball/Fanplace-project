import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background: ${({ color }) => color};
  color: ${({ color }) => (color === 'transparent' ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 90px;
  border: 2px solid white;
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
  button {
    background: transparent;
    padding: 3px;
    border: none;
    padding: 10px;
    font-size: 20px;
    text-shadow: 2px 4px 2px gray;
    font-weight: 700;
    cursor: pointer;
  }
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const BrandLogo = styled.div`
  margin-top: 50px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
export const HeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
