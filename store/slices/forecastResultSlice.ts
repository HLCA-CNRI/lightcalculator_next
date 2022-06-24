import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface forecastResultState {
  fAnnual: number;
  fCalculateBuilding: number;
  fCalculateCar: number;
  fCalculateRemoteWork: number;
  fCalculateCommuting: number;
  fCalculateFlights: number;
}

const initialForecastResults: forecastResultState = {
  fAnnual: 0,
  fCalculateBuilding: 0,
  fCalculateCar: 0,
  fCalculateRemoteWork: 0,
  fCalculateCommuting: 0,
  fCalculateFlights: 0,
};

export const forecastResultSlice = createSlice({
  name: "forecastResult",
  initialState: initialForecastResults,
  reducers: {
    fSetAnnualResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fAnnual>
    ) => {
      state.fAnnual = action.payload;
    },
    fSetBuildingResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fCalculateBuilding>
    ) => {
      state.fCalculateBuilding = action.payload;
    },
    fSetCarResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fCalculateCar>
    ) => {
      state.fCalculateCar = action.payload;
    },
    fSetRemoteWorkResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fCalculateRemoteWork>
    ) => {
      state.fCalculateRemoteWork = action.payload;
    },
    fsetCommutingResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fCalculateCommuting>
    ) => {
      state.fCalculateCommuting = action.payload;
    },
    fSetFlightResult: (
      state: Draft<typeof initialForecastResults>,
      action: PayloadAction<typeof initialForecastResults.fCalculateFlights>
    ) => {
      state.fCalculateFlights = action.payload;
    },
  },
});

export const getForecastResultState = (state: {
  forecastResult: forecastResultState;
}) => state.forecastResult;

export const {
  fSetAnnualResult,
  fSetBuildingResult,
  fSetCarResult,
  fSetRemoteWorkResult,
  fsetCommutingResult: fSetCommunityResult,
  fSetFlightResult,
} = forecastResultSlice.actions;

export default forecastResultSlice.reducer;
