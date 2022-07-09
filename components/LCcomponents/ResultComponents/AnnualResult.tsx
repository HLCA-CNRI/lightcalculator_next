import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../store/store";
import {getBaselineResultState, bSetAnnualResult} from "../../../store/slices/baslineResultSlice";
import {getForecastResultState, fSetAnnualResult} from "../../../store/slices/forecastResultSlice";
import {annualTotal, numberWithCommas} from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";
import {getBaselineState} from "../../../store/slices/baselineSlice";

type AnnualResultType = {
  type: string;
  title: string;
};

function AnnualResult({title, type}: AnnualResultType) {
  const {
    bAnnual,
    bCalculateBuilding,
    bCalculateCar,
    bCalculteRemoteWork,
    bCalculateCommuting,
    bClaculateFlights,
  } = useSelector(getBaselineResultState);
  const {
    fAnnual,
    fCalculateBuilding,
    fCalculateCar,
    fCalculateRemoteWork,
    fCalculateCommuting,
    fCalculateFlights,
  } = useSelector(getForecastResultState);

  const {bRoundTrip} = useSelector(getBaselineState);

  const currentAnnual = type === "baseline" ? bAnnual : fAnnual;
  const currentBuilding = type === "baseline" ? bCalculateBuilding : fCalculateBuilding;
  const currentCar = type === "baseline" ? bCalculateCar : fCalculateCar;
  const currentRemoteWork = type === "baseline" ? bCalculteRemoteWork : fCalculateRemoteWork;
  const currentCommuting = type === "baseline" ? bCalculateCommuting : fCalculateCommuting;
  const currentFlight = type === "baseline" ? bClaculateFlights : fCalculateFlights;
  const currentAction = type === "baseline" ? bSetAnnualResult : fSetAnnualResult;
  const dispatch = useDispatch();
  // change value to redux val Do not use useState
  const [value, setValue] = useState(0);

  useEffect(() => {
    const num = annualTotal(
      currentBuilding,
      currentCar,
      currentRemoteWork,
      currentCommuting,
      currentFlight
    );
    setValue(num);

    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(num));
  }, [bRoundTrip, currentBuilding, currentCar, currentRemoteWork, currentCommuting, currentFlight]);

  return (
    <div>
      <div className="w-[100%] flex justify-between pt-3 ">
        <div className="flex flex-col">
          <div className="flex text-base font-[2000]">
            <div>{title}</div>
            <span className="ml-1">Annual</span>
            <div className="text-xs font-[2000] ml-1 pt-1">
              (kgCO<sub>2</sub>e)
            </div>
          </div>

          {/* <div className="font-light">(tCO2e)</div> */}
        </div>
        <div className="flex ">
          <div>
            {numberWithCommas(value)}
            {(Math.round(value * 10) / 10) % 1 === 0 ? ".0" : ""}
          </div>
          {type === "forecast" ? <AddForcastInfo type="annualResult" /> : ""}
        </div>
      </div>
      <div>
        <div className="w-[100%] mt-2 flex">
          <div
            className=" bg-[#11c28d] h-3 rounded-l-lg"
            style={{width: `${(currentCar / currentAnnual) * 100}%`}}
          />
          <div
            className=" bg-[#59afff] h-3"
            style={{width: `${(currentBuilding / currentAnnual) * 100}%`}}
          />
          <div
            className=" bg-[#916aff] h-3"
            style={{width: `${(currentCommuting / currentAnnual) * 100}%`}}
          />
          <div
            className=" bg-[#ffa573] h-3"
            style={{width: `${(currentFlight / currentAnnual) * 100}%`}}
          />
          <div
            className=" bg-[#ffeb84] h-3 rounded-r-lg"
            style={{width: `${(currentRemoteWork / currentAnnual) * 100}%`}}
          />
        </div>
      </div>
    </div>
  );
}

export default AnnualResult;
