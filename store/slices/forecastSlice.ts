import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { forecastState,DefualtForecast } from "../../functions/Defaults";

const initialForecastState: forecastState = DefualtForecast

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialForecastState,
  reducers: {
    fSetCompanyEmployeeSize: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fCompanyEmployeeSize>
    ) => {
      state.fCompanyEmployeeSize = action.payload;
    },
    fSetFuelType: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fFuelType>
    ) => {
      state.fFuelType = action.payload;
    },
    fSetCompanyGasPrice: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fCompanyGasPrice>
    ) => {
      state.fCompanyGasPrice = action.payload;
    },
    fSetCommutingDays: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fCommutingDays>
    ) => {
      state.fCommutingDays = action.payload;
    },
    fSetCommuting: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fCommuting>
    ) => {
      state.fCommuting = action.payload;
    },
    fSetUseRenewableEnergy: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fUseRenewableEnergy>
    ) => {
      console.log(state.fUseRenewableEnergy);
      state.fUseRenewableEnergy = action.payload;
    },
    fSetCompanySize: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fCompanysize>
    ) => {
      console.log(action);
      state.fCompanysize = action.payload;
    },
    fSetRoundTrip: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fRoundTrip>
    ) => {
      state.fRoundTrip = action.payload;
    },
  },
});

export const getForecastState = (state: { forecast: forecastState }) =>
  state.forecast;

export const {
  fSetCompanyEmployeeSize: fSetCompanyEmployeeSize,
  fSetFuelType: fSetFuelType,
  fSetCompanyGasPrice: fSetCompanyGasPrice,
  fSetCommutingDays: fSetCommuntingDays,
  fSetCommuting: fSetCommuting,
  fSetUseRenewableEnergy: fSetUseRenewableEnergy,
  fSetRoundTrip: fSetRoundTrip,
  fSetCompanySize:fSetCompanySize
} = forecastSlice.actions;


export default forecastSlice.reducer;
