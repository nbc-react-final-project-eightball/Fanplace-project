import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProducToShoppingCart } from 'Type/TypeInterface';

interface ProductState {
  product: ProducToShoppingCart | null;
}

const initialState: ProductState = {
  product: null,
};

export const productSlice = createSlice({
  name: 'productDetailTotal',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProducToShoppingCart>) => {
      state.product = action.payload;
    },
  },
});

export const SelectedProduct = (state: { productDetailTotal: ProductState }) =>
  state.productDetailTotal ? state.productDetailTotal.product : null;
export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
