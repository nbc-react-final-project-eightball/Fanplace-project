import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 200vh;
  align-items: center;
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 5fr;
  grid-template-rows: 0fr 0fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 280vw;
`;
export const LayoutSection1 = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  background: black;
  width: 15vw;
  height: 100vh;
  margin-top: 10%;
`;
export const LayoutSection2 = styled.div`
  grid-area: 1 / 3 / 4 / 4;

  width: 85vw;
  height: 100vh;
`;

//Footer start
export const FooterContainer = styled.div`
  background-color: #faafaf;
  padding: 20px;
  color: white;
  width: 100%;
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
