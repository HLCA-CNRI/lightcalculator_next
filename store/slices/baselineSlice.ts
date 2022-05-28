import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface baselineState {
  bCompanyEmployeeSize: number;
  bFuelType: {
    setDefault: boolean;
    gasoline: number;
    diesel: number;
    lpg: number;
    hydrogen: number;
    electric: number;
  };
  bCompanyGasPrice: number;
  bCommutingDays: number;
  bCommuting: {
    setDefault: boolean;
    distance: number;
    car: number;
    publicTransit: number;
    walkOrBike: number;
  };
  bUseRenewableEnergy: boolean;
  bCompanysize:number,
  bRoundTrip: {
    asia: number,
    europe: number,
    northAmerica: number,
    southAmerica: number,
    oceana: number,
    africa: number,
  };
}

const initialBaselineState: baselineState = {
  bCompanyEmployeeSize: 0,
  bFuelType: {
    setDefault: false,
    gasoline: 0,
    diesel: 0,
    lpg: 0,
    hydrogen: 0,
    electric: 0,
  },
  bCompanyGasPrice: 0,
  bCommutingDays: 0,
  bCommuting: {
    setDefault: false,
    distance: 0,
    car: 0,
    publicTransit: 0,
    walkOrBike: 0,
    
  },
  bUseRenewableEnergy: false,
  bCompanysize:0,
  bRoundTrip: {
    asia: 0,
    europe: 0,
    northAmerica: 0,
    southAmerica: 0,
    oceana: 0,
    africa: 0,
  },
};

export const baselineSlice = createSlice({
  name: "baseline",
  initialState: initialBaselineState,
  reducers: {
    bSetCompanyEmployeeSize: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCompanyEmployeeSize>
    ) => {
      console.log(action);
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
    bSetCommuntingDays: (
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
      console.log(state.bUseRenewableEnergy);
      state.bUseRenewableEnergy = action.payload;
    },
    bSetCompanySize: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bCompanysize>
    ) => {
      console.log(action);
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
  bSetCommuntingDays: bSetCommuntingDays,
  bSetCommuting: bSetCommuting,
  bSetUseRenewableEnergy: bSetUseRenewableEnergy,
  bSetRoundTrip: bSetRoundTrip,
  bSetCompanySize:bSetCompanySize
} = baselineSlice.actions;

// export const { bSetCompanySize: bSetCompanySize,bSetCompanyCarCount: bSetCompanyCarCount,bSetFuelType: setbThree,bSetCompanyGasPrice: setbFour,bSetCommuntingDays: setbFive ,bSetCommuting: setbSeven} = baselineSlice.actions;

export default baselineSlice.reducer;
