import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import PercentInput from "./PercentInput";
import { useSelector } from "../../store/store";
import { getBaselineState,bSetFuelType} from "../../store/slices/baselineSlice";
import{ getForecastState, fSetFuelType}from "../../store/slices/forecastSlice"

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
      <label className="inline-flex items-center w-[100%] justify-start pt-2 pl-3 ml-6 my-3">
        <input type="checkbox" className="form-checkbox h-4 w-4" onChange={handleDefaultChange}/>
        <span className="ml-2">기본값 적용</span>
      </label>
      <hr className="border-none h-[2px] bg-white"></hr>

      <div className="rounded-lg p-2  m-5">
       

        <div className = "relative h-3 rounded-lg">
           <div id = "gas_input_red" className = "absolute bg-red-400 h-3 rounded-lg w-[100%]"></div>
           <div className = "absolute bg-blue-400 h-3 rounded-l-lg w-[53%]"></div>
           <div className = "absolute bg-green-400 h-3 rounded-l-lg w-[14%]"></div>
           <div className = "absolute bg-yellow-400 h-3 rounded-l-lg w-[6%]"></div>
           <div className = "absolute bg-orange-400 h-3 rounded-l-lg w-[4%]"></div>
        </div>
       


        <PercentInput Objectkey="fuel" value = "gasoline" isBaseline = {type == "baseline" ? true:false} title = "휘발유" unit = "대"/>
        <PercentInput Objectkey="fuel" value = "diesel" isBaseline = {type == "baseline" ? true:false} title = "경유" unit = "대"/>
        <PercentInput Objectkey="fuel" value = "lpg" isBaseline = {type == "baseline" ? true:false} title = "lpg" unit = "대"/> 
        <PercentInput Objectkey="fuel" value = "hydrogen" isBaseline = {type == "baseline" ? true:false} title = "수소" unit = "대"/>
        <PercentInput Objectkey="fuel" value = "electric" isBaseline = {type == "baseline" ? true:false} title = "전기" unit = "대"/>
      </div>
    </div>
  );
};

export default GasInput;
