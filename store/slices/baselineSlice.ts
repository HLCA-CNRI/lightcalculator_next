import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface baselineState {
  bOne: number;
  bTwo: number;
  bThree: number;
  bFour:number;
  bFive:number;
  bSix:boolean;
  // bTwo:number,
  // bThree:{
  //     bThreeOne:number,
  //     bThreeTwo:number,
  //     bThreeThree:number,
  //     bThreeFour:number
  // },
  // bFour:number
}

const initialBaselineState: baselineState = {
  bOne: 0,
  bTwo: 0,
  bThree:0,
  bFour:0,
  bFive:0,
  bSix:false,
};

export const baselineSlice = createSlice({
  name: "baseline",
  initialState: initialBaselineState,
  reducers: {
    setbOne: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bOne>
    ) => {
      state.bOne = action.payload;
    },
    setbTwo: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bTwo>
    ) => {
      state.bTwo = action.payload;
    },
    setbThree: (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bThree>
    ) => {
      state.bThree = action.payload;
    },
    setbFour : (
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bFour>
    ) =>{
      state.bFour = action.payload
    }, 
    setbFive:(
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bFive>
    ) =>{
      state.bFive = action.payload
    },
    setbSix:(
      state: Draft<typeof initialBaselineState>,
      action: PayloadAction<typeof initialBaselineState.bSix>
    ) =>{
      state.bSix = action.payload
    }
  },
});

export const getBaselineState = (state: { baseline: baselineState }) =>
  state.baseline;

export const { setbOne,setbTwo,setbThree,setbFour,setbFive ,setbSix} = baselineSlice.actions;

export default baselineSlice.reducer;
