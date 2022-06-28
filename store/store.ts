import {configureStore} from "@reduxjs/toolkit";
import {useDispatch as useDispatchBase, useSelector as useSelectorBase} from "react-redux";
import baseline from "./slices/baselineSlice";
import forecast from "./slices/forecastSlice";
import baselineResult from "./slices/baslineResultSlice";
import forecastResult from "./slices/forecastResultSlice";

/**
 * Creates a store and includes all the slices as reducers.
 */
export const store = configureStore({
  reducer: {
    baseline,
    forecast,
    baselineResult,
    forecastResult,
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
