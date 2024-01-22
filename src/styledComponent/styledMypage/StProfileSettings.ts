import { TextField } from '@mui/material';
import styled from 'styled-components';

export const ProfileSettingsWrapper = styled.div`
  width: 100%;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root {
    font-family: inherit;
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
  border-top: 1px solid #000;
`;
export const TextInputField = styled(TextField)``;

export const ProfileSettingsForm = styled.form`
  margin-top: 1.5rem;
`;
