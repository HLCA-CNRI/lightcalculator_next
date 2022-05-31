import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import PercentInput from "./PercentInput";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetFuelType,
} from "../../store/slices/baselineSlice";
import {
  getForecastState,
  fSetFuelType,
} from "../../store/slices/forecastSlice";

type GasInputType = {
  type: string;
};

const GasInput = ({ type }: GasInputType) => {
  const { bFuelType } = useSelector(getBaselineState);
  const { fFuelType } = useSelector(getForecastState);

  const dispatch = useDispatch();

  const handleDefaultChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type == "baseline") {
      dispatch(
        bSetFuelType({ ...bFuelType, setDefault: event.target.checked })
      );
    } else {
      dispatch(
        fSetFuelType({ ...fFuelType, setDefault: event.target.checked })
      );
    }
  };

  return (
    <div className="w-[100%]">
      <label className="inline-flex items-center w-[100%] justify-start pt-2 pl-3 ml-6 my-3">
      {
          type == "baseline" ? 
          <input type="checkbox" className="form-checkbox h-4 w-4 " onChange={handleDefaultChange}/> :
          <input type="checkbox" className="form-checkbox h-4 w-4 accent-[#548235] " onChange={handleDefaultChange}/>
        }
        <span className="ml-2">기본값 적용</span>
      </label>
      <hr className="border-none h-[2px] bg-white"></hr>

      {type == "baseline" ? (
        <div className="rounded-lg p-2  m-5">
          <div className="relative h-3 rounded-lg">
            <div
              id="gas_input_red"
              className="absolute bg-[#bdd7ee] h-3 rounded-lg w-[100%]"
            ></div>
            <div className="absolute bg-[#9dc3e6] h-3 rounded-l-lg w-[96%]"></div>
            <div className="absolute bg-[#5b9bd5] h-3 rounded-l-lg w-[94%]"></div>
            <div className="absolute bg-[#2e75b6] h-3 rounded-l-lg w-[86%]"></div>
            <div className="absolute bg-[#2f5597] h-3 rounded-l-lg w-[47%]"></div>
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type == "baseline" ? true : false}
            title="휘발유"
            unit="대"
            color="#2f5597"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type == "baseline" ? true : false}
            title="경유"
            unit="대"
            color="#2e75b6"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type == "baseline" ? true : false}
            title="LPG"
            unit="대"
            color="#5b9bd5"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type == "baseline" ? true : false}
            title="수소"
            unit="대"
            color="#9dc3e6"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type == "baseline" ? true : false}
            title="전기"
            unit="대"
            color="#bdd7ee"
          />
        </div>
      ) : (
        <div className="rounded-lg p-2  m-5">
          <div className="relative h-3 rounded-lg">
            <div
              id="gas_input_red"
              className="absolute bg-[#c5e0b4] h-3 rounded-lg w-[100%]"
            ></div>
            <div className="absolute bg-[#a9d18e] h-3 rounded-l-lg w-[96%]"></div>
            <div className="absolute bg-[#70ad47] h-3 rounded-l-lg w-[94%]"></div>
            <div className="absolute bg-[#548235] h-3 rounded-l-lg w-[86%]"></div>
            <div className="absolute bg-[#385723] h-3 rounded-l-lg w-[47%]"></div>
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type == "baseline" ? true : false}
            title="휘발유"
            unit="대"
            color="#385723"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type == "baseline" ? true : false}
            title="경유"
            unit="대"
            color="#548235"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type == "baseline" ? true : false}
            title="LPG"
            unit="대"
            color="#70ad47"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type == "baseline" ? true : false}
            title="수소"
            unit="대"
            color="#a9d18e"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type == "baseline" ? true : false}
            title="전기"
            unit="대"
            color="#c5e0b4"
          />
        </div>
      )}
    </div>
  );
};

export default GasInput;
