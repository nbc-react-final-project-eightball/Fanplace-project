import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { typeProduct } from '../../../Type/TypeInterface';
import { set } from 'react-hook-form';

interface GoodsState {
  goodsList: typeProduct[];
  selectedProduct: typeProduct | null; // 선택된 상품을 저장
  currentPage: number;
  lastDoc: string | null;
  filter: string | null;
}

const initialState: GoodsState = {
  goodsList: [], //상품목록
  selectedProduct: null, // 선택되기전 초기값임
  currentPage: 1,
  lastDoc: null,
  filter: null,
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
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLastDoc: (state, action: PayloadAction<string | null>) => {
      state.lastDoc = action.payload;
    },
    setFilterR: (state, action: PayloadAction<string | null>) => {
      state.filter = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  setGoodsList,
  setSelectedProduct,
  setCurrentPage,
  setLastDoc,
  setFilterR,
  setPage,
} = goodsSlice.actions;

export default goodsSlice.reducer;
