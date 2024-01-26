import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
`;

export const Welcome = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 2rem;
  border-radius: 2.5rem;
  font-size: 0.87rem;
  color: #777;
  background: #f7f7f7;
  z-index: 9;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  background-color: aqua;

  /* padding: 0 1.5rem; */
`;
export const LayoutSection1 = styled.div`
<<<<<<< HEAD
  width: 100px;
  margin-top: 80px;
=======
  margin-top: 120px;
>>>>>>> ff6b18e138cba73d665dc53d0d53b5cc807444bf
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
