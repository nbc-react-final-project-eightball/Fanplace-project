import styled from 'styled-components';

export const PaymentContainer = styled.div`
  width: 100%;
  /* height: 0.433; */
  padding-bottom: 300px;
  background: #f9f9f9;
  flex-shrink: 0;
`;

export const Payment = styled.div`
  height: 900px;
  top: 112px;
  padding: 0 2.5rem 0 8.75rem;
  @media screen and (max-width: 768px) {
    padding: 0 2.5rem 0 2.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 0 2.5rem 0 1rem;
  }
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    width: 450px;
  }
`;

export const PaymentSection = styled.div`
    @media screen and (max-width: 768px) {
    width:700px ;
  }
  @media screen and (max-width: 480px) {
    width: 450px;
  }

`

export const Address = styled.div`
    width: 22.5rem;
  height: 50%;
  min-height: 25rem;
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`