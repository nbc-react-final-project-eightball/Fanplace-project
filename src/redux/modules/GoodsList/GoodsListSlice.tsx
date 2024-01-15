import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { typeProduct } from '../../../Type/TypeInterface'; // 상품 타입을 가져옵니다.

interface GoodsState {
  goodsList: typeProduct[];
  selectedProduct: typeProduct | null; // 선택된 상품을 저장합니다.
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
