import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { typeProduct } from '../../../Type/TypeInterface';

interface GoodsState {
  goodsList: typeProduct[];
  selectedProduct: typeProduct | null; // 선택된 상품을 저장
}

const initialState: GoodsState = {
  goodsList: [], //상품목록
  selectedProduct: null, // 선택되기전 초기값임
};

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setGoodsList: (state, action: PayloadAction<typeProduct[]>) => {
      state.goodsList = action.payload;
    },
    setSelectedProduct: (state, action: PayloadAction<typeProduct>) => {
      state.selectedProduct = action.payload;
      console.log('보낸거', action.payload);
    },
  },
});

export const { setGoodsList, setSelectedProduct } = goodsSlice.actions;

export default goodsSlice.reducer;
