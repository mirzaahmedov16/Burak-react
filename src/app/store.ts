import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import ProductsPageReducer from "./screens/productsPage/slice";
import { logger } from "redux-logger";

// Vite ba'zan default importni { default: ... } qilib beradi
const unwrap = (m: any) => (m && m.default ? m.default : m);

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    homePage: unwrap(HomePageReducer),
    productsPage: unwrap(ProductsPageReducer),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
