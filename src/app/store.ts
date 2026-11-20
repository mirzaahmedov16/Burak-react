import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import { logger } from "redux-logger";
import ProductsPageReducer from "./screens/productsPage/slice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    homePage: HomePageReducer,
    productsPage: ProductsPageReducer,
  },
});

// the store is connected to your React application: <Provider store={store}>
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
