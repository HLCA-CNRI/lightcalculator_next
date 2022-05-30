import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import { getBaselineState } from "../../../store/slices/baselineSlice";
import { getForecastState } from "../../../store/slices/forecastSlice";
import {
  getBaselineResultState,
  bSetBuildingResult,
} from "../../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetBuildingResult,
} from "../../../store/slices/forecastResultSlice";
import { useSelector } from "react-redux";
import { calculateBuilding } from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type BuildingResultType = {
  type: string;
};

const BuildingResult = ({ type }: BuildingResultType) => {
  const {
    bCompanyEmployeeSize,
    bCommutingDays,
    bCompanysize,
    bUseRenewableEnergy,
  } = useSelector(getBaselineState);
  const {
    fCompanyEmployeeSize,
    fCommutingDays,
    fCompanysize,
    fUseRenewableEnergy,
  } = useSelector(getForecastState);

  const currentEmployeeSize =
    type == "baseline" ? bCompanyEmployeeSize : fCompanyEmployeeSize;
  const currentCommutingDays =
    type == "baseline" ? bCommutingDays : fCommutingDays;
  const currentCompanySize = type == "baseline" ? bCompanysize : fCompanysize;
  const currentRenewableEnergy =
    type == "baseline" ? bUseRenewableEnergy : fUseRenewableEnergy;
  const currentAction =
    type == "baseline" ? bSetBuildingResult : fSetBuildingResult;
  const dispatch = useDispatch();

  const [value, setValue] = useState(
    calculateBuilding(
      currentEmployeeSize,
      currentCommutingDays,
      currentCompanySize,
      currentRenewableEnergy
    )
  );

  useEffect(() => {
    const num = calculateBuilding(
      currentEmployeeSize,
      currentCommutingDays,
      currentCompanySize,
      currentRenewableEnergy
    );
    setValue(Math.round(num * 100) / 100);
    dispatch(currentAction(value));
  }, [
    currentEmployeeSize,
    currentCommutingDays,
    currentCompanySize,
    currentRenewableEnergy,
  ]);
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-2 text-2xl ">&#x2022;</div>
          <div>건물</div>
        </div>

        <div className="flex">
          <div>
            {value}
            {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}
          </div>
          {type == "forecast" ? <AddForcastInfo type="buildingResult" /> : ""}
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

export default BuildingResult;
