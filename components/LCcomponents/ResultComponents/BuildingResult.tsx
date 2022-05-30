import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {getBaselineState} from "../../../store/slices/baselineSlice"
import {getForecastState} from "../../../store/slices/forecastSlice"
import { getBaselineResultState,bSetBuildingResult } from "../../../store/slices/baslineResultSlice";
import { getForecastResultState,fSetBuildingResult } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "react-redux";
import {calculateBuilding} from "../../../functions/ResultFunctions"

type BuildingResultType = {
  type: string;
};

const BuildingResult = ({ type }: BuildingResultType) => {
  const {bCompanyEmployeeSize,bCommutingDays,bCompanysize,bUseRenewableEnergy} = useSelector(getBaselineState)
  const {fCompanyEmployeeSize,fCommutingDays,fCompanysize,fUseRenewableEnergy} = useSelector(getForecastState)
  
  const currentEmployeeSize = type == "baseline" ? bCompanyEmployeeSize:fCompanyEmployeeSize
  const currentCommutingDays = type == "baseline" ? bCommutingDays:fCommutingDays
  const currentCompanySize = type =="baseline" ? bCompanysize:fCompanysize
  const currentRenewableEnergy = type == "baseline" ? bUseRenewableEnergy:fUseRenewableEnergy
  const currentAction  = type == "baseline" ? bSetBuildingResult:fSetBuildingResult
  const dispatch = useDispatch()

  const [value,setValue] = useState(calculateBuilding(currentEmployeeSize,currentCommutingDays,currentCompanySize,currentRenewableEnergy))
  
  useEffect(()=>{
    const num = calculateBuilding(currentEmployeeSize,currentCommutingDays,currentCompanySize,currentRenewableEnergy)
    console.log((Math.round(num * 100) / 100)%1 == 0  ,typeof parseFloat(num.toString()).toFixed(2))
    setValue(Math.round(num * 100) / 100)
    dispatch(currentAction(value))

  },[currentEmployeeSize,currentCommutingDays,currentCompanySize,currentRenewableEnergy])
  return (
    <div>
      <div className="flex justify-between">
        <div>Building</div>
        <div>{value}{(Math.round(value * 100) / 100)%1 == 0 ? ".00":""}</div>
      </div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[45%] bg-red-400 h-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default BuildingResult;
