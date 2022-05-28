import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface forecastState {
  fCompanyEmployeeSize: number;
  fFuelType: {
    setDefault: boolean;
    gasoline: number;
    diesel: number;
    lpg: number;
    hydrogen: number;
    electric: number;
  };
  fCompanyGasPrice: number;
  fCommutingDays: number;
  fCommuting: {
    setDefault: boolean;
    distance: number;
    car: number;
    publicTransit: number;
    walkOrBike: number;
  };
  fUseRenewableEnergy: boolean;
  fCompanysize:number,
  fRoundTrip: {
    asia: number,
    europe: number,
    northAmerica: number,
    southAmerica: number,
    oceana: number,
    africa: number,
  };
}

const initialForecastState: forecastState = {
  fCompanyEmployeeSize: 0,
  fFuelType: {
    setDefault: false,
    gasoline: 0,
    diesel: 0,
    lpg: 0,
    hydrogen: 0,
    electric: 0,
  },
  fCompanyGasPrice: 0,
  fCommutingDays: 0,
  fCommuting: {
    setDefault: false,
    distance: 0,
    car: 0,
    publicTransit: 0,
    walkOrBike: 0,
    
  },
  fUseRenewableEnergy: false,
  fCompanysize:0,
  fRoundTrip: {
    asia: 0,
    europe: 0,
    northAmerica: 0,
    southAmerica: 0,
    oceana: 0,
    africa: 0,
  },
};

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
    fSetCommuntingDays: (
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
  fSetCommuntingDays: fSetCommuntingDays,
  fSetCommuting: fSetCommuting,
  fSetUseRenewableEnergy: fSetUseRenewableEnergy,
  fSetRoundTrip: fSetRoundTrip,
  fSetCompanySize:fSetCompanySize
} = forecastSlice.actions;


export default forecastSlice.reducer;
