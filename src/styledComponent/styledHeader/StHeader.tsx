import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 90px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: black;
  }
`;

// BasicHeader Styleds
export const BrandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 30px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
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
    color: white;
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
  color: white;
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

// ChangeHeader Styleds

export const ChangeBrandTitle = styled.div`
  background-color: #050505;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 30px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
`;

export const ChangeWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120%;
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
  button {
    background: transparent;
    padding: 3px;
    color: black;
    border: none;
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`;
export const ChangeHeader = styled.div`
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
export const ChangeBrandLogo = styled.div`
  margin-top: 30px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ChangeHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
