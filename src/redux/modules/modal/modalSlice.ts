import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState<T> {
  visible: boolean;
  props?: T;
}

const initialState: ModalState<unknown> = {
  visible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<unknown>) => {
      state.visible = true;
      state.props = action.payload;
    },
    closeModal: (state) => {
      state.visible = false;
      state.props = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
