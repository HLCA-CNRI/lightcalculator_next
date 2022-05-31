import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetFuelType,
  bSetCommuting,
} from "../../store/slices/baselineSlice";

import {
  getForecastState,
  fSetFuelType,
  fSetCommuting,
} from "../../store/slices/forecastSlice";
import { object } from "yup";
import styled from 'styled-components';



type percentInputType = {
  Objectkey: string;
  value: string;
  isBaseline: boolean;
  title: string;
  unit: string;
  color:string
  // defaultVal:string;
};

//TODO: Change implementation
const PercentInput = ({
  Objectkey,
  value,
  isBaseline,
  title,
  unit,
  color,
}: percentInputType) => {
  const { bFuelType, bCommuting } = useSelector(getBaselineState);
  const { fFuelType, fCommuting } = useSelector(getForecastState);
  const dispatch = useDispatch();

//   const Dot = styled.li`
//   color:${color}; 
// `

  let initialFuelObject = isBaseline ? bFuelType : fFuelType;
  let initialCommutingObject = isBaseline ? bCommuting : fCommuting;
  let currentColor = ""
  //TODO: Not good implementation
  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (Objectkey == "commuting" && isBaseline) {
        dispatch(bSetCommuting({ ...bCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && isBaseline) {
        dispatch(bSetFuelType({ ...bFuelType, [value]: event.target.value }));
      } else if (Objectkey == "commuting" && !isBaseline) {
        dispatch(fSetCommuting({ ...fCommuting, [value]: event.target.value }));
      } else if (Objectkey == "fuel" && !isBaseline) {
        dispatch(fSetFuelType({ ...fFuelType, [value]: event.target.value }));
      }
    }
  };
 
  // const color = "#bdd7ee"

  //TODO: Not good implementation
  let defaultValue =
    Objectkey == "commuting"
      ? initialCommutingObject[value as keyof typeof bCommuting].toString()
      : initialFuelObject[value as keyof typeof bFuelType].toString();


      // <Dot>
      // {/* <span className={`text-${color}`}>{color}</span> */}
      //   <span className="text-black">{title}</span>
      // </Dot>   

 
  return (
    <div className="flex w-[100%]  h-[3] m-2 p-1 justify-between px-2">
      <div className="flex flex-col content-center">
        {/* <div className = {`bg-[${color}]`}>${color}</div> */}
   

        <li>
          <span className="text-black">{title}</span>
        </li>
      </div>

      <div className="mr-3 via-green-100 flex">
        <input
          type="number"
          min={0}
          defaultValue={defaultValue}
          className="w-12 text-gray-700 bg-white rounded"
          onChange={handleDefaultChange}
        ></input>
        <div className="ml-2">{unit}</div>
      </div>
    </div>
  );
};

export default PercentInput;
