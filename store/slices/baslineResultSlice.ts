import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";

export interface BaselineResultState {
  bAnnual: number;
  bCalculateBuilding: number;
  bCalculateCar: number;
  bCalculteRemoteWork: number;
  bCalculateCommuting: number;
  bClaculateFlights: number;
}

const initialBaselineResults: BaselineResultState = {
  bAnnual: 0,
  bCalculateBuilding: 0,
  bCalculateCar: 0,
  bCalculteRemoteWork: 0,
  bCalculateCommuting: 0,
  bClaculateFlights: 0,
};

export const baselineResultSlice = createSlice({
  name: "baselineResult",
  initialState: initialBaselineResults,
  reducers: {
    bSetAnnualResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bAnnual>
    ) => {
      state.bAnnual = action.payload;
    },
    bSetBuildingResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bCalculateBuilding>
    ) => {
      state.bCalculateBuilding = action.payload;
    },
    bSetCarResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bCalculateCar>
    ) => {
      state.bCalculateCar = action.payload;
    },
    bSetRemoteWorkResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bCalculteRemoteWork>
    ) => {
      state.bCalculteRemoteWork = action.payload;
    },
    bSetCommutingResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bCalculateCommuting>
    ) => {
      state.bCalculateCommuting = action.payload;
    },
    bSetFlightResult: (
      state: Draft<typeof initialBaselineResults>,
      action: PayloadAction<typeof initialBaselineResults.bClaculateFlights>
    ) => {
      state.bClaculateFlights = action.payload;
    },
  },
});

export const getBaselineResultState = (state: {baselineResult: BaselineResultState}) =>
  state.baselineResult;

export const {
  bSetAnnualResult,
  bSetBuildingResult,
  bSetCarResult,
  bSetRemoteWorkResult,
  bSetCommutingResult: bSetCommunityResult,
  bSetFlightResult,
} = baselineResultSlice.actions;

export default baselineResultSlice.reducer;
