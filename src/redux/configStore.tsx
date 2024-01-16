import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../redux/modules/modal/modalSlice';
import signUpSlice from '../redux/modules/signup/signUpSlice';

const store = configureStore({
  reducer: {
    // 여기에 리듀서를 넣어주세요
    modalSlice,
    signUpSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export default store;
