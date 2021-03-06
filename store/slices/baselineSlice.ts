import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {defaultBaseline, BaselineState} from "../../functions/Defaults";

const initialBaselineState: BaselineState = defaultBaseline;

export const baselineSlice = createSlice({
  name: "baseline",
  initialState: initialBaselineState,
  reducers: {
    bSetCompanyEmployeeSize: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCompanyEmployeeSize>
    ) => {
      state.bCompanyEmployeeSize = action.payload;
    },
    bSetFuelType: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bFuelType>
    ) => {
      state.bFuelType = action.payload;
    },
    bSetCompanyGasPrice: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCompanyGasPrice>
    ) => {
      state.bCompanyGasPrice = action.payload;
    },
    bSetCommutingDays: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCommutingDays>
    ) => {
      state.bCommutingDays = action.payload;
    },
    bSetCommuting: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCommuting>
    ) => {
      state.bCommuting = action.payload;
    },
    bSetUseRenewableEnergy: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bUseRenewableEnergy>
    ) => {
      state.bUseRenewableEnergy = action.payload;
    },
    bSetCompanySize: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCompanysize>
    ) => {
      state.bCompanysize = action.payload;
    },
    bSetRoundTrip: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bRoundTrip>
    ) => {
      state.bRoundTrip = action.payload;
    },
    bSetDefault: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bDefault>
    ) => {
      state.bDefault = action.payload;
    },
  },
});

export const getBaselineState = (state: {baseline: BaselineState}) => state.baseline;

export const {
  bSetCompanyEmployeeSize,
  bSetFuelType,
  bSetCompanyGasPrice,
  bSetCommutingDays,
  bSetCommuting,
  bSetUseRenewableEnergy,
  bSetRoundTrip,
  bSetCompanySize,
  bSetDefault,
} = baselineSlice.actions;

// export const { bSetCompanySize: bSetCompanySize,bSetCompanyCarCount: bSetCompanyCarCount,bSetFuelType: setbThree,bSetCompanyGasPrice: setbFour,bSetCommuntingDays: setbFive ,bSetCommuting: setbSeven} = baselineSlice.actions;

export default baselineSlice.reducer;
