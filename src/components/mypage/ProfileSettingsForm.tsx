import { UserInfo } from '@firebase/auth';
import { InputLabel } from '@mui/material';
import DeliveryAddress from 'components/auth/DeliveryAddress';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as S from 'styledComponent/styledMypage/StProfileSettings';

interface SignUpState {
  userInfo: UserInfo;
  phoneNumber: string | number;
  address: string;
}

const ProfileSettingsForm = () => {
  const [detailAddress, setDetailAddress] = useState<string | null>('');
  const handleDetailAddressChange = (detailAddress: string) => {
    setDetailAddress(detailAddress);
  };
  let userData = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice,
  );
  const { userInfo, phoneNumber, address } = userData;
  console.log(
    'userData -------------- displayName, phoneNumber, email',
    userData,
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
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  return (
    <S.ProfileSettingsForm>
      <Controller
        name="displayName"
        control={control}
        defaultValue={userInfo?.displayName}
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
              disabled={!isEditMode}
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
              disabled={!isEditMode}
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
      <DeliveryAddress onAddressChange={handleDetailAddressChange} />
      <Controller
        name="email"
        control={control}
        defaultValue={userInfo?.email}
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
              disabled={!isEditMode}
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
            <InputLabel>새 비밀번호</InputLabel>
            <S.TextInputField
              disabled={!isEditMode}
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
      <Controller
        name="passwordConfirmation"
        control={control}
        defaultValue={''}
        rules={{
          required: '비밀번호 확인이 일치하지 않습니다!',
          validate: (value) =>
            value === getValues('password') ||
            '비밀번호 확인이 일치하지 않습니다!',
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>새 비밀번호 확인</InputLabel>
            <S.TextInputField
              disabled={!isEditMode}
              type="password"
              value={field.value}
              onChange={field.onChange}
              error={!!(fieldState.isDirty && fieldState.error)}
              helperText={
                fieldState.isDirty
                  ? fieldState.error && fieldState.error.message
                  : ''
              }
              InputLabelProps={{ shrink: false }}
              InputProps={{
                // maxLength: 12,
                placeholder: '비밀번호 확인을 입력해주세요',
              }}
            />
          </div>
        )}
      />
      <S.EditButton
        type="button"
        // type={isEditMode ? 'button' : 'submit'}
        onClick={() => setIsEditMode(!isEditMode)}
      >
        {isEditMode ? '수정완료' : '수정하기'}
      </S.EditButton>
      <S.CancelButton type="button">취소</S.CancelButton>
    </S.ProfileSettingsForm>
  );
};

export default ProfileSettingsForm;
