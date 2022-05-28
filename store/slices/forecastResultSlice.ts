import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface forecastResultState {
    fBuilding:number; 
    fCar:number; 
    fRemoteWork:number;
    fCommunity:number;
    fFlights:number;
}

const initialForecastResults : forecastResultState = {
    fBuilding:0,
    fCar:0,
    fRemoteWork:0,
    fCommunity:0,
    fFlights:0,
}

export const forecastResultSlice = createSlice({
    name: "forecastResult",
    initialState:initialForecastResults,
    reducers:{
        fSetBuildingResult:(
            state:Draft<typeof initialForecastResults>,
            action: PayloadAction<typeof initialForecastResults.fBuilding>
        ) =>{
            state.fBuilding = action.payload
        },
        fSetCarResult:(
            state:Draft<typeof initialForecastResults>,
            action: PayloadAction<typeof initialForecastResults.fCar>
        ) =>{
            state.fCar = action.payload
        },
        fSetRemoteWorkResult:(
            state:Draft<typeof initialForecastResults>,
            action: PayloadAction<typeof initialForecastResults.fRemoteWork>
        ) =>{
            state.fRemoteWork = action.payload
        },fSetCommunityResult:(
            state:Draft<typeof initialForecastResults>,
            action: PayloadAction<typeof initialForecastResults.fCommunity>
        ) =>{
            state.fCommunity = action.payload
        },fSetFlightResult:(
            state:Draft<typeof initialForecastResults>,
            action: PayloadAction<typeof initialForecastResults.fFlights>
        ) =>{
            state.fFlights = action.payload
        }
    }
})

export const  getForecastResultState = (state:{forecast:forecastResultState}) => state.forecast


export const {
    fSetBuildingResult:fSetBuildingResult,
    fSetCarResult:fSetCarResult,
    fSetRemoteWorkResult:fSetRemoteWorkResult,
    fSetCommunityResult:fSetCommunityResult,
    fSetFlightResult:fSetFlightResult
} = forecastResultSlice.actions

export default forecastResultSlice.reducer








