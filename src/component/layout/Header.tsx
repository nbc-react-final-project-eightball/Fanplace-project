import styled from 'styled-components';
import * as S from '../../styledComponent/styledLayout/StHeader';

const Header = () => {
  return (
    <S.HeaderContainer>
      <BrandTitle>
        <span>A Moment To Love</span>
      </BrandTitle>
      <StWrapper>
        <StHeader>
          <BrandLogo>FancyPlace</BrandLogo>
        </StHeader>
        <StHeader>
          <StHeaderButton>
            <button>로그인</button>
            <button>장바구니</button>
            <button>KoR \</button>
          </StHeaderButton>
        </StHeader>
      </StWrapper>
    </S.HeaderContainer>
  );
};

export default Header;
const StContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 90px;

  box-shadow: var(--box-shadow);
`;
const BrandTitle = styled.div`
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
const StWrapper = styled.div`
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
const StHeader = styled.div`
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
const BrandLogo = styled.div`
  margin-top: 50px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
