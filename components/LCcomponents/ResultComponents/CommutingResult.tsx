import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {getBaselineState} from "../../../store/slices/baselineSlice"
import {getForecastState} from "../../../store/slices/forecastSlice"
import {bSetCommunityResult} from "../../../store/slices/baslineResultSlice"
import {fSetCommunityResult} from "../../../store/slices/forecastResultSlice"
import {useSelector} from "react-redux"
import {calculateCommutingDays} from "../../../functions/ResultFunctions"

type CommutingResultType = {
  type: string;
};

const CommutingResult = ({type}: CommutingResultType) => {
  const {bCompanyEmployeeSize,bCommutingDays,bCommuting} = useSelector(getBaselineState)
  const {fCompanyEmployeeSize,fCommutingDays,fCommuting} = useSelector(getForecastState)

  const currentCompanyEmployeeSize = type == "baseline" ? bCompanyEmployeeSize:fCompanyEmployeeSize
  const currentCommutingDays = type == "baseline" ? bCommutingDays:fCommutingDays
  const currentCommuting = type == "baseline" ? bCommuting :fCommuting
  const currentAction = type == "baseline" ? bSetCommunityResult :fSetCommunityResult

  const dispatch = useDispatch()

  const [value,setValue] = useState(calculateCommutingDays(currentCompanyEmployeeSize,currentCommutingDays,currentCommuting.distance,currentCommuting.car,currentCommuting.publicTransit))

  useEffect(()=>{
    const num = calculateCommutingDays(currentCompanyEmployeeSize,currentCommutingDays,currentCommuting.distance,currentCommuting.car,currentCommuting.publicTransit)
    setValue(Math.round(num * 100) / 100)
    dispatch(currentAction(value))

  },[currentCompanyEmployeeSize,currentCommutingDays,currentCommuting])
  
  return (
    <div>
    <div className = "flex justify-between">
        <div>Commuting</div>
        <div>{value}</div>
    </div>
    
      <div className="">
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[45%] bg-red-400 h-3"></div>
        </div>
      </div>
    </div>
  );
};

export default CommutingResult;
