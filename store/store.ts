import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import baselineSlice from "./slices/baselineSlice";
import forecastSlice from "./slices/forecastSlice";
import baselineResultSlice from "./slices/baslineResultSlice";
import forecastResultSlice from "./slices/forecastResultSlice";

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: {
    baseline: baselineSlice,
    forecast: forecastSlice,
    baselineResult: baselineResultSlice,
    forecastResult: forecastResultSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  // eslint-disable-next-line no-unused-vars
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);
