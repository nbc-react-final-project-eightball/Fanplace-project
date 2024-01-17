import { Controller, useForm } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { useAddressModal } from 'hooks/useAddressModal';
import { useSelector } from 'react-redux';
import AddressModal from 'components/AddressModal';

interface SignUpState {
  isAddressSuccess: boolean;
  address: string;
}

interface ModalState<T> {
  visible: boolean;
  props?: T;
}

const DeliveryAddress = () => {
  // react-hook-form
  const {
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({});

  const [subAddress] = getValues(['subAddress']);

  const { address, isAddressSuccess } = useSelector(
    (state: { signUpSlice: SignUpState }) =>
      state.signUpSlice || { address: '' },
  );
  const modal = useSelector(
    (state: { modalSlice: ModalState<unknown> }) =>
      state.modalSlice || { visible: false },
  );

  const { openAddressModalHandler } = useAddressModal();

  return (
    <>
      <div>
        <InputLabel>기본 배송지</InputLabel>
        <S.FlexBox>
          {isAddressSuccess === true ? (
            <S.TextInputField value={address} />
          ) : (
            <S.DeliveryAddressButton onClick={openAddressModalHandler(true)}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#9e9e9e"
                  d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"
                />
              </svg>
              우편번호 찾기
            </S.DeliveryAddressButton>
          )}

          <Controller
            name="subAddress"
            control={control}
            defaultValue=""
            rules={{
              required: '상세 주소를 입력해주세요',
            }}
            render={({ field, fieldState }) => (
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
                  placeholder: '상세 주소 입력',
                }}
              />
            )}
          />
        </S.FlexBox>
        {modal.visible && <AddressModal subAddress={subAddress} />}
      </div>
    </>
  );
};

export default DeliveryAddress;
