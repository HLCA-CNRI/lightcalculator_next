import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import PercentInput from "./PercentInput";
import { useSelector } from "../../store/store";
import { getBaselineState,bSetFuelType,bSetCommuting} from "../../store/slices/baselineSlice";

import{
  getForecastState,
  fSetFuelType,
}from "../../store/slices/forecastSlice"

type GasInputType = {
  type:string
}

const GasInput = ({type}:GasInputType) => {
  const  {bFuelType}  = useSelector(getBaselineState)
  const {fFuelType} = useSelector(getForecastState)
 
  const dispatch = useDispatch()

  const handleDefaultChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    if (type == "baseline"){
      dispatch(bSetFuelType({...bFuelType,setDefault:event.target.checked}))
    }else{
      dispatch(fSetFuelType({...fFuelType,setDefault:event.target.checked}))
    }
    
  }

  return (
    <div className="w-[100%]">
      <label className="inline-flex items-center w-[100%] justify-start pt-3 pl-3 ml-6 my-3">
        <input type="checkbox" className="form-checkbox h-4 w-4" onChange={handleDefaultChange}/>
        <span className="ml-2">기본 값 적용</span>
      </label>
      <hr className="border-none h-1 bg-white"></hr>

      <div className="rounded-lg p-2  m-5">
        <div className="w-[100%] bg-slate-400 h-4 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-4  ">
            <div className="rounded-l-lg w-[70%] bg-orange-400 h-4 ">
              <div className="rounded-l-lg w-[40%] bg-emerald-400 h-4 "></div>
            </div>
          </div>
        </div>

        <PercentInput Objectkey="fuel" value = "gasoline" isBaseline = {type == "baseline" ? true:false}  />
        <PercentInput Objectkey="fuel" value = "diesel" isBaseline = {type == "baseline" ? true:false}/>
        <PercentInput Objectkey="fuel" value = "lpg" isBaseline = {type == "baseline" ? true:false}/> 
        <PercentInput Objectkey="fuel" value = "hydrogen" isBaseline = {type == "baseline" ? true:false}/>
        <PercentInput Objectkey="fuel" value = "electric" isBaseline = {type == "baseline" ? true:false}/>
      </div>
    </div>
  );
};

export default GasInput;
