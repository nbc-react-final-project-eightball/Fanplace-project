import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ProfileSettingsWrapper = styled.div`
  width: 100%;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root {
    font-family: inherit;
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 320px;
    height: auto;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font: unset;
    font-family: 'pretendard', san-serif;
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
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0;
  border-top: 1px solid #ddd;
`;
export const ProfileSettingsForm = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TextInputField = styled(TextField)<{ disabled?: boolean }>`
  width: 320px;
  height: 48px;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  white-space: pre-wrap;
  box-sizing: border-box;
  background: ${(props) => (props.disabled === true ? '#f1f1f1' : 'none')};
  &.address {
    .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled {
      border-radius: 5px 5px 0 0;
    }
  }
  &.detailAddress {
    margin-top: -1px;
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
  width: 320px;
  height: 48px;
  text-align: center;
  border-radius: 5px;
  background: #000;
  color: #fff;
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 320px;
  height: 48px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 5px;
`;

export const DeliveryAddressButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 320px;
  height: 48px;
  padding: 0 20px;
  margin-top: -1px;
  margin-bottom: 20px;
  border-radius: 0 0 5px 5px;
  border: 1px solid #bebebe;
  color: #9e9e9e;
  box-sizing: border-box;
`;

export const AddressBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  input:last-child {
    margin-top: 20px;
  }
`;
export const PasswordResetButton = styled.button`
  width: 320px;
  height: 48px;
  padding: 0 20px;
  margin-top: -1px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 0 0 5px 5px;
  border: 1px solid #bebebe;
  box-sizing: border-box;
`;
