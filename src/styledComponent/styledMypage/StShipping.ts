import styled from 'styled-components';

export const ShippingWrapper = styled.div`
  width: 100%;
`;

export const ShippingList = styled.div`
  position: relative;
  width: 100%;
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
  div h3 {
    font-size: 1.125rem;
  }
  border-bottom: 1px solid var(--color-medium-gray-dd);
  @media (max-width: 480px) {
    div {
      align-items: center;
      gap: 0.625rem;
    }
    div h3 {
      min-width: 4.25rem;
    }
  }
`;

export const TableWrapper = styled.div``;
export const TableHead = styled.div`
  height: 3rem;
  border-top: 1px solid var(--color-primary);
  border-bottom: 1px solid var(--color-medium-gray-dd);
  color: var(--color-primary-medium-55);
  ul {
    display: flex;
    width: 100%;
    height: 100%;
  }
  ul li {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.875rem;
    color: var(--color-primary-medium-77);
  }
  ul li:nth-child(1) {
    flex: 1;
  }
  ul li:nth-child(2) {
    flex: 0.8;
  }
  ul li:nth-child(3) {
    flex: 4;
  }
  ul li:nth-child(4) {
    flex: 2.2;
  }
  ul li:nth-child(5) {
    flex: 2;
  }
  @media (max-width: 640px) {
    display: none;
  }
`;
export const TableBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  p {
    color: var(--color-primary-medium-99);
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const GuideLetter = styled.p`
  width: 100%;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
  background: var(--color-light-gray-f9);
  color: var(--color-primary-medium-77);
  word-break: keep-all;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 4px;
  @media (max-width: 640px) {
    display: none;
  }
`;

export const MobileAddButton = styled.button`
  display: none;
  width: 100%;
  padding: 16px 0;
  margin: 20px 0;
  text-align: center;
  border-radius: 8px;
  border: 1px solid var(--color-light-gray-ef);
  @media (max-width: 640px) {
    display: block;
  }
`;
export const AddressList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > div {
    display: flex;
    align-items: center;
    padding: 1.25rem 0;
    color: var(--color-primary-medium-55);
    font-size: 0.9375rem;
    border-bottom: 1px solid var(--color-light-gray-ef);
    word-break: keep-all;
    * {
      text-align: center;
    }
    h4 {
      font-weight: normal;
    }
  }
  > div > *:nth-child(1) {
    flex: 1;
  }
  > div > *:nth-child(2) {
    flex: 0.8;
  }
  > div > *:nth-child(3) {
    flex: 4;
  }
  > div > *:nth-child(4) {
    flex: 2.2;
  }
  > div > *:nth-child(5) {
    flex: 2;
  }
  @media (max-width: 640px) {
    gap: 20px 0;
    > div {
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--color-light-gray-ef);
    }
    > div > *:nth-child(1) {
      flex: unset;
      width: 100%;
    }
    > div > *:nth-child(2) {
      flex: unset;
      width: 100%;
      margin-bottom: 10px;
    }
    > div > *:nth-child(3) {
      flex: unset;
      width: calc(100% - 50px);
      color: var(--color-primary-medium-55);
    }
    > div > *:nth-child(4) {
      flex: unset;
      width: 100%;
    }
    > div > *:nth-child(5) {
      position: absolute;
      right: 24px;
      top: 24px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex: unset;
      width: auto;
      height: calc(100% - 48px);
    }

    > div {
      * {
        text-align: left;
      }
      h4 {
        display: flex;
        color: var(--color-accent);
        margin-bottom: 20px;
      }
    }
  }
`;

export const MobileSvg = styled.svg`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;
export const DefaultAddressBox = styled.div``;
export const AddressBox = styled.div``;
export const Recipient = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 640px) {
    justify-content: unset;
    gap: 6px;
    font-weight: 500;
  }
`;
export const MobilePhoneNumber = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: block;
  }
`;
export const Line = styled.div`
  display: none;
  width: 2px;
  height: 14px;
  background: var(--color-primary-medium-77);

  @media (max-width: 640px) {
    display: block;
  }
`;
export const PhoneNumber = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
`;
export const Address = styled.div``;
export const DetailAddress = styled.div``;

export const buttonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  > button {
    padding: 4px 8px;
  }
  > p {
    max-width: 120px;
    font-size: 12px;
    border: 1px solid var(--color-light-gray-ef);
    padding: 4px;
    text-align: center;
  }
`;
export const EditButton = styled.button`
  border: 1px solid var(--color-light-gray-ef);
`;
export const DeleteButton = styled.button`
  color: #ef768c;
  border-color: #ffe9e9;
  background: #fff5f5;
  @media (max-width: 640px) {
    color: var(--color-medium-gray-aa);
    text-decoration-line: underline;
    border: none;
    background: none;
  }
`;

export const GuideEmpty = styled.p`
  margin: 2.5rem 0;
`;
