import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

export interface forecastState {
  fOne: number;
  fTwo: number;
  fThree: number;
  fFour:number;
  fFive:number;
  fSix:boolean;
}

const initialForecastState: forecastState = {
  fOne: 0,
  fTwo: 0,
  fThree: 0,
  fFour:0,
  fFive:0,
  fSix:false
};

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: initialForecastState,
  reducers: {
    setfOne: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fOne>
    ) => {
      state.fOne = action.payload;
    },
    setfTwo: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fTwo>
    ) => {
      state.fTwo = action.payload;
    },
    setfThree: (
      state: Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fThree>
    ) => {
      state.fThree = action.payload;
    },
    setFFour:(
      state : Draft<typeof initialForecastState>,
      action: PayloadAction<typeof initialForecastState.fFour>
    )=>{
      state.fFour = action.payload
    }, 
    setFFive: (
      state : Draft<typeof initialForecastState>,
      action : PayloadAction<typeof initialForecastState.fFive>
    )=>{
      state.fFive = action.payload
    },
    setFSix:(
      state :Draft<typeof initialForecastState>,
      action : PayloadAction<typeof initialForecastState.fSix>
    ) =>{
      state.fSix = action.payload
    }
  },
});

export const getForecastState = (state: { forecast: forecastState }) =>
  state.forecast;

export const { setfOne,setfTwo,setfThree,setFFour,setFFive,setFSix} = forecastSlice.actions;

export default forecastSlice.reducer;
