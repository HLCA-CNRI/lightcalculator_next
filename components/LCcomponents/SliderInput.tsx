import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {memo} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "../../store/store";
import {getBaselineState} from "../../store/slices/baselineSlice";
import {getForecastState} from "../../store/slices/forecastSlice";

type SliderInputType = {
  type: string;
  setNumber: ActionCreatorWithPayload<number, string>;
};

function SliderInput({type, setNumber}: SliderInputType) {
  const {bCommutingDays} = useSelector(getBaselineState);
  const {fCommutingDays} = useSelector(getForecastState);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      const numberCurrent = parseInt(currentVal, 10) - 1;
      dispatch(setNumber(numberCurrent));
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-[80%] py-3">
      <div className="flex justify-center">
        주 {type === "baseline" ? bCommutingDays : fCommutingDays}일 출근
      </div>
      <input
        type="range"
        className={`${type === "baseline" ? "" : "accent-[#548235]"} w-[100%] border-none `}
        defaultValue="6"
        min="1"
        max="6"
        onChange={handleChange}
        step="1"
      />
      <ul className="flex justify-between w-full px-[10px]">
        <li className="flex justify-center relative mb-4">
          <span className="absolute">0</span>
        </li>
        <li className="flex justify-center relative mb-4">
          <span className="absolute">1</span>
        </li>
        <li className="flex justify-center relative mb-4">
          <span className="absolute">2</span>
        </li>
        <li className="flex justify-center relative mb-4">
          <span className="absolute">3</span>
        </li>
        <li className="flex justify-center relative mb-4">
          <span className="absolute">4</span>
        </li>
        <li className="flex justify-center relative mb-4">
          <span className="absolute">5</span>
        </li>
      </ul>
    </div>
  );
}
export default memo(SliderInput);
