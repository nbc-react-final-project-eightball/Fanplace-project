import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 9fr;
  grid-template-rows: 0fr 0fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 100%;
  height: 120vw;
  padding: 0 1.5rem;
`;
export const LayoutSection1 = styled.div`
  grid-area: 1 / 2 / 4 / 3;
  width: 100px;
  margin-top: 120px;
`;
export const LayoutSection2 = styled.div`
  grid-area: 1 / 3 / 4 / 4;
  height: 100%;
  width: 100%;
`;

//Footer start
export const FooterContainer = styled.div`
  background-color: #202020;
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
