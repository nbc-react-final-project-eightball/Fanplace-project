import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface LoginButtonProps {
  width?: string;
}

export const AuthFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 640px;
  height: 100%;
  padding: 80px 0;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.015);
  @media (max-width: 768px) {
    width: calc(100% - 2.5rem);
    max-width: 640px;
    /* margin: 0 1.5rem; */
  }
  @media (max-width: 480px) {
    border-radius: 8px;
  }
`;
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 640px;
  height: auto;
  margin: 0 auto;
  .css-9npbnl-MuiFormLabel-root-MuiInputLabel-root {
    font-family: 'pretendard', san-serif;
  }

  @media (max-width: 480px) {
    width: calc(100% - 1.5rem);
    & > div {
      width: calc(100% - 2.5rem);
      max-width: 320px;
    }
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
    align-items: center;
  }
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
    /* background: #f5f5f5; */
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    white-space: pre-wrap;
    resize: none;

    @media (max-width: 480px) {
      width: 100%;
    }
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
  .css-1x5jdmq:-webkit-autofill {
    height: 100%;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font: unset;
    font-family: 'pretendard', san-serif;
    padding: 12.5px 14px;
  }
  .MuiFormHelperText-root.Mui-error {
    position: absolute;
    top: 100%;
  }
`;

export const SignUpFormInner = styled.div`
  > * {
    margin-bottom: 2rem;
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
  border: 1px solid #dbdbde;
  border-radius: 5px;
  background: ${(props) => props.color || 'none'};
  color: ${(props) => (props.color ? '#ffffff' : '')};
  &.login {
    margin-top: 1rem;
    border: 1px solid #8f86ff;
    color: #8f86ff;
    transition: all 200ms;
    &:hover {
      background: #8f86ff;
      color: #fff;
    }
  }
  @media (max-width: 480px) {
    max-width: 318px;
    width: calc(100% - 2.5rem);
  }
  img {
    width: ${(props) => props.width || 'auto'};
  }
`;

export const SignUpButton = styled.button<LoginButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 320px;
  height: 48px;
  margin-top: -0.5rem;
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.disabled ? 'none' : '#333')};
  background-color: ${(props) => (props.disabled ? '#eee' : 'none')};
  color: ${(props) => (props.disabled ? '#999' : '#111')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const GuideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 0 1rem 0;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
export const GuideP = styled.p`
  color: #aaa;
  font-size: 15px;
`;

export const GuideButton = styled.button`
  text-align: center;
  color: #555;
  font-size: 15px;
  text-decoration: underline;
`;

export const SeparatorLine = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  margin-bottom: 0.625rem;
  color: #bbb;
  font-size: 14px;
  text-align: center;
  &::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: calc(50% - 20px);
    height: 1px;
    background: #ddd;
  }
  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    content: '';
    display: block;
    width: calc(50% - 20px);
    height: 1px;
    background: #ddd;
  }
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
  background: #f5f5f5;
  color: #9e9e9e;
  box-sizing: border-box;
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
