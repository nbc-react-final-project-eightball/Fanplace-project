import { UserInfo } from '@firebase/auth';
import { InputLabel } from '@mui/material';
import DeliveryAddress from 'components/auth/DeliveryAddress';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as S from 'styledComponent/styledMypage/StProfileSettings';

interface SignUpState {
  userInfo: UserInfo;
}

const ProfileSettingsForm = () => {
  let userData = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice.userInfo,
  );
  const { displayName, phoneNumber, email } = userData;
  console.log(
    'displayName, phoneNumber, email',
    displayName,
    phoneNumber,
    email,
  );
  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    // 실시간 유효성 검사
    mode: 'onChange',
  });
  //   const [displayName, phoneNumber, email, password] = getValues([
  //     'displayName',
  //     'phoneNumber',
  //     'email',
  //     'password',
  //   ]);
  return (
    <S.ProfileSettingsForm>
      <Controller
        name="displayName"
        control={control}
        defaultValue={displayName}
        rules={{
          required: '이름을 입력해주세요',
          pattern: {
            value: /^[가-힣]+$/u,
            message: '올바른 이름을 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>이름</InputLabel>
            <S.TextInputField
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error !== undefined}
              helperText={fieldState.error && fieldState.error.message}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                // maxLength: 8,
                placeholder: '이름을 입력해주세요',
              }}
            />
          </div>
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue={phoneNumber}
        rules={{
          required: '전화번호를 입력해주세요!(숫자만)',
          pattern: {
            value: /^010[0-9]{8}$/,
            message: '올바른 전화번호를 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>전화번호</InputLabel>
            <S.TextInputField
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error !== undefined && fieldState.isDirty}
              helperText={
                fieldState.isDirty
                  ? fieldState.error && fieldState.error.message
                  : ''
              }
              InputLabelProps={{ shrink: false }}
              InputProps={{
                // maxLength: 11,
                placeholder: '01012345678',
              }}
            />
          </div>
        )}
      />
      <DeliveryAddress />
      <Controller
        name="email"
        control={control}
        defaultValue={email}
        rules={{
          required: '이메일을 입력하세요.',
          pattern: {
            value:
              /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/,
            message: '올바른 이메일 형식을 입력해주세요',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>이메일</InputLabel>
            <S.TextInputField
              value={field.value}
              onChange={field.onChange}
              error={fieldState.invalid}
              helperText={fieldState.invalid ? fieldState.error?.message : ''}
              InputLabelProps={{ shrink: false }}
              InputProps={{
                placeholder: 'fancyplace@gmail.com',
              }}
            />
          </div>
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue={''}
        rules={{
          required: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
          minLength: { value: 8, message: '최소 8자 입력해주세요.' },
          pattern: {
            value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
            message: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
          },
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>비밀번호</InputLabel>
            <S.TextInputField
              type="password"
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error !== undefined && fieldState.isDirty}
              helperText={
                fieldState.isDirty
                  ? fieldState.error && fieldState.error.message
                  : ''
              }
              InputLabelProps={{ shrink: false }}
              InputProps={{
                placeholder: '비밀번호를 입력해주세요!',
              }}
            />
          </div>
        )}
      />
    </S.ProfileSettingsForm>
  );
};

export default ProfileSettingsForm;
