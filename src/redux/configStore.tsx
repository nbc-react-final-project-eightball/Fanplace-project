import { configureStore } from '@reduxjs/toolkit';
import { goodsSlice } from './modules/GoodsList/GoodsListSlice';
import { productSlice } from './modules/Detail/DetailSlice';
import { modalSlice } from './modules/modal/modalSlice';
import { signUpSlice } from './modules/signup/signUpSlice';
import { shippingSlice } from './modules/shipping/shippingSlice';
import { darkModeSlice } from './modules/darkMode/DarkModeSlice';
import orderListSlice from './modules/orderList/orderListSlice';

const store = configureStore({
  reducer: {
    goods: goodsSlice.reducer,
    productDetailTotal: productSlice.reducer,
    modalSlice: modalSlice.reducer,
    signUpSlice: signUpSlice.reducer,
    shippingSlice: shippingSlice.reducer,
    darkModeSlice: darkModeSlice.reducer,
    orderListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: true,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
