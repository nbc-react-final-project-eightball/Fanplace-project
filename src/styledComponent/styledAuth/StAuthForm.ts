import styled from 'styled-components';

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
  border: unset;
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
