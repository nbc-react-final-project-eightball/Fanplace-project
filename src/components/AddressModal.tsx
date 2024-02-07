import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from 'styledComponent/styledAddressModal/StAddressModal';
import { useAddressModal } from 'hooks/useAddressModal';
import { useDispatch } from 'react-redux';
import {
  setAddress,
  setIsAddressSuccess,
} from '../redux/modules/signup/signUpSlice';
import { setAddresses } from '../redux/modules/shipping/shippingSlice';

interface AddressModalProps {
  isDefaultAddress: boolean; // 실행 여부를 결정할 프롭스
}

const AddressModal = ({ isDefaultAddress }: AddressModalProps) => {
  const { closeAddressModalHandler } = useAddressModal();
  const dispatch = useDispatch();

  const completeHandler = (data: any) => {
    if (!isDefaultAddress) {
      console.log('isDefaultAddress 아님');
      dispatch(setAddresses({ addresses: data }));

      closeAddressModalHandler(true);
    } else {
      console.log('isDefaultAddress 임');
      console.log('data.address', data.address);
      dispatch(setAddress({ address: data.address, detailAddress: null }));
      dispatch(setIsAddressSuccess(true));
      closeAddressModalHandler(true);
    }
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
