import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import { defaultBaseline, DefualtForecast } from "../../functions/Defaults";
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

  //TODO: clean up
  useEffect(() => {
    if (
      Objectkey == "commuting" &&
      isBaseline &&
      bCommuting.setDefault == true
    ) {
      type ObjectKey = keyof typeof defaultBaseline.bCommuting;
      const myVar = value as ObjectKey;
      inputField.current.value = defaultBaseline.bCommuting[myVar].toString();
      dispatch(
        bSetCommuting({
          ...bCommuting,
          distance:defaultBaseline.bCommuting.distance,
          car: defaultBaseline.bCommuting.car,
          publicTransit: defaultBaseline.bCommuting.publicTransit,
          walkOrBike: defaultBaseline.bCommuting.walkOrBike,
        })
      );
    }
  }, [bCommuting.setDefault]);

  useEffect(() => {
    if (Objectkey == "fuel" && isBaseline && bFuelType.setDefault == true) {
      type ObjectKey = keyof typeof defaultBaseline.bFuelType;
      const myVar = value as ObjectKey;
      inputField.current.value = defaultBaseline.bFuelType[myVar].toString();
      dispatch(
        bSetFuelType({
          ...bFuelType,
          gasoline: defaultBaseline.bFuelType.gasoline,
          diesel: defaultBaseline.bFuelType.diesel,
          lpg: defaultBaseline.bFuelType.lpg,
          hydrogen: defaultBaseline.bFuelType.hydrogen,
          electric: defaultBaseline.bFuelType.electric,
        })
      );
    }
  }, [bFuelType.setDefault]);

  useEffect(() => {
    if (
      Objectkey == "commuting" &&
      !isBaseline &&
      fCommuting.setDefault == true
    ) {
      type ObjectKey = keyof typeof DefualtForecast.fCommuting;
      const myVar = value as ObjectKey;
      inputField.current.value = DefualtForecast.fCommuting[myVar].toString();
      dispatch(
        fSetCommuting({
          ...fCommuting,
          distance:DefualtForecast.fCommuting.distance,
          car: DefualtForecast.fCommuting.car,
          publicTransit: DefualtForecast.fCommuting.publicTransit,
          walkOrBike: DefualtForecast.fCommuting.walkOrBike,
        })
      );
    }
  }, [fCommuting.setDefault]);

  useEffect(() => {
    if (Objectkey == "fuel" && !isBaseline && fFuelType.setDefault == true) {
      type ObjectKey = keyof typeof defaultBaseline.bFuelType;
      const myVar = value as ObjectKey;
      inputField.current.value = defaultBaseline.bFuelType[myVar].toString();
      dispatch(
        fSetFuelType({
          ...fFuelType,
          gasoline: DefualtForecast.fFuelType.gasoline,
          diesel: DefualtForecast.fFuelType.diesel,
          lpg: DefualtForecast.fFuelType.lpg,
          hydrogen: DefualtForecast.fFuelType.hydrogen,
          electric: DefualtForecast.fFuelType.electric,
        })
      );
    }
  }, [fFuelType.setDefault]);

  const Dot = styled.li`
    color: ${color};
  `;

  let initialFuelObject = isBaseline ? bFuelType : fFuelType;
  let initialCommutingObject = isBaseline ? bCommuting : fCommuting;
  let currentColor = "";
  //TODO: Not good implementation
  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (Objectkey == "commuting" && isBaseline) {
        dispatch(
          bSetCommuting({
            ...bCommuting,
            [value]: parseInt(event.target.value),
          })
        );
      } else if (Objectkey == "fuel" && isBaseline) {
        dispatch(
          bSetFuelType({ ...bFuelType, [value]: parseInt(event.target.value) })
        );
      } else if (Objectkey == "commuting" && !isBaseline) {
        dispatch(
          fSetCommuting({
            ...fCommuting,
            [value]: parseInt(event.target.value),
          })
        );
      } else if (Objectkey == "fuel" && !isBaseline) {
        dispatch(
          fSetFuelType({ ...fFuelType, [value]: parseInt(event.target.value) })
        );
      }
    }
  };

  // const color = "#bdd7ee"

  //TODO: Not good implementation
  let defaultValue =
    Objectkey == "commuting"
      ? initialCommutingObject[value as keyof typeof bCommuting].toString()
      : initialFuelObject[value as keyof typeof bFuelType].toString();

  <Dot>
    {/* <span className={`text-${color}`}>{color}</span> */}
    <span className="text-black">{title}</span>
  </Dot>;

  return (
    <div className="flex w-[100%]  h-[3] m-2 p-1 justify-between px-2">
      <div className="flex flex-col content-center">
        <Dot>
          {/* <span className={`text-${color}`}>{color}</span> */}
          <span className="text-black">{title}</span>
        </Dot>

        {/* <li className= {`text-${color}`}>
          <span>{title}</span>
        </li> */}
      </div>
      <div id="percentVal" className="mr-3 via-green-100 flex">
        <input
          ref={inputField}
          type="number"
          min={0}
          max={Objectkey == "commuting" ? 100 : ""}
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
