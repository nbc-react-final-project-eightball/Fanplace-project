import { Controller, useForm } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { useModal } from 'hooks/useModal';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import modalSlice from '../../redux/modules/modal/modalSlice';

interface ModalState<T> {
  visible: boolean;
  props?: T;
}

const DeliveryAddress = () => {
  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({});

  const modal = useSelector(
    (state: { modalSlice: ModalState<unknown> }) => state.modalSlice,
  );

  const { openModalHandler } = useModal();

  return (
    <>
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
            <S.FlexBox>
              <S.DeliveryAddressButton onClick={openModalHandler(true)}>
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
            </S.FlexBox>
            {modal.visible && <Modal />}
          </div>
        )}
      />
    </>
  );
};

export default DeliveryAddress;
