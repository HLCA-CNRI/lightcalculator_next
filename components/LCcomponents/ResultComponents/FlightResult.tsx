import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../store/store";
import {getBaselineState} from "../../../store/slices/baselineSlice";
import {getForecastState} from "../../../store/slices/forecastSlice";
import {getBaselineResultState, bSetFlightResult} from "../../../store/slices/baslineResultSlice";
import {getForecastResultState, fSetFlightResult} from "../../../store/slices/forecastResultSlice";
import {calculateFlight, numberWithCommas} from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type FlightResultType = {
  type: string;
};

function FlightResult({type}: FlightResultType) {
  const {bRoundTrip} = useSelector(getBaselineState);
  const {fRoundTrip} = useSelector(getForecastState);

  const currentRoundTrip = type === "baseline" ? bRoundTrip : fRoundTrip;
  const currentAction = type === "baseline" ? bSetFlightResult : fSetFlightResult;

  const {bAnnual} = useSelector(getBaselineResultState);
  const {fAnnual} = useSelector(getForecastResultState);

  const currentAnnual = type === "baseline" ? bAnnual : fAnnual;

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
    dispatch(currentAction(num));
  }, [currentRoundTrip]);

  return (
    <div>
      <div className="flex justify-between">
        <li className="text-[#ffa573]">
          <span className="text-black">출장</span>
        </li>

        <div className="flex ">
          <div>
            {numberWithCommas(value)}
            {(Math.round(value * 100) / 100) % 1 === 0 ? ".0" : ""}
          </div>
          {type === "forecast" ? <AddForcastInfo type="flightsResult" /> : ""}
        </div>
      </div>
      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]" />
          <div
            className="absolute bg-[#bdd7ee] h-3 rounded-l-lg"
            style={{width: `${(value / currentAnnual) * 100}%`}}
          />
        </div>
      </div>
    </div>
  );
}

export default FlightResult;
