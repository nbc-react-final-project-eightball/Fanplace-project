import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { goodsSlice } from './modules/GoodsList/GoodsListSlice';

const store = configureStore({
  reducer: {
    goods: goodsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export default store;
