import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {
  bSetRoundTrip,
  getBaselineState,
} from "../../../store/slices/baselineSlice";
import {
  fSetRoundTrip,
  getForecastState,
} from "../../../store/slices/forecastSlice";
import { bSetFlightResult } from "../../../store/slices/baslineResultSlice";
import { fSetFlightResult } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "react-redux";
import { calculateFlight } from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type FlightResultType = {
  type: string;
};

const FlightResult = ({ type }: FlightResultType) => {
  const { bRoundTrip } = useSelector(getBaselineState);
  const { fRoundTrip } = useSelector(getForecastState);

  const currentRoundTrip = type == "baseline" ? bRoundTrip : fRoundTrip;
  const currentAction =
    type == "baseline" ? bSetFlightResult : fSetFlightResult;

  const dispatch = useDispatch();

  const [value, setValue] = useState(
    calculateFlight(
      currentRoundTrip.asia,
      currentRoundTrip.europe,
      currentRoundTrip.northAmerica,
      currentRoundTrip.southAmerica,
      currentRoundTrip.oceana,
      currentRoundTrip.africa
    )
  );

  useEffect(() => {
    const num = calculateFlight(
      currentRoundTrip.asia,
      currentRoundTrip.europe,
      currentRoundTrip.northAmerica,
      currentRoundTrip.southAmerica,
      currentRoundTrip.oceana,
      currentRoundTrip.africa
    );
    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(value));
  }, [currentRoundTrip]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-2 text-2xl ">&#x2022;</div>
          <div>출장</div>
        </div>

        <div className="flex">
          <div>
            {value}
            {(Math.round(value * 100) / 100) % 1 == 0 ? ".0" : ""}
          </div>
          {type == "forecast" ? <AddForcastInfo type="flightResult" /> : ""}
        </div>
      </div>
      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]"></div>
          <div className="absolute bg-[#bdd7ee] h-3 rounded-l-lg w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
