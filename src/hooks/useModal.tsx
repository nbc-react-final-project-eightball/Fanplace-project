import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../redux/modules/modal/modalSlice';

export const useModal = () => {
  const dispatch = useDispatch();

  const openModalHandler = (isOpen: boolean) => {
    console.log('openModalHandler 동작');
    dispatch(openModal(isOpen));
  };

  const closeModalHandler = (isOpen: boolean) => {
    dispatch(closeModal());
  };

  return {
    openModalHandler,
    closeModalHandler,
  };
};
