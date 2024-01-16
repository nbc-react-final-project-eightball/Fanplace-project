import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { goodsSlice } from './modules/GoodsList/GoodsListSlice';
import { productSlice } from './modules/Detail/DetailSlice';
const store = configureStore({
  reducer: {
    goods: goodsSlice.reducer,
    productDetailTotal: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
