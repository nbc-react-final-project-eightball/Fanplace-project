import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from 'styledComponent/styledModal/StModal';
import { useModal } from 'hooks/useModal';
import { useDispatch } from 'react-redux';
import { setSignUpData } from '../redux/modules/signup/signUpSlice';

const Modal = () => {
  const { closeModalHandler } = useModal();

  const dispatch = useDispatch();

  const completeHandler = (data: any) => {
    console.log(data);
    dispatch(setSignUpData(data.adress));
    closeModalHandler(true);
  };

  return (
    <S.ModalBackground  onClick={() => closeModalHandler(true)}>
      <S.ModalContainer>
        <DaumPostcode onComplete={completeHandler} />
      </S.ModalContainer>
    </S.ModalBackground>
  );
};

export default Modal;
