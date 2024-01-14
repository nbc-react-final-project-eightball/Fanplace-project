import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../redux/modules/modal/modalSlice';

export const useModal = () => {
  const dispatch = useDispatch();

  const openModalHandler =
    (isOpen: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
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
