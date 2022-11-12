import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import PageSlice from "../slice/PageSlice";
import PortfolioSlice from "../slice/PortfolioSlice";

export const store = configureStore({
  reducer: {
    page: PageSlice,
    portfolio: PortfolioSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
