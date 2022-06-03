import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect,useRef } from "react";
import { useDispatch } from "../../store/store";
import PercentInput from "./PercentInput";
import { useSelector } from "../../store/store";
import { defaultBaseline,DefualtForecast } from "../../functions/Defaults";
import {
  getBaselineState,
  bSetFuelType,
} from "../../store/slices/baselineSlice";
import {
  getForecastState,
  fSetFuelType,
} from "../../store/slices/forecastSlice";
import {
  getBaselineResultState,
  bSetAnnualResult,
} from "../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetAnnualResult,
} from"../../store/slices/forecastResultSlice";

type GasInputType = {
  type: string;
};

const GasInput = ({ type }: GasInputType) => {
  const { bFuelType } = useSelector(getBaselineState);
  const { fFuelType } = useSelector(getForecastState);
  const [total,setTotal] = useState(0)

  const fcheckBox = React.useRef() as React.MutableRefObject<HTMLInputElement>;  
  const bcheckBox = React.useRef() as React.MutableRefObject<HTMLInputElement>;  
  

  useEffect(()=>{
    if(type == "baseline"){
      setTotal((bFuelType.diesel) + (bFuelType.electric) + (bFuelType.gasoline) + (bFuelType.hydrogen) + (bFuelType.lpg))
    }else{
      setTotal((fFuelType.diesel) + (fFuelType.electric) + (fFuelType.gasoline) + (fFuelType.hydrogen) + (fFuelType.lpg))
    }
  },[bFuelType,fFuelType])


  useEffect(()=>{
    if(bcheckBox.current!=undefined && bcheckBox.current.checked){
      bcheckBox.current.checked = false
      dispatch(bSetFuelType({...bFuelType,setDefault:false}))
    }
  },[bFuelType.diesel,bFuelType.electric,bFuelType.gasoline,bFuelType.hydrogen,bFuelType.lpg])

  useEffect(()=>{
    if(fcheckBox.current!=undefined && fcheckBox.current.checked){
      fcheckBox.current.checked = false
      dispatch(fSetFuelType({...fFuelType,setDefault:false}))
    }
  },[fFuelType.diesel,fFuelType.electric,fFuelType.gasoline,fFuelType.hydrogen,fFuelType.lpg])

  const dispatch = useDispatch();

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    if (type == "baseline") {
      dispatch(bSetFuelType({ ...bFuelType, setDefault: event.target.checked }));
    } else {
      dispatch(
        fSetFuelType({ ...fFuelType, setDefault: event.target.checked })
      );
    }
  };

  return (
    <div className="w-[100%]">
      <label className="inline-flex items-center w-[100%] justify-start pt-2 pl-3 ml-6 my-3">
          <input
            type="checkbox"
            ref = {type == "baseline" ? bcheckBox : fcheckBox}
            className={`form-checkbox h-4 w-4 ${type == "baseline" ? "":"accent-[#548235]"} `}
            onChange={handleDefaultChange}
          />
       
        <span className="ml-2">기본값 적용</span>
      </label>
      <hr className="border-none h-[2px] bg-white"></hr>

     
      {type == "baseline" ? (
        <div className="rounded-lg p-2  m-5">

          <div className="w-[100%] mt-2 flex">
            <div className = {`bg-[#2f5597] h-3 rounded-l-lg`} style={{width: `${((bFuelType.gasoline/total)*100)}%`}}/>
            <div className = {`bg-[#2e75b6] h-3`} style={{width: `${(bFuelType.diesel/total)*100}%`}}/>
            <div className = "bg-[#5b9bd5] h-3"  style={{width: `${(bFuelType.lpg/total)*100}%`}}/>
            <div className = "bg-[#9dc3e6] h-3 w-[2%]"  style={{width: `${(bFuelType.hydrogen/total)*100}%`}}/>
            <div className = "bg-[#bdd7ee] h-3 w-[4%] rounded-r-lg"  style={{width: `${(bFuelType.electric/total)*100}%`}}/>
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type == "baseline" ? true : false}
            title="휘발유"
            unit="대"
            color="#2f5597"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type == "baseline" ? true : false}
            title="경유"
            unit="대"
            color="#2e75b6"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type == "baseline" ? true : false}
            title="LPG"
            unit="대"
            color="#5b9bd5"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type == "baseline" ? true : false}
            title="수소"
            unit="대"
            color="#9dc3e6"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type == "baseline" ? true : false}
            title="전기"
            unit="대"
            color="#bdd7ee"
          />
        </div>
      ) : (
        <div className="rounded-lg p-2  m-5">
          <div className="w-[100%] mt-2 flex">
            <div className = {`bg-[#385723] h-3 rounded-l-lg`} style={{width: `${((fFuelType.gasoline/total)*100)}%`}}/>
            <div className = {`bg-[#548235] h-3`} style={{width: `${(fFuelType.diesel/total)*100}%`}}/>
            <div className = "bg-[#70ad47] h-3"  style={{width: `${(fFuelType.lpg/total)*100}%`}}/>
            <div className = "bg-[#a9d18e] h-3 w-[2%]"  style={{width: `${(fFuelType.hydrogen/total)*100}%`}}/>
            <div className = "bg-[#c5e0b4] h-3 w-[4%] rounded-r-lg"  style={{width: `${(fFuelType.electric/total)*100}%`}}/>
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type == "baseline" ? true : false}
            title="휘발유"
            unit="대"
            color="#385723"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type == "baseline" ? true : false}
            title="경유"
            unit="대"
            color="#548235"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type == "baseline" ? true : false}
            title="LPG"
            unit="대"
            color="#70ad47"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type == "baseline" ? true : false}
            title="수소"
            unit="대"
            color="#a9d18e"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type == "baseline" ? true : false}
            title="전기"
            unit="대"
            color="#c5e0b4"
          />
        </div>
      )}
    </div>
  );
};

export default GasInput;
