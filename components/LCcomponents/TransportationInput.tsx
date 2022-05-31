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
          className={`form-checkbox h-4 w-4 ${
            type == "baseline" ? "" : "accent-[#548235]"
          }`}
          onChange={handleDefaultChange}
        />

        <span className="ml-2">기본값 적용</span>
      </label>
      <hr className="border-none h-[2px] bg-white"></hr>
      <div className="flex w-[100%] justify-between">
        <div className=" w-[100%]  m-5 p-2 flex justify-between">
          <div className="mr-13">평균 출퇴근 거리</div>
          <div className = "flex pr-q">
            <input
              type="number"
              className="w-12 mr-2 rounded"
              min={0}
              onChange={handleDistanceChange}
              defaultValue={
                type == "baseline" ? bCommuting.distance : fCommuting.distance
              }
            ></input>
            <div>km</div>
          </div>
        </div>
      </div>
      <hr className="border-none  h-[2px] bg-white"></hr>
      <div className="rounded-lg p-2  m-5">
        <div className="relative h-3 rounded-lg">
          <div
            id="gas_input_red"
            className={`absolute ${
              type == "baseline" ? `bg-[#bdd7ee]` : `bg-[#c5e0b4]`
            }  h-3 rounded-lg w-[100%]`}
          ></div>

          <div
            className={`absolute ${
              type == "baseline" ? "bg-[#5b9bd5]" : "bg-[#70ad47]"
            }  h-3 rounded-l-lg w-[76%]`}
          ></div>
          <div
            className={`absolute ${
              type == "baseline" ? "bg-[#2f5597]" : "bg-[#385723]"
            } h-3 rounded-l-lg w-[36%]`}
          ></div>
        </div>

        <PercentInput
          Objectkey="commuting"
          value="car"
          isBaseline={type == "baseline" ? true : false}
          title="자동차"
          unit="%"
          color={type == "baseline" ? "#2f5597" : "#385723"}
        />
        <PercentInput
          Objectkey="commuting"
          value="publicTransit"
          isBaseline={type == "baseline" ? true : false}
          title="대중교통"
          unit="%"
          color={type == "baseline" ? "#5b9bd5" : "#70ad47"}
        />
        <PercentInput
          Objectkey="commuting"
          value="walkOrBike"
          isBaseline={type == "baseline" ? true : false}
          title="도보 및 자전거"
          unit="%"
          color={type == "baseline" ? "#bdd7ee" : "#c5e0b4"}
        />
      </div>
    </div>
  );
};

export default TransportationInput;
