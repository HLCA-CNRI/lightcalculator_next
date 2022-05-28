import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface baselineResultState {
    bBuilding:number; 
    bCar:number; 
    bRemoteWork:number;
    bCommunity:number;
    bFlights:number;
}

const initialBaselineResults : baselineResultState = {
    bBuilding:0,
    bCar:0,
    bRemoteWork:0,
    bCommunity:0,
    bFlights:0,
}

export const baselineResultSlice = createSlice({
    name: "baselineResult",
    initialState:initialBaselineResults,
    reducers:{
        bSetBuildingResult:(
            state:Draft<typeof initialBaselineResults>,
            action: PayloadAction<typeof initialBaselineResults.bBuilding>
        ) =>{
            state.bBuilding = action.payload
        },
        bSetCarResult:(
            state:Draft<typeof initialBaselineResults>,
            action: PayloadAction<typeof initialBaselineResults.bCar>
        ) =>{
            state.bCar = action.payload
        },
        bSetRemoteWorkResult:(
            state:Draft<typeof initialBaselineResults>,
            action: PayloadAction<typeof initialBaselineResults.bRemoteWork>
        ) =>{
            state.bRemoteWork = action.payload
        },bSetCommunityResult:(
            state:Draft<typeof initialBaselineResults>,
            action: PayloadAction<typeof initialBaselineResults.bCommunity>
        ) =>{
            state.bCommunity = action.payload
        },bSetFlightResult:(
            state:Draft<typeof initialBaselineResults>,
            action: PayloadAction<typeof initialBaselineResults.bFlights>
        ) =>{
            state.bFlights = action.payload
        }
    }
})

export const  getBaselineResultState = (state:{baseline:baselineResultState}) => state.baseline


export const {
    bSetBuildingResult:bSetBuildingResult,
    bSetCarResult:bSetCarResult,
    bSetRemoteWorkResult:bSetRemoteWorkResult,
    bSetCommunityResult:bSetCommunityResult,
    bSetFlightResult:bSetFlightResult
} = baselineResultSlice.actions

export default baselineResultSlice.reducer





