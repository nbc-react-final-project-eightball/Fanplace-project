import { useDispatch } from 'react-redux';
import {
  closeAddressModal,
  openAddressModal,
} from '../redux/modules/modal/modalSlice';

export const useAddressModal = () => {
  const dispatch = useDispatch();

  const openAddressModalHandler = (isOpen: boolean) => {
    console.log('openAddressModalHandler 동작');
    dispatch(openAddressModal(isOpen));
  };

  const closeAddressModalHandler = (isOpen: boolean) => {
    dispatch(closeAddressModal());
  };

  return {
    openAddressModalHandler,
    closeAddressModalHandler,
  };
};
