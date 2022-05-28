import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckBox from "./CheckBox";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetCommuting,
} from "../../store/slices/baselineSlice";
import {
  getForecastState,
  fSetCommuting,
} from "../../store/slices/forecastSlice";

import PercentInput from "./PercentInput";

type TransportationInputType = {
  type: string;
};

const TransportationInput = ({ type }: TransportationInputType) => {
  const { bCommuting } = useSelector(getBaselineState);
  const { fCommuting } = useSelector(getForecastState);
  const dispatch = useDispatch();

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "baseline") {
      dispatch(
        bSetCommuting({ ...bCommuting, setDefault: event.target.checked })
      );
    } else {
      dispatch(
        fSetCommuting({ ...fCommuting, setDefault: event.target.checked })
      );
    }
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (type == "baseline") {
        dispatch(
          bSetCommuting({ ...bCommuting, distance: parseInt(currentVal, 10) })
        );
      } else {
        dispatch(
          
          fSetCommuting({ ...fCommuting, distance: parseInt(currentVal, 10) })
        );
      }
    }
  };

  return (
    <div className=" w-[100%] ">
      <label className="inline-flex items-center w-[100%] justify-start pt-3 pl-3 ml-6 my-3">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4"
          onChange={handleDefaultChange}
        />
        <span className="ml-2">기본 값 적용</span>
      </label>

      <hr className="border-none h-1 bg-white"></hr>


      <div className = "flex justify-center m-2">
        <div className = "mr-2">평균 출퇴근 거리</div>
        <input type = "number" className = "w-12 mr-2 rounded" min = {0} onChange ={handleDistanceChange} ></input>
        <div>km</div>
      </div>

      <hr className="border-none h-1 bg-white"></hr>

      <div className="rounded-lg p-2  m-5">
        <div className="w-[100%] bg-slate-400 h-3 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-3">
            <div className="rounded-l-lg w-[30%] bg-orange-400 h-3"></div>
          </div>
        </div>

        <PercentInput Objectkey="commuting" value="car" isBaseline={type == "baseline" ? true : false} title = "자동차"
        />
        <PercentInput Objectkey="commuting" value="publicTransit" isBaseline={type == "baseline" ? true : false} title = "대중교통"
        />
        <PercentInput Objectkey="commuting" value="walkOrBike" isBaseline={type == "baseline" ? true : false} title = "도보 및 자전거"
        />
      </div>
    </div>
  );
};

export default TransportationInput;
