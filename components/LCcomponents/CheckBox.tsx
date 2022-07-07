import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "../../store/store";
import {getBaselineState} from "../../store/slices/baselineSlice";
import {getForecastState} from "../../store/slices/forecastSlice";

type CheckBoxType = {
  type: string; // baseline or forecast
  label: string; // 체크박스 앞에 들어가는 내용
  setChecked: ActionCreatorWithPayload<boolean, string>; // redux action
};
function CheckBox({type, label, setChecked}: CheckBoxType) {
  const dispatch = useDispatch();
  const {bUseRenewableEnergy, bDefault} = useSelector(getBaselineState);
  const {fUseRenewableEnergy, fDefault} = useSelector(getForecastState);

  useEffect(() => {
    dispatch(setChecked(false));
  }, [bDefault, fDefault]);

  // 사용자 onChange 이벤트 핸들러 --> input이 바뀌면 redux 값도 바뀜
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setChecked(event.target.checked));
  };

  return (
    <div className="w-[100%] p-8">
      <label className="inline-flex items-center w-[100%] ">
        {type === "baseline" ? (
          <input
            type="checkbox"
            checked={bUseRenewableEnergy}
            className="form-checkbox h-4 w-4 "
            onChange={handleChange}
          />
        ) : (
          <input
            type="checkbox"
            checked={fUseRenewableEnergy}
            className="form-checkbox h-4 w-4 accent-[#548235] "
            onChange={handleChange}
          />
        )}

        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}

export default CheckBox;
