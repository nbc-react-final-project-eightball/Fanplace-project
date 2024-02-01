import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 22.5rem;
    height: auto;
    margin-top: 12px;
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root {
    font-family: 'pretendard', san-serif;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font: unset;
    font-family: 'pretendard', san-serif;
    padding: 12.5px 14px;
    border: none;

    @media (max-width: 480px) {
      font-size: 0.9375rem;
    }
  }
  .css-1wc848c-MuiFormHelperText-root {
    font-family: 'Pretendard', sans-serif;
    margin-left: 0;
  }
  .MuiFormHelperText-root.Mui-error {
    position: absolute;
    top: 100%;
    width: 100%;
    margin-right: 0;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root {
    width: 100%;
    border: 1px solid #e1e1e1;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled
    .MuiOutlinedInput-notchedOutline {
    border-color: transparent;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled {
    -webkit-text-fill-color: var(--color-primary-medium-77);
  }
  .css-i44wyl {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  /* width: 560px; */
  width: 440px;
  height: auto;
  max-height: calc(100vh - 20px);
  padding: 40px;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  z-index: 12;
  overflow-y: auto;
  overflow-x: hidden;
  > div {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
    max-width: 640px;
    height: calc(100vh - 20px);
    max-height: 889px;
  }
  @media (max-width: 480px) {
    > div {
      width: 100%;
    }

    & #__daum__layer_1 {
      width: 100% !important;
      min-width: unset !important;
      & iframe {
        width: 100% !important;
        min-width: unset !important;
      }
      & .form_search .post_search {
        width: calc(100% - 1.5rem);
      }
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 10px;
  @media (max-width: 480px) {
  }
`;

export const ModalTitle = styled.h3`
  font-size: 20px;
  text-align: center;
`;

export const AddressInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DeliveryAddressButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 22.5rem;
  height: 48px;
  padding: 0 20px;
  margin-top: 12px;
  border-radius: 5px;
  border: 1px solid var(--color-medium-gray-be);
  color: #9e9e9e;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextInputField = styled(TextField)`
  width: 22.5rem;
  height: 48px;
  padding: 0 20px;
  margin-top: 12px;
  border: none;
  border-radius: 5px;
  white-space: pre-wrap;
  box-sizing: border-box;
  border: 1px solid var(--color-light-gray-f1);
`;

export const buttonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
  > button {
    padding: 4px 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 50%;
  height: 48px;
  text-align: center;
  border-radius: 5px;
  background: var(--color-primary);
  color: var(--color-white);
  box-sizing: border-box;

  background-color: ${(props) =>
    props.disabled ? 'var(--color-medium-gray-ee)' : 'var(--color-primary)'};
  color: ${(props) => (props.disabled ? '#999' : '#fff')};
  transition: all 200ms;
  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'var(--color-medium-gray-ee)' : '#333'};
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
  width: 50%;
  height: 48px;
  text-align: center;
  border: 1px solid var(--color-medium-gray-aa);
  border-radius: 5px;
  box-sizing: border-box;
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
