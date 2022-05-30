import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {bSetRoundTrip, getBaselineState} from "../../../store/slices/baselineSlice"
import {fSetRoundTrip, getForecastState} from "../../../store/slices/forecastSlice"
import {bSetFlightResult} from "../../../store/slices/baslineResultSlice"
import {fSetFlightResult} from "../../../store/slices/forecastResultSlice"
import {useSelector} from "react-redux"
import {calculateFlight} from "../../../functions/ResultFunctions"

type FlightResultType = {
  type: string;
};

const FlightResult = ({type}: FlightResultType) => {
  const {bRoundTrip} = useSelector(getBaselineState)
  const {fRoundTrip} = useSelector(getForecastState)

  const currentRoundTrip = type == "baseline" ? bRoundTrip :fRoundTrip
  const currentAction = type == "baseline" ? bSetFlightResult : fSetFlightResult

  const dispatch = useDispatch()

  const [value,setValue] = useState(calculateFlight(currentRoundTrip.asia,currentRoundTrip.europe,currentRoundTrip.northAmerica,currentRoundTrip.southAmerica,currentRoundTrip.oceana,currentRoundTrip.africa))

  useEffect(()=>{
    const num = calculateFlight(currentRoundTrip.asia,currentRoundTrip.europe,currentRoundTrip.northAmerica,currentRoundTrip.southAmerica,currentRoundTrip.oceana,currentRoundTrip.africa)
    setValue(Math.round(num * 10) / 10)
    dispatch(currentAction(value))
  },[currentRoundTrip])


  return (
    <div>
      <div className = "flex justify-between">
        <div>Flight</div>
        <div className="flex">
           <div>{value}{(Math.round(value * 100) / 100)%1 == 0 ? ".0":""}</div>
          {/* <AddForcastInfo/> */}
        </div>
    </div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[45%] bg-red-400 h-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
