import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from 'styledComponent/styledAddressModal/StAddressModal';
import { useAddressModal } from 'hooks/useAddressModal';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/modules/signup/signUpSlice';

const AddressModal = () => {
  const { closeAddressModalHandler } = useAddressModal();

  const dispatch = useDispatch();

  const completeHandler = (data: any) => {
    console.log('data.address', data.address);
    dispatch(addAddress({ address: data.address, isAddressSuccess: true }));
    closeAddressModalHandler(true);
  };

  return (
    <S.ModalBackground onClick={() => closeAddressModalHandler(true)}>
      <S.ModalContainer>
        <DaumPostcode onComplete={completeHandler} />
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default AddressModal;
