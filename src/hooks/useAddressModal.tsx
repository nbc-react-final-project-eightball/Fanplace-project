import { useDispatch } from 'react-redux';
import { closeModal, openModal } from '../redux/modules/modal/modalSlice';

export const useAddressModal = () => {
  const dispatch = useDispatch();

  const openAddressModalHandler =
    (isOpen: boolean) => (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatch(openModal(isOpen));
    };

  const closeAddressModalHandler = (isOpen: boolean) => {
    dispatch(closeModal());
  };

  return {
    openAddressModalHandler,
    closeAddressModalHandler,
  };
};
