import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from 'styledComponent/styledAddressModal/StAddressModal';
import { useAddressModal } from 'hooks/useAddressModal';
import { useDispatch } from 'react-redux';
import { setAddress } from '../redux/modules/signup/signUpSlice';

interface AddressModalProps {
  subAddress: any;
}

const AddressModal: React.FC<AddressModalProps> = ({ subAddress }) => {
  const { closeAddressModalHandler } = useAddressModal();
  const dispatch = useDispatch();

  console.log('subAddress', subAddress);

  const completeHandler = (data: any) => {
    console.log('data.address', data.address);
    dispatch(setAddress({ address: data.address, isAddressSuccess: true }));
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
