import { configureStore } from "@reduxjs/toolkit";
import React from "react";

const store = configureStore({
  reducer: {
    // 여기에 리듀서를 넣어주세요
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: true,
});
export default store;
