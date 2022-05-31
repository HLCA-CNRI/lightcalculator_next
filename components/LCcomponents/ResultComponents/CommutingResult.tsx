import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";
import { getBaselineState } from "../../../store/slices/baselineSlice";
import { getForecastState } from "../../../store/slices/forecastSlice";
import { bSetCommunityResult } from "../../../store/slices/baslineResultSlice";
import { fSetCommunityResult } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "react-redux";
import { calculateCommutingDays } from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type CommutingResultType = {
  type: string;
};

const CommutingResult = ({ type }: CommutingResultType) => {
  const { bCompanyEmployeeSize, bCommutingDays, bCommuting } =
    useSelector(getBaselineState);
  const { fCompanyEmployeeSize, fCommutingDays, fCommuting } =
    useSelector(getForecastState);

  const currentCompanyEmployeeSize =
    type == "baseline" ? bCompanyEmployeeSize : fCompanyEmployeeSize;
  const currentCommutingDays =
    type == "baseline" ? bCommutingDays : fCommutingDays;
  const currentCommuting = type == "baseline" ? bCommuting : fCommuting;
  const currentAction =
    type == "baseline" ? bSetCommunityResult : fSetCommunityResult;

  const dispatch = useDispatch();

  const [value, setValue] = useState(
    calculateCommutingDays(
      currentCompanyEmployeeSize,
      currentCommutingDays,
      currentCommuting.distance,
      currentCommuting.car,
      currentCommuting.publicTransit
    )
  );

  useEffect(() => {
    const num = calculateCommutingDays(
      currentCompanyEmployeeSize,
      currentCommutingDays,
      currentCommuting.distance,
      currentCommuting.car,
      currentCommuting.publicTransit
    );
    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(value));
  }, [currentCompanyEmployeeSize, currentCommutingDays, currentCommuting]);

  return (
    <div>
      <div className="flex justify-between">
        <li className="text-[#916aff]">
          <span className="text-black">출퇴근</span>
        </li>

        <div className="flex">
          <div>
            {value}
            {(Math.round(value * 100) / 100) % 1 == 0 ? ".0" : ""}
          </div>
          {type == "forecast" ? <AddForcastInfo type="commutingResult" /> : ""}
        </div>
      </div>

      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]"></div>
          <div className="absolute bg-[#bdd7ee] h-3 rounded-l-lg w-[60%]"></div>
        </div>
      </div>
    </div>
  );
};

export default CommutingResult;
