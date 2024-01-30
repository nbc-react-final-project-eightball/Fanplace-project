import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface LoginButtonProps {
  width?: string;
}

export const AuthFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.5rem;
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
    max-width: 22.5rem;
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
      width: calc(100% - 1.5rem);
      max-width: 22.5rem;
    }
  }
  .css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
    width: 100%;
    align-items: center;
  }
  .css-i44wyl {
    width: 100%;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled {
    -webkit-text-fill-color: #777;
  }
`;
export const AuthFormTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  p {
    margin-top: 1rem;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: #aaa;
  }
  @media (max-width: 480px) {
    p {
      font-size: 0.875rem;
    }
  }
`;

export const MobileBr = styled.br`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

export const LoginInput = styled.input`
  width: 22.5rem;
  height: 40px;
  padding: 0 20px;
  border: none;
`;

export const TextInputField = styled(TextField)`
  & .MuiOutlinedInput-root {
    width: 22.5rem;
    max-height: 48px;
    margin-top: 12px;
    border-radius: 5px;
    white-space: pre-wrap;
    resize: none;
    &:hover {
      border-color: #999;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
    input {
      height: 48px;
      box-sizing: border-box;
    }
  }
  .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error
    .MuiOutlinedInput-notchedOutline {
    border-color: #d32f2f;
  }
  .css-1wc848c-MuiFormHelperText-root.Mui-error {
    font-family: inherit;
    margin-top: 5px;
    margin-left: 0;
  }
  .css-1x5jdmq {
    font: unset;
    font-family: 'pretendard', sans-serif;
  }
  .css-1x5jdmq:-webkit-autofill {
    height: 48px;
    box-sizing: border-box;
  }
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    font: unset;
    font-family: 'pretendard', san-serif;
    padding: 12.5px 14px;
    border: none;
    color: #777;

    @media (max-width: 480px) {
      font-size: 0.9375rem;
    }
  }
  .MuiFormHelperText-root.Mui-error {
    position: absolute;
    top: 100%;
    width: 100%;
    margin-right: 0;
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
  width: 22.5rem;
  height: 48px;
  text-align: center;
  border: 1px solid #dbdbde;
  border-radius: 5px;
  background: ${(props) => props.color || 'none'};
  color: ${(props) => (props.color ? '#ffffff' : '')};
  transition: all 200ms;
  &.googleLogin:hover {
    background: #f9f9f9;
  }
  &.githubLogin:hover {
    background: #444;
  }
  &.login {
    margin-top: 1rem;
    border: 1px solid #8f86ff;
    color: #8f86ff;
    &:hover {
      background: #f2f1ff;
    }
  }
  &:active {
    transform: scale(1.008);
  }
  @media (max-width: 480px) {
    max-width: 318px;
    width: calc(100% - 1.5rem);
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
  width: 22.5rem;
  height: 48px;
  margin-top: -0.5rem;
  text-align: center;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#eee' : '#000')};
  color: ${(props) => (props.disabled ? '#999' : '#fff')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: all 200ms;
  &:hover {
    background-color: ${(props) => (props.disabled ? '#eee' : '#333')};
  }
  &:active {
    transform: ${(props) => (props.disabled ? 'scale(1)' : 'scale(1.005)')};
  }
  @media (max-width: 480px) {
    max-width: 318px;
    width: calc(100% - 1.5rem);
  }
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
  max-width: 22.5rem;
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
  width: 22.5rem;
  height: 48px;
  margin-top: 12px;
  padding: 0 20px;
  font-weight: 300;
  border-radius: 5px;
  border: 1px solid #bebebe;
  /* background-color: #f7f7f7; */
  color: #c9c9c9;
  box-sizing: border-box;
  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9375rem;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
