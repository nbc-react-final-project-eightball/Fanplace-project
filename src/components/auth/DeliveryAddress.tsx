import { InputLabel } from '@mui/material';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { Controller, useForm } from 'react-hook-form';
import DaumPostcode from 'react-daum-postcode';

const DeliveryAddress = () => {
  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const completeHandler = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <DaumPostcode onComplete={completeHandler} />
      <Controller
        name="address"
        control={control}
        defaultValue={''}
        rules={{
          required: '기본 배송지를 입력해주세요',
        }}
        render={({ field, fieldState }) => (
          <div>
            <InputLabel>기본 배송지</InputLabel>
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
                placeholder: '기본 배송지를 입력해주세요',
              }}
            />
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
            />
          </div>
        )}
      />
    </>
  );
};

export default DeliveryAddress;
