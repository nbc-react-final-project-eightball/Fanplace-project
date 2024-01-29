import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
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
  background: #f9f9f9;
  z-index: 9;
`;

export const LayoutContainer = styled.div`
  width: 100%;
  padding-bottom: 200px;
`;
export const LayoutSection1 = styled.div`
  width: 100px;
  margin-top: 80px;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
`;
export const LayoutSection2 = styled.div`
  height: 100%;
  max-width: 100%;
  @media (max-width: 768px) {
    /* 768px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
  @media (max-width: 480px) {
    /* 480px 이하 화면 크기에 대한 스타일 */
    max-width: 100%;
  }
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
