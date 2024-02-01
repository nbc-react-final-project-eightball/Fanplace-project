import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ProfileSettingsWrapper = styled.div`
  width: 100%;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root {
    font-family: inherit;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 22.5rem;
    height: auto;
    margin-top: 12px;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .css-1wc848c-MuiFormHelperText-root {
    font-family: 'Pretendard', sans-serif;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 100%;
    border: 1px solid #e1e1e1;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font: unset;
    font-family: 'pretendard', san-serif;
    @media (max-width: 480px) {
      font-size: 0.9375rem;
    }
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled
    .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .css-13maa2j {
    font-family: 'pretendard', san-serif;
  }
  .css-1v4ccyo {
    width: 100%;
    height: 48px;
    font-family: 'pretendard', san-serif;
  }
  .css-1v4ccyo.Mui-disabled {
    width: 100%;
    height: 48px;
    font-family: 'pretendard', san-serif;
  }
  .css-1x5jdmq {
    height: 48px;
    box-sizing: border-box;
  }
  .css-1x5jdmq.Mui-disabled {
    height: 48px;
    box-sizing: border-box;
  }
  .css-i44wyl {
    border: 1px solid var(--color-medium-gray-be);
    margin-top: 12px;
  }
  .css-1v4ccyo.Mui-disabled .MuiOutlinedInput-notchedOutline {
    width: 100%;
    height: 48px;
    border: none;
    box-sizing: border-box;
    inset: unset;
  }
`;
export const TitleWrapper = styled.div`
  margin-bottom: 1.25rem;
  h3 {
    font-size: 1.125rem;
  }
`;
export const ProfileSettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 2.5rem 0;
  border-top: 1px solid var(--color-medium-gray-dd);
`;
export const ProfileSettingsForm = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  > div:not(:last-child) {
    width: 100%;
    max-width: 360px;
  }
`;

export const GuideLetter = styled.p`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-bottom: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  background: var(--color-light-gray-f9);
  color: var(--color-primary-medium-77);
  word-break: keep-all;
`;

export const TextInputField = styled(TextField)<{ disabled?: boolean }>`
  width: 22.5rem;
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  white-space: pre-wrap;
  box-sizing: border-box;
  border: 1px solid var(--color-light-gray-f1);
  background: ${(props) =>
    props.disabled === true ? 'var(--color-light-gray-f7)' : 'none'};
  &.address {
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled {
      border-radius: 5px 5px 0 0;
    }
  }
  &.detailAddress {
    margin-top: 12px;
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled {
      border-radius: ${(props) =>
        props.disabled === true ? '0 0 5px 5px' : '5px'};
    }
  }
`;
export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 22.5rem;
  height: 48px;
  text-align: center;
  border-radius: 5px;
  background: var(--color-primary);
  color: var(--color-white);

  background-color: ${(props) =>
    props.disabled ? 'var(--color-medium-gray-ee)' : 'var(--color-primary)'};
  color: ${(props) => (props.disabled ? '#999' : '#fff')};
  transition: all 200ms;
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? 'var(--color-medium-gray-ee)'
        : 'var(--color-primary-medium-33)'};
  }
  &:active {
    transform: ${(props) => (props.disabled ? 'scale(1)' : 'scale(1.005)')};
  }
  @media (max-width: 480px) {
    width: 100%;
    max-width: 360px;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 22.5rem;
  height: 48px;
  text-align: center;
  border: 1px solid var(--color-medium-gray-aa);
  border-radius: 5px;
  transition: all 200ms;
  &:hover {
    background: var(--color-light-gray-f9);
  }

  &:active {
    transform: scale(1.008);
  }
  @media (max-width: 480px) {
    width: 100%;
    max-width: 360px;
  }
`;

export const DeliveryAddressButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 22.5rem;
  height: 48px;
  padding: 0 20px;
  margin-top: -1px;
  margin-bottom: 20px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #e1e1e1;
  color: #9e9e9e;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: 100%;
    /* max-width: 360px; */
  }
`;

export const AddressBoxWrapper = styled.div`
  input:last-child {
    margin-top: 20px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const PasswordResetButton = styled.button`
  width: 22.5rem;
  height: 48px;
  padding: 0 20px;
  margin-top: -1px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 0 0 5px 5px;
  border: 1px solid var(--color-medium-gray-be);
  box-sizing: border-box;
`;
