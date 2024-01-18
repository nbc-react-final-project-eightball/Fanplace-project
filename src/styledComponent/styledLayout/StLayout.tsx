import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const Welcome = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  font-size: 0.87rem;
  color: #fff;
  background: #000;
  z-index: 9;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;
export const LayoutSection1 = styled.div`
  width: 100px;
  margin-top: 120px;
`;
export const LayoutSection2 = styled.div`
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
