import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "../../../store/store";
import { getBaselineState } from "../../../store/slices/baselineSlice";
import { getForecastState } from "../../../store/slices/forecastSlice";
import {
  getBaselineResultState,
  bSetRemoteWorkResult,
} from "../../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetRemoteWorkResult,
} from "../../../store/slices/forecastResultSlice";
import {
  calculateRemoteWork,
  numberWithCommas,
} from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type RemoteWorkType = {
  type: string;
};

function RemoteWork({ type }: RemoteWorkType) {
  const { bCompanyEmployeeSize, bCommutingDays } =
    useSelector(getBaselineState);
  const { fCompanyEmployeeSize, fCommutingDays } =
    useSelector(getForecastState);

  const { bAnnual } = useSelector(getBaselineResultState);
  const { fAnnual } = useSelector(getForecastResultState);

  const currentCompanyEmployeeSize =
    type === "baseline" ? bCompanyEmployeeSize : fCompanyEmployeeSize;
  const currentCommutingDays =
    type === "baseline" ? bCommutingDays : fCommutingDays;
  const currentAction =
    type === "baseline" ? bSetRemoteWorkResult : fSetRemoteWorkResult;

  const currentAnnual = type === "baseline" ? bAnnual : fAnnual;

  const dispatch = useDispatch();
  const [value, setValue] = useState(
    calculateRemoteWork(currentCompanyEmployeeSize, currentCommutingDays)
  );

  useEffect(() => {
    const num = calculateRemoteWork(
      currentCompanyEmployeeSize,
      currentCommutingDays
    );
    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(num));
  }, [currentCompanyEmployeeSize, currentCommutingDays]);
  return (
    <div>
      <div className="flex justify-between">
        <li className="text-[#ffeb84]">
          <span className="text-black">재택근무</span>
        </li>

        <div className="flex">
          <div>
            {numberWithCommas(value)}
            {(Math.round(value * 100) / 100) % 1 === 0 ? ".0" : ""}
          </div>
          {type === "forecast" ? (
            <AddForcastInfo type="remoteWorkResult" />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]" />
          <div
            className="absolute bg-[#bdd7ee] h-3 rounded-l-lg"
            style={{ width: `${(value / currentAnnual) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default RemoteWork;
