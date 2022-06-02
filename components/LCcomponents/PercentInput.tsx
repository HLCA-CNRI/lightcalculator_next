import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import { defaultBaseline,DefualtForecast } from "../../functions/Defaults";
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
import styled from "styled-components";

type percentInputType = {
  Objectkey: string;
  value: string;
  isBaseline: boolean;
  title: string;
  unit: string;
  color: string;
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
  const inputField = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const front = isBaseline ? "b" :"f"
    inputField.current.id = front + value;
  });


//TODO: clean up
  useEffect(() => {
    console.log("Y")
    if (Objectkey == "commuting" && isBaseline) {

        type ObjectKey = keyof typeof defaultBaseline.bCommuting;
        const myVar = value as ObjectKey;
        console.log("change!")
        inputField.current.value = defaultBaseline.bCommuting[myVar].toString()
        // console.log(defaultBaseline.bCommuting[myVar])
        // dispatch(bSetCommuting({ ...bCommuting, [myVar]: defaultBaseline.bCommuting[myVar]}))

    } else if (Objectkey == "fuel" && isBaseline) {
      if(bFuelType.setDefault == false){
        type ObjectKey = keyof typeof defaultBaseline.bFuelType;
        const myVar = value as ObjectKey;
        inputField.current.value = defaultBaseline.bFuelType[myVar].toString()
      }
    } else if (Objectkey == "commuting" && !isBaseline) {
      if(fCommuting.setDefault == true){
        type ObjectKey = keyof typeof DefualtForecast.fCommuting;
        const myVar = value as ObjectKey;
        inputField.current.value = DefualtForecast.fCommuting[myVar].toString()
        
      }
    } else if (Objectkey == "fuel" && !isBaseline) {
      if(fFuelType.setDefault == true){
        type ObjectKey = keyof typeof DefualtForecast.fFuelType;
        const myVar = value as ObjectKey;
        inputField.current.value = DefualtForecast.fFuelType[myVar].toString()
      }
    }

  }, [
    bFuelType.setDefault,
    bCommuting.setDefault,
    fFuelType.setDefault,
    fCommuting.setDefault,
  ]);

  //   const Dot = styled.li`
  //   color:${color};
  // `

  let initialFuelObject = isBaseline ? bFuelType : fFuelType;
  let initialCommutingObject = isBaseline ? bCommuting : fCommuting;
  let currentColor = "";
  //TODO: Not good implementation
  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    console.log(currentVal)
    if (!isNaN(parseInt(currentVal, 10))) {
      if (Objectkey == "commuting" && isBaseline) {
        dispatch(bSetCommuting({ ...bCommuting, [value]: parseInt(event.target.value)}));
      } else if (Objectkey == "fuel" && isBaseline) {
        // console.log(value)
        dispatch(bSetFuelType({ ...bFuelType, [value]: parseInt(event.target.value) }));
      } else if (Objectkey == "commuting" && !isBaseline) {
        dispatch(fSetCommuting({ ...fCommuting, [value]: parseInt(event.target.value) }));
      } else if (Objectkey == "fuel" && !isBaseline) {
        dispatch(fSetFuelType({ ...fFuelType, [value]: parseInt(event.target.value) }));
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

        <li className= {`${`text-[${color}]`}`}>
          <span className="text-black">{title}</span>
        </li>
      </div>

      <div id="percentVal" className="mr-3 via-green-100 flex">
        <input
          ref={inputField}
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
