import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 640px;
  height: auto;
  margin: 0 auto;
`;

export const LoginInput = styled.input`
  width: 320px;
  height: 40px;
  padding: 0 20px;
  border: none;
`;

export const TextInputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 320px;
    max-height: 48px;
    margin-top: 12px;
    background: #f1f1f1;
    border-radius: 5px;
    white-space: pre-wrap;
    resize: none;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border: 1px solid #efefef;
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused
    .MuiOutlinedInput-notchedOutline {
    /* border-color: #5eb470; */
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f;
  }
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline:hover {
    border: none;
  }
  .css-1wc848c-MuiFormHelperText-root.Mui-error {
    font-family: inherit;
    margin-top: 5px;
    margin-left: 0;
  }
`;

export const LoginButton = styled.button`
  width: 320px;
  height: 40px;
  text-align: center;
  border: 1px solid #aaa;
`;

export const SignUpButton = styled.button`
  width: 320px;
  margin-top: -10px;
  margin-bottom: 20px;
  text-align: center;
  color: #777;
  font-size: 15px;
`;
