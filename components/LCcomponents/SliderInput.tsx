import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {memo, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "../../store/store";
import {getBaselineState} from "../../store/slices/baselineSlice";
import {getForecastState} from "../../store/slices/forecastSlice";

type SliderInputType = {
  type: string; // baseline인지 forecast 인지
  setNumber: ActionCreatorWithPayload<number, string>; // redux action
};

function SliderInput({type, setNumber}: SliderInputType) {
  const {bCommutingDays} = useSelector(getBaselineState); // baseline commuting 값들
  const {fCommutingDays} = useSelector(getForecastState); // forecast commuting 값들

  const dispatch = useDispatch();
  // onChange 이벤트 핸들러 change event 감시하고 값이 바뀔때마다 redux state 바꿔줌
  const {bDefault} = useSelector(getBaselineState);
  const {fDefault} = useSelector(getForecastState);
  useEffect(() => {
    dispatch(setNumber(parseInt("5", 10)));
  }, [bDefault, fDefault]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      const numberCurrent = parseInt(currentVal, 10) - 1;
      dispatch(setNumber(numberCurrent));
    }
  };

  return (
    <div className="flex flex-col space-y-2 w-[80%] py-3">
      {/* 설명 --> 주 n 일 출근 */}
      <div className="flex justify-center">
        주 {type === "baseline" ? bCommutingDays : fCommutingDays}일 출근
      </div>
      {/* 인풋이 0-6 이고 onChange이벤트 감시 */}
      <input
        type="range"
        className={`${type === "baseline" ? "" : "accent-[#548235]"} w-[100%] border-none `}
        value={type === "baseline" ? bCommutingDays + 1 : fCommutingDays + 1}
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
