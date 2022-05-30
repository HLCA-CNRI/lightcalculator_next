import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {
  getBaselineResultState,
  bSetAnnualResult,
} from "../../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetAnnualResult,
} from "../../../store/slices/forecastResultSlice";
import { useSelector } from "react-redux";
import { annualTotal } from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type AnnualResultType = {
  type: string;
  title: string;
};

const AnnualResult = ({ title, type }: AnnualResultType) => {
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
  const currentAnnual = type == "baseline" ? bAnnual : fAnnual;
  const currentBuilding =
    type == "baseline" ? bCalculateBuilding : fCalculateBuilding;
  const currentCar = type == "baseline" ? bCalculateCar : fCalculateCar;
  const currentRemoteWork =
    type == "baseline" ? bCalculteRemoteWork : fCalculateRemoteWork;
  const currentCommuting =
    type == "baseline" ? bCalculateCommuting : fCalculateCommuting;
  const currentFlight =
    type == "baseline" ? bClaculateFlights : fCalculateFlights;
  const currentAction =
    type == "baseline" ? bSetAnnualResult : fSetAnnualResult;
  const dispatch = useDispatch();
  //change value to redux val Do not use useState
  const [value, setValue] = useState(0);
  // console.log("HERE",currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight)

  useEffect(() => {
    const num = annualTotal(
      currentBuilding,
      currentCar,
      currentRemoteWork,
      currentCommuting,
      currentFlight
    );
    setValue(Math.round(num * 10) / 10);
    // console.log("annual total",annualTotal(currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight))
    dispatch(currentAction(value));
  }, [
    currentBuilding,
    currentCar,
    currentRemoteWork,
    currentCommuting,
    currentFlight,
  ]);

  return (
    <div>
      <div className="w-[100%] flex justify-between pt-3 ">
        <div className="flex">
          <div className = "flex flex-col">
          <div className="flex text-base font-[2000]">
            <div>{title} Annual</div>
            <div className = "text-xs font-[2000] ml-1 pt-1">(kgCO<sub>2</sub>e)</div> 
          </div>

          </div>
         
          {/* <div className="font-light">(tCO2e)</div> */}
        </div>
        <div className="flex">
          <div>
            {value}
            {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}
          </div>
          {type == "forecast" ? <AddForcastInfo type="annualResult" /> : ""}
        </div>
      </div>
      <div>
        <div className="relative h-3 rounded-lg mt-2">
          <div className="absolute bg-[#ffeb84] h-3 rounded-lg w-[100%]"></div>
          <div className="absolute bg-[#ffa573] h-3 rounded-l-lg w-[80%]"></div>
          <div className="absolute bg-[#916aff] h-3 rounded-l-lg w-[60%]"></div>
          <div className="absolute bg-[#59afff] h-3 rounded-l-lg w-[40%]"></div>
          <div className="absolute bg-[#11c28d] h-3 rounded-l-lg w-[20%]"></div>
        </div>
      </div>
    </div>
  );
};

export default AnnualResult;
