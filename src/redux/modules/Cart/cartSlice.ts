// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeCart } from 'Type/TypeInterface';

interface CartState {
  selectedItems: TypeCart[];
}

const initialState: CartState = {
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedItems11: (state, action: PayloadAction<TypeCart[]>) => {
      state.selectedItems = action.payload;
    },
  },
});

export const { setSelectedItems11 } = cartSlice.actions;
export default cartSlice.reducer;
