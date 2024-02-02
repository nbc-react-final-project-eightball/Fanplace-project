import styled from 'styled-components';

export const PaymentContainer = styled.div`
  width: 100%;
  /* height: 0.433; */
  min-height: 1100px;
  padding-bottom: 300px;
  background: var(--color-light-gray-f9);
  flex-shrink: 0;
  @media screen and (max-width: 1024px) {
    padding-bottom: 100px;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2.5rem 0 8.75rem;
  @media screen and (max-width: 768px) {
    padding: 0 2.5rem 0 2.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1.5rem;
  }
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const PaymentSection = styled.div`
  position: absolute;
  top: 320px;
  left: 0;
  width: 100%;

  height: 100%;
  @media screen and (max-width: 1024px) {
    position: relative;
    top: unset;
  }
  /* @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 450px;
  } */
`;

export const Address = styled.div`
  max-width: 720px;
  width: 66.6666%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background: var(--color-white);
  color: var(--color-primary-medium-33);

  @media screen and (max-width: 1024px) {
    max-width: unset;
    width: 100%;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-light-gray-e9);
  }
`;

export const InfoWrapper = styled.div`
  font-size: 14px;
  h4 {
    margin-bottom: 10px;
    font-weight: 500;
  }
  span {
    color: var(--color-primary-medium-99);
  }
  p {
    margin-top: 10px;
    color: var(--color-primary-medium-77);
  }
`;

export const ApiWrapper = styled.div`
  max-width: 720px;
  width: 66.6666%;
  height: 100%;
  margin-top: 20px;
  @media screen and (max-width: 1024px) {
    max-width: unset;
    width: 100%;
  }
`;
