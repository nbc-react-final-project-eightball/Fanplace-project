import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 5fr;
  grid-template-rows: 0fr 0fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;
export const LayoutSection1 = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  background: #494949;
  width: 15vw;
  height: 80vh;
`;
export const LayoutSection2 = styled.div`
  grid-area: 1 / 3 / 4 / 4;
  background: #cbffd4;
  width: 85vw;
  height: 80vh;
`;

//sidebar start
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
export const SideBarBtn = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #f0f90e;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
`;

//sidebar end

//Footer start
export const FooterContainer = styled.div`
  background-color: #faafaf;
  padding: 20px;
  color: white;
  width: 100vw;
  height: 200px;
`;
export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;
export const ContactInfo = styled.div`
  line-height: 1.5em;
  flex-basis: 50%;
`;
export const ContactTitle = styled.h3`
  margin-bottom: 10px;
`;

export const LegalInfo = styled.div`
  line-height: 1.5em;
  flex-basis: 50%;
  text-align: right;
`;
export const Copyright = styled.p`
  margin-top: 10px;
`;
//FOOTER END
