import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {memo, useEffect, useRef, useState} from "react";
import {bSetCompanyEmployeeSize, getBaselineState} from "../../store/slices/baselineSlice";
import {getForecastState} from "../../store/slices/forecastSlice";
import {useDispatch, useSelector} from "../../store/store";
import {defaultBaseline} from "../../functions/Defaults";

type NumberInputType = {
  initial: string; // state
  unit: string; // 단위
  defaultVal: number;
  setNumber: ActionCreatorWithPayload<number, string>; // redux action
};

function NumberInput({initial, unit, defaultVal, setNumber}: NumberInputType) {
  const {bDefault} = useSelector(getBaselineState);
  const {fDefault} = useSelector(getForecastState);

  // const {bDefault} = useSelector(getBaselineState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNumber(parseInt(defaultVal.toString(), 10)));
  }, [bDefault, fDefault]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    console.log(event.currentTarget.value);
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      dispatch(setNumber(parseInt(currentVal, 10)));
    } else {
      dispatch(setNumber(0));
    }
  };

  return (
    <div className="flex  m-2">
      {/* input */}
      <input
        // ref={inputRef}
        type="number"
        className="w-20 rounded text-right"
        value={initial}
        min={0}
        onChange={handleChange}
      />
      {/* 단위 */}
      <div className="ml-1">
        {unit}
        {unit === "m" ? <sup>2</sup> : ""}
      </div>
    </div>
  );
}

export default memo(NumberInput);
