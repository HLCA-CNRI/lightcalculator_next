import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {getBaselineState} from "../../../store/slices/baselineSlice"
import {getForecastState} from "../../../store/slices/forecastSlice"
import {bSetRemoteWorkResult} from "../../../store/slices/baslineResultSlice"
import {fSetRemoteWorkResult} from "../../../store/slices/forecastResultSlice"
import {useSelector} from "react-redux"
import {calculateRemoteWork} from "../../../functions/ResultFunctions"

type RemoteWorkType = {
  type: string;
};

const RemoteWork = ({ type }: RemoteWorkType) => {
  const {bCompanyEmployeeSize,bCommutingDays} = useSelector(getBaselineState)
  const {fCompanyEmployeeSize,fCommutingDays} = useSelector(getForecastState)

  const currentCompanyEmployeeSize = type == "baseline" ? bCompanyEmployeeSize:fCompanyEmployeeSize
  const currentCommutingDays = type == "baseline" ? bCommutingDays:fCommutingDays
  const currentAction = type == "baseline"  ? bSetRemoteWorkResult:fSetRemoteWorkResult
  
  const dispatch = useDispatch()
  const [value,setValue] = useState(calculateRemoteWork(currentCompanyEmployeeSize,currentCommutingDays))

  useEffect(()=>{
    const num = calculateRemoteWork(currentCompanyEmployeeSize,currentCommutingDays)
    setValue(Math.round(num * 100) / 100)
    dispatch(currentAction(value))

  },[currentCompanyEmployeeSize,currentCommutingDays])
  return (
    <div>
      <div className="flex justify-between">
        <div>Remote Work</div>
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

export default RemoteWork;
