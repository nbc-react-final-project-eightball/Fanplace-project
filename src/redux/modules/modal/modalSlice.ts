import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState<T> {
  visible: boolean;
  shippingModalVisible: boolean;
  props?: T;
}

const initialState: ModalState<unknown> = {
  visible: false,
  shippingModalVisible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.shippingModalVisible = true;
      state.props = action.payload;
    },
    closeModal: (state) => {
      state.shippingModalVisible = false;
      state.props = undefined;
    },
    openAddressModal: (state, action: PayloadAction<unknown>) => {
      state.visible = true;
      state.props = action.payload;
    },
    closeAddressModal: (state) => {
      state.visible = false;
      state.props = undefined;
    },
  },
});

export const { openModal, closeModal, openAddressModal, closeAddressModal } =
  modalSlice.actions;

export default modalSlice.reducer;
