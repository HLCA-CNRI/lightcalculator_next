import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { defaultBaseline,baselineState } from "../../functions/Defaults";


const initialBaselineState: baselineState = defaultBaseline

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
  },
});

export const getBaselineState = (state: { baseline: baselineState }) =>
  state.baseline;

export const {
  bSetCompanyEmployeeSize: bSetCompanyEmployeeSize,
  bSetFuelType: bSetFuelType,
  bSetCompanyGasPrice: bSetCompanyGasPrice,
  bSetCommutingDays: bSetCommutingDays,
  bSetCommuting: bSetCommuting,
  bSetUseRenewableEnergy: bSetUseRenewableEnergy,
  bSetRoundTrip: bSetRoundTrip,
  bSetCompanySize:bSetCompanySize
} = baselineSlice.actions;

// export const { bSetCompanySize: bSetCompanySize,bSetCompanyCarCount: bSetCompanyCarCount,bSetFuelType: setbThree,bSetCompanyGasPrice: setbFour,bSetCommuntingDays: setbFive ,bSetCommuting: setbSeven} = baselineSlice.actions;

export default baselineSlice.reducer;
