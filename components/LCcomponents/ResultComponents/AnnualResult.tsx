import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import {getBaselineResultState,bSetAnnualResult} from "../../../store/slices/baslineResultSlice"
import {getForecastResultState,fSetAnnualResult} from "../../../store/slices/forecastResultSlice"
import {useSelector} from "react-redux"
import {annualTotal} from "../../../functions/ResultFunctions"
import AddForcastInfo from "./AddForcastInfo";


type AnnualResultType ={ 
    type:string
    title:string
}

const AnnualResult = ({title,type}:AnnualResultType) => {

  const {bAnnual,bCalculateBuilding,bCalculateCar,bCalculteRemoteWork,bCalculateCommuting,bClaculateFlights} = useSelector(getBaselineResultState)
  const {fAnnual,fCalculateBuilding,fCalculateCar,fCalculateRemoteWork,fCalculateCommuting,fCalculateFlights} = useSelector(getForecastResultState)
  const currentAnnual = type =="baseline" ? bAnnual:fAnnual
  const currentBuilding = type == "baseline" ? bCalculateBuilding:fCalculateBuilding
  const currentCar = type == "baseline" ? bCalculateCar : fCalculateCar
  const currentRemoteWork = type == "baseline" ? bCalculteRemoteWork : fCalculateRemoteWork
  const currentCommuting = type == "baseline" ? bCalculateCommuting:fCalculateCommuting
  const currentFlight = type == "baseline" ? bClaculateFlights:fCalculateFlights
  const currentAction = type =="baseline" ? bSetAnnualResult : fSetAnnualResult
  const dispatch = useDispatch()
  //change value to redux val Do not use useState 
  const [value,setValue] = useState(0)
  // console.log("HERE",currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight)
 
  
  useEffect(()=>{
    const num = annualTotal(currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight)
    setValue(Math.round(num * 10) / 10)
    // console.log("annual total",annualTotal(currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight))
    dispatch(currentAction(value))
  },[currentBuilding,currentCar,currentRemoteWork,currentCommuting,currentFlight])

  return (
    <div>
      <div className="w-[100%] flex justify-between pt-3 ">
        <div className="flex">
          <div className="font-semibold text-base">{title} Annual (kgCO<sub>2</sub>e)</div>
          {/* <div className="font-light">(tCO2e)</div> */}
        </div>
        <div className="flex">
          <div >
            {value}
            {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}
          </div>
          {/* {type == "forecast" ? <AddForcastInfo type = "annualResult" />:"" } */}
        </div>
      </div>
      <div>
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-3 ">
            <div className="rounded-l-lg w-[70%] bg-orange-400 h-3">
              <div className="rounded-l-lg w-[40%] bg-emerald-400 h-3">
                <div className="rounded-l-lg w-[38%] bg-purple-900 h-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualResult;
