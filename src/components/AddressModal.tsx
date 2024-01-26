import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from 'styledComponent/styledAddressModal/StAddressModal';
import { useAddressModal } from 'hooks/useAddressModal';
import { useDispatch } from 'react-redux';
import {
  setAddress,
  setIsAddressSuccess,
} from '../redux/modules/signup/signUpSlice';

interface AddressModalProps {
  detailAddress: string;
}

const AddressModal: React.FC<AddressModalProps> = ({ detailAddress }) => {
  const { closeAddressModalHandler } = useAddressModal();
  const dispatch = useDispatch();

  console.log('detailAddress', detailAddress);

  const completeHandler = (data: any) => {
    console.log('data.address', data.address);
    dispatch(
      setAddress({ address: data.address, detailAddress: detailAddress }),
    );
    dispatch(setIsAddressSuccess({ isAddressSuccess: true }));
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
