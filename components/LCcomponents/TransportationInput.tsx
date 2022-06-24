import React, { useState, useEffect, useRef, memo } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";
import {
  getBaselineState,
  bSetCommuting,
} from "../../store/slices/baselineSlice";
import {
  getForecastState,
  fSetCommuting,
} from "../../store/slices/forecastSlice";
import { defaultBaseline, DefualtForecast } from "../../functions/Defaults";

import PercentInput from "./PercentInput";

type TransportationInputType = {
  type: string;
};

function TransportationInput({ type }: TransportationInputType) {
  const { bCommuting } = useSelector(getBaselineState);
  const { fCommuting } = useSelector(getForecastState);
  const [total, setTotal] = useState(0);

  const fcheckBox = useRef() as React.MutableRefObject<HTMLInputElement>;
  const bcheckBox = useRef() as React.MutableRefObject<HTMLInputElement>;
  const bDistanceInput = useRef() as React.MutableRefObject<HTMLInputElement>;
  const fDistanceInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "baseline") {
      setTotal(
        bCommuting.car + bCommuting.publicTransit + bCommuting.walkOrBike
      );
    } else {
      setTotal(
        fCommuting.car + fCommuting.publicTransit + fCommuting.walkOrBike
      );
    }
  }, [fCommuting, bCommuting]);

  useEffect(() => {
    if (bcheckBox.current !== undefined && bcheckBox.current.checked) {
      bcheckBox.current.checked = false;
      dispatch(bSetCommuting({ ...bCommuting, setDefault: false }));
    }
  }, [
    bCommuting.car,
    bCommuting.publicTransit,
    bCommuting.walkOrBike,
    bCommuting.distance,
  ]);

  useEffect(() => {
    if (fcheckBox.current !== undefined && fcheckBox.current.checked) {
      fcheckBox.current.checked = false;
      dispatch(fSetCommuting({ ...fCommuting, setDefault: false }));
    }
  }, [
    fCommuting.car,
    fCommuting.publicTransit,
    fCommuting.walkOrBike,
    fCommuting.distance,
  ]);

  useEffect(() => {
    if (
      bDistanceInput.current !== undefined &&
      bCommuting.setDefault === true
    ) {
      bDistanceInput.current.value =
        defaultBaseline.bCommuting.distance.toString();
    }
  }, [bCommuting.setDefault]);

  useEffect(() => {
    if (
      fDistanceInput.current !== undefined &&
      fCommuting.setDefault === true
    ) {
      fDistanceInput.current.value =
        DefualtForecast.fCommuting.distance.toString();
    }
  }, [fCommuting.setDefault]);

  const handleDefaultChange = () => {
    if (type === "baseline") {
      dispatch(
        bSetCommuting({ ...bCommuting, setDefault: !bCommuting.setDefault })
      );
    } else {
      dispatch(
        fSetCommuting({ ...fCommuting, setDefault: !fCommuting.setDefault })
      );
    }
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (type === "baseline") {
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
      <div className="  w-[100%] text-lg visible md:hidden">
        {type === "baseline" ? (
          <div className="ml-4 py-2">Baseline</div>
        ) : (
          <div className="ml-4 py-2">Forecast</div>
        )}

        <hr className="border-none  h-[2px] bg-white" />
      </div>
      <div className="flex w-[100%] justify-between">
        <div className=" w-[100%]  m-5 p-2 flex justify-between">
          <div className="mr-13">평균 출퇴근 거리</div>
          <div className="flex pr-q">
            <input
              ref={type === "baseline" ? bDistanceInput : fDistanceInput}
              type="number"
              className="w-12 mr-2 rounded"
              min={0}
              onChange={handleDistanceChange}
              defaultValue={
                type === "baseline" ? bCommuting.distance : fCommuting.distance
              }
            />
            <div>km</div>
          </div>
        </div>
      </div>
      <hr className="border-none  h-[2px] bg-white" />
      <div className="rounded-lg p-2  m-5">
        <div className="w-[100%] mt-2 flex">
          <div
            className={`${
              type === "baseline" ? "bg-[#2f5597]" : "bg-[#385723]"
            } h-3 rounded-l-lg`}
            style={{
              width: `${
                type === "baseline"
                  ? (bCommuting.car / total) * 100
                  : (fCommuting.car / total) * 100
              }%`,
            }}
          />
          <div
            className={`${
              type === "baseline" ? "bg-[#5b9bd5]" : "bg-[#70ad47]"
            } h-3`}
            style={{
              width: `${
                type === "baseline"
                  ? (bCommuting.publicTransit / total) * 100
                  : (fCommuting.publicTransit / total) * 100
              }%`,
            }}
          />
          <div
            className={`${
              type === "baseline" ? "bg-[#bdd7ee]" : "bg-[#c5e0b4]"
            } rounded-r-lg h-3`}
            style={{
              width: `${
                type === "baseline"
                  ? (bCommuting.walkOrBike / total) * 100
                  : (fCommuting.walkOrBike / total) * 100
              }%`,
            }}
          />
        </div>

        <PercentInput
          Objectkey="commuting"
          value="car"
          isBaseline={type === "baseline"}
          title="자동차"
          unit="%"
          color={type === "baseline" ? "#2f5597" : "#385723"}
        />
        <PercentInput
          Objectkey="commuting"
          value="publicTransit"
          isBaseline={type === "baseline"}
          title="대중교통"
          unit="%"
          color={type === "baseline" ? "#5b9bd5" : "#70ad47"}
        />
        <PercentInput
          Objectkey="commuting"
          value="walkOrBike"
          isBaseline={type === "baseline"}
          title="도보 및 자전거"
          unit="%"
          color={type === "baseline" ? "#bdd7ee" : "#c5e0b4"}
        />
      </div>
      <hr className="border-none h-[2px] bg-white" />
      <label className="inline-flex items-center w-[100%] justify-end pr-5  my-5">
        <button
          type="button"
          onClick={handleDefaultChange}
          className={`${
            type === "baseline"
              ? `bg-blue-600 hover:bg-blue-400`
              : `bg-green-700 hover:bg-lime-600`
          } text-white font-bold py-2 px-4 rounded-lg`}
        >
          기본값 적용
        </button>
      </label>
    </div>
  );
}

export default memo(TransportationInput);
