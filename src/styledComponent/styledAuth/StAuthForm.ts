import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface LoginButtonProps {
  width?: string;
}

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 640px;
  height: auto;
  margin: 0 auto;
`;
export const AuthFormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
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

export const LoginButton = styled.button<LoginButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 320px;
  height: 48px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 5px;
  background: ${(props) => props.color || 'none'};
  color: ${(props) => (props.color ? '#ffffff' : '')};
  img {
    width: ${(props) => props.width || 'auto'};
  }
`;

export const SignUpButton = styled.button`
  width: 320px;
  margin-top: -10px;
  margin-bottom: 20px;
  text-align: center;
  color: #777;
  font-size: 15px;
`;

export const DeliveryAddressButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 320px;
  height: 48px;
  margin-top: 12px;
  padding: 0 20px;
  border-radius: 5px;
  background: #f1f1f1;
  color: #9e9e9e;
  box-sizing: border-box;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
