import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {memo, useEffect, useRef} from "react";
import {bSetCompanyEmployeeSize, getBaselineState} from "../../store/slices/baselineSlice";
import {getForecastState} from "../../store/slices/forecastSlice";
import {useDispatch, useSelector} from "../../store/store";
import {defaultBaseline} from "../../functions/Defaults";

type NumberInputType = {
  initial: string; // 초기값
  unit: string; // 단위
  setNumber: ActionCreatorWithPayload<number, string>; // redux action
};

function NumberInput({initial, unit, setNumber}: NumberInputType) {
  const {bDefault} = useSelector(getBaselineState);
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(bSetCompanyEmployeeSize(defaultBaseline.bCompanyEmployeeSize));
  //   // console.log(typeof defaultBaseline.bCompanyEmployeeSize);
  //   // console.log("yahoo!", inputRef.current.value);
  // }, [bDefault]);
  // 사용자 onChange 이벤트 핸들러 --> input에 숫자가 바뀌면 dispatch(setNumber)를 통해서 redux state 값이 바뀜
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      dispatch(setNumber(parseInt(currentVal, 10)));
    }
  };

  return (
    <div className="flex  m-2">
      {/* input */}
      <input
        ref={inputRef}
        type="number"
        className="w-20 rounded text-right"
        defaultValue={initial}
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
