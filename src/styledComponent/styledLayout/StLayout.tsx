import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  @media (max-width: 768px) {
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
  color: var(--color-primary-medium-77);
  background: var(--color-light-gray-f9);
  z-index: 9;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LayoutContainer = styled.div`
  width: 100%;
`;
export const LayoutSection1 = styled.div`
  width: 100px;
  margin-top: 60px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const LayoutSection2 = styled.div`
  height: 100%;
  max-width: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

//Footer start
export const FooterContainer = styled.div`
  background: #202020;
  padding: 40px 2.5rem;
  color: var(--color-white);
  width: 100%;
  height: auto;
  @media (max-width: 768px) {
    margin-bottom: 64px;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  font-size: 14px;
  p {
    color: #999;
    line-height: 1.5;
  }
`;
export const ContactInfo = styled.div`
  line-height: 1.5em;
`;
export const ContactTitle = styled.p`
  margin-bottom: 6px;
`;

export const FooterInnerWrapper = styled.div`
  display: flex;
  gap: 54px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const LegalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Copyright = styled.p`
  margin-top: 40px;
  color: var(--color-medium-gray-bb);
`;
//FOOTER END
