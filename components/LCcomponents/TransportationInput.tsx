import React, {useState, useEffect, useRef, memo} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "../../store/store";
import {getBaselineState, bSetCommuting} from "../../store/slices/baselineSlice";
import {getForecastState, fSetCommuting} from "../../store/slices/forecastSlice";
import {defaultBaseline, DefualtForecast} from "../../functions/Defaults";

import PercentInput from "./PercentInput";

type TransportationInputType = {
  type: string; // baseline or forecast
};

function TransportationInput({type}: TransportationInputType) {
  const {bCommuting} = useSelector(getBaselineState); // baseline commuting 값들
  const {fCommuting} = useSelector(getForecastState); // forecast commuting 값들
  const [total, setTotal] = useState(0); // commuting 종류 다 더한 값

  const bDistanceInput = useRef() as React.MutableRefObject<HTMLInputElement>; // baseline 평균 출퇴근 거리 ref
  const fDistanceInput = useRef() as React.MutableRefObject<HTMLInputElement>; // forecast 평균 출퇴근 거리 ref

  const dispatch = useDispatch();
  // useEffect으로 total 값 업데이트
  useEffect(() => {
    if (type === "baseline") {
      setTotal(bCommuting.car + bCommuting.publicTransit + bCommuting.walkOrBike);
    } else {
      setTotal(fCommuting.car + fCommuting.publicTransit + fCommuting.walkOrBike);
    }
  }, [fCommuting, bCommuting]);

  // onClick 이벤트 핸들러 --> 기본 값 적용함 1.방식 기본값, 2평균 출퇴근 거리 기본값
  const handleDefaultChange = () => {
    if (type === "baseline") {
      dispatch(bSetCommuting({...bCommuting, setDefault: !bCommuting.setDefault}));
      bDistanceInput.current.value = defaultBaseline.bCommuting.distance.toString();
    } else {
      dispatch(fSetCommuting({...fCommuting, setDefault: !fCommuting.setDefault}));
      fDistanceInput.current.value = DefualtForecast.fCommuting.distance.toString();
    }
  };
  // onChange 이벤트 핸들러 --> 평균 출퇴근거리 값 바뀔때마다 감시하고 적용시킴
  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      if (type === "baseline") {
        dispatch(bSetCommuting({...bCommuting, distance: parseInt(currentVal, 10)}));
      } else {
        dispatch(fSetCommuting({...fCommuting, distance: parseInt(currentVal, 10)}));
      }
    } else if (type === "baseline") {
      dispatch(bSetCommuting({...bCommuting, distance: 0}));
    } else {
      dispatch(fSetCommuting({...fCommuting, distance: 0}));
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
      {/* 평균 출퇴근 거리 input */}
      <div className="flex w-[100%] justify-between">
        <div className=" w-[100%]  m-5 p-2 flex justify-between">
          <div className="mr-13">평균 출퇴근 거리</div>
          <div className="flex pr-q">
            <input
              ref={type === "baseline" ? bDistanceInput : fDistanceInput}
              type="number"
              className="w-12 mr-2 rounded"
              min={-1}
              onChange={handleDistanceChange}
              value={
                type === "baseline"
                  ? bCommuting.distance.toString()
                  : fCommuting.distance.toString()
              }
            />
            <div>km</div>
          </div>
        </div>
      </div>
      <hr className="border-none  h-[2px] bg-white" />
      {/* 프로그래스 바 */}
      <div className="rounded-lg p-2  m-5">
        <div className="w-[100%] mt-2 flex">
          <div
            className={`${type === "baseline" ? "bg-[#2f5597]" : "bg-[#385723]"} h-3 rounded-l-lg`}
            style={{
              width: `${
                type === "baseline"
                  ? (bCommuting.car / total) * 100
                  : (fCommuting.car / total) * 100
              }%`,
            }}
          />
          <div
            className={`${type === "baseline" ? "bg-[#5b9bd5]" : "bg-[#70ad47]"} h-3`}
            style={{
              width: `${
                type === "baseline"
                  ? (bCommuting.publicTransit / total) * 100
                  : (fCommuting.publicTransit / total) * 100
              }%`,
            }}
          />
          <div
            className={`${type === "baseline" ? "bg-[#bdd7ee]" : "bg-[#c5e0b4]"} rounded-r-lg h-3`}
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
      {/* 기본값 적용하는 부분 */}
      <div className="inline-flex items-center w-[100%] justify-end pr-5  my-5">
        <button
          type="button"
          onClick={handleDefaultChange}
          className={`${
            type === "baseline" ? `bg-blue-600 hover:bg-blue-400` : `bg-green-700 hover:bg-lime-600`
          } text-white font-bold py-2 px-4 rounded-lg`}>
          기본값 적용
        </button>
      </div>
    </div>
  );
}

export default memo(TransportationInput);
