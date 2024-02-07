import { useAddressModal } from 'hooks/useAddressModal';
import { useModal } from 'hooks/useModal';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as S from 'styledComponent/styledMypage/StShippingModal';
import { Controller, useForm } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import AddressModal from 'components/AddressModal';
import { useSetAddresses } from 'hooks/useSetAddresses';
import { UserInfo } from '@firebase/auth';
import { setIsAddressSuccess } from '../../redux/modules/signup/signUpSlice';
import { shippingSlice } from './../../redux/modules/shipping/shippingSlice';
import { RootState } from 'redux/configStore';
import DeliveryAddresses from 'components/auth/DeliveryAddresses';

interface SignUpState {
  userInfo: UserInfo;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  isAddressSuccess: boolean;
}

const ShippingRegisterModal = () => {
  const { setAddresses } = useSetAddresses();
  const { openAddressModalHandler } = useAddressModal();
  const { closeModalHandler } = useModal();

  const userData = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice,
  );

  const userAddresses = useSelector(
    (state: RootState) => state.shippingSlice,
    shallowEqual,
  );

  console.log('userAddresses 불러오는 중', userAddresses);

  interface DeliveryAddressProps {
    onAddressChange: (address: string) => void;
  }

  interface ModalState {
    visible: boolean;
  }

  interface shippingState {}

  const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
    onAddressChange,
  }) => {
    const {
      control,
      getValues,
      reset,
      formState: { errors },
    } = useForm({ mode: 'onChange' });

    const [addressName, recipient, detailAddress, phoneNumber] = getValues([
      'addressName',
      'recipient',
      'detailAddress',
      'phoneNumber',
    ]);

    const setAddressesHandler = () => {
      setAddresses(
        addressName,
        recipient,
        userData.address,
        detailAddress,
        phoneNumber,
      );
      reset();
    };

    const blurHandler = () => {
      onAddressChange(detailAddress);
    };

    const modalClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
    };

    const dispatch = useDispatch();

    const closeModal = () => {
      closeModalHandler(true);
      dispatch(setIsAddressSuccess(false));
    };

    const modal = useSelector(
      (state: { modalSlice: ModalState }) => state.modalSlice,
    );

    return (
      <S.ModalBackground>
        <S.ModalContainer onClick={modalClickHandler}>
          <S.CloseButton onClick={closeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_41_1369)">
                <path
                  d="M19 1L1 19M1 1L19 19"
                  stroke="#999999"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_41_1369">
                  <rect width="20" height="20" fill="var(--color-white)" />
                </clipPath>
              </defs>
            </svg>
          </S.CloseButton>
          <S.ModalTitle>배송지 추가하기</S.ModalTitle>
          {/* Controller 및 입력 필드 코드들 */}
          {userData.isAddressSuccess === true ? (
            <S.AddressInputWrapper>
              <InputLabel>주소</InputLabel>
              <S.DeliveryAddressButton
                onClick={() => openAddressModalHandler(true)}
              >
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
              <Controller
                name="address"
                control={control}
                defaultValue={''}
                rules={{
                  required: '주소를 입력해주세요',
                }}
                render={({ field, fieldState }) => (
                  <div>
                    <S.TextInputField
                      className="address"
                      value={userAddresses.address}
                      // Redux 스토어에서 가져온 주소 값
                      // onChange={field.onChange}
                      disabled={true}
                    />
                  </div>
                )}
              />
              <Controller
                name="detailAddress"
                control={control}
                defaultValue=""
                rules={{
                  required: '상세 주소를 입력해주세요',
                }}
                render={({ field, fieldState }) => (
                  <S.TextInputField
                    {...field} // field 객체의 내용을 spread하여 입력 필드와 연결
                    onBlur={blurHandler}
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
            </S.AddressInputWrapper>
          ) : (
            <S.AddressInputWrapper>
              <InputLabel>주소</InputLabel>
              <S.DeliveryAddressButton
                onClick={() => openAddressModalHandler(true)}
              >
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
              <Controller
                name="detailAddress"
                control={control}
                defaultValue=""
                rules={{
                  required: '상세 주소를 입력해주세요',
                }}
                render={({ field, fieldState }) => (
                  <S.TextInputField
                    {...field} // field 객체의 내용을 spread하여 입력 필드와 연결
                    onBlur={blurHandler}
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
            </S.AddressInputWrapper>
          )}
          <Controller
            name="addressName"
            control={control}
            defaultValue={'배송지'}
            rules={{
              required: '배송지명을 입력해주세요',
              pattern: {
                value: /^[가-힣0-9]*[^\s]+[가-힣\s0-9]*$/,
                message: '올바른 배송지명을 입력해주세요',
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputLabel>배송지명</InputLabel>
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 8,
                    placeholder: '배송지명을 입력해주세요',
                  }}
                />
              </div>
            )}
          />
          <Controller
            name="recipient"
            control={control}
            defaultValue={''}
            rules={{
              required: '이름을 입력해주세요',
              pattern: {
                value: /^[가-힣]+$/u,
                message: '올바른 이름을 입력해주세요',
              },
            }}
            render={({ field, fieldState }) => (
              <div>
                <InputLabel>받는 분</InputLabel>
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
            defaultValue={''}
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
                    placeholder: '01012345678',
                  }}
                />
              </div>
            )}
          />
          {/* <Controller
            name="instructions"
            control={control}
            defaultValue={''}
            render={({ field, fieldState }) => (
              <div>
                <InputLabel>배송 요청사항</InputLabel>
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
                    placeholder: '배송 요청사항(선택)',
                  }}
                />
              </div>
            )}
          /> */}
          <S.buttonWrapper>
            <S.CancelButton onClick={closeModal}>취소하기</S.CancelButton>
            <S.EditButton onClick={setAddressesHandler}>저장하기</S.EditButton>
          </S.buttonWrapper>
        </S.ModalContainer>
        {modal.visible && <AddressModal isDefaultAddress={false} />}
      </S.ModalBackground>
    );
  };

  return <DeliveryAddress onAddressChange={(address) => {}} />;
};

export default ShippingRegisterModal;
