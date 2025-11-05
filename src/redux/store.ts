import { configureStore } from "@reduxjs/toolkit";
import { weatherSliceReducer } from "./slices/weatherSlice";
import { weatherApi2_5v, weatherApi3_0v } from "./weatherApi";

export const store = configureStore({
  reducer: {
    weatherSliceReducer,
    [weatherApi2_5v.reducerPath]: weatherApi2_5v.reducer,
    [weatherApi3_0v.reducerPath]: weatherApi3_0v.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(weatherApi2_5v.middleware)
      .concat(weatherApi3_0v.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
