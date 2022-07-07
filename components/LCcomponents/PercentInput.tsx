import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "../../store/store";
import {defaultBaseline, DefualtForecast} from "../../functions/Defaults";
import {getBaselineState, bSetFuelType, bSetCommuting} from "../../store/slices/baselineSlice";
import {getForecastState, fSetFuelType, fSetCommuting} from "../../store/slices/forecastSlice";

type PercentInputType = {
  Objectkey: string; //
  value: string;
  isBaseline: boolean;
  title: string;
  unit: string;
  color: string;
};

function PercentInput({Objectkey, value, isBaseline, title, unit, color}: PercentInputType) {
  const {bFuelType, bCommuting, bDefault} = useSelector(getBaselineState);
  const {fFuelType, fCommuting, fDefault} = useSelector(getForecastState);
  const dispatch = useDispatch();
  // baseline 출퇴근 거리 및 방식 기본값 적용하는 useEffect
  useEffect(() => {
    if (Objectkey === "commuting" && isBaseline) {
      dispatch(
        bSetCommuting({
          ...bCommuting,
          distance: defaultBaseline.bCommuting.distance,
          car: defaultBaseline.bCommuting.car,
          publicTransit: defaultBaseline.bCommuting.publicTransit,
          walkOrBike: defaultBaseline.bCommuting.walkOrBike,
        })
      );
    }
  }, [bCommuting.setDefault, bDefault]);
  // baseline 차량 종류별 대수 기본값 적용하는 부분 useEffect
  useEffect(() => {
    if (Objectkey === "fuel" && isBaseline) {
      dispatch(
        bSetFuelType({
          ...bFuelType,
          gasoline: defaultBaseline.bFuelType.gasoline,
          diesel: defaultBaseline.bFuelType.diesel,
          lpg: defaultBaseline.bFuelType.lpg,
          hydrogen: defaultBaseline.bFuelType.hydrogen,
          electric: defaultBaseline.bFuelType.electric,
        })
      );
    }
  }, [bFuelType.setDefault, bDefault]);
  // forecast 출퇴근 거리 및 방식 기본값 적용하는 useEffect
  useEffect(() => {
    if (Objectkey === "commuting" && !isBaseline) {
      dispatch(
        fSetCommuting({
          ...fCommuting,
          distance: DefualtForecast.fCommuting.distance,
          car: DefualtForecast.fCommuting.car,
          publicTransit: DefualtForecast.fCommuting.publicTransit,
          walkOrBike: DefualtForecast.fCommuting.walkOrBike,
        })
      );
    }
  }, [fCommuting.setDefault, fDefault]);
  // forecast 차량 종류별 대수 기본값 적용하는 부분 useEffect
  useEffect(() => {
    if (Objectkey === "fuel" && !isBaseline) {
      dispatch(
        fSetFuelType({
          ...fFuelType,
          gasoline: DefualtForecast.fFuelType.gasoline,
          diesel: DefualtForecast.fFuelType.diesel,
          lpg: DefualtForecast.fFuelType.lpg,
          hydrogen: DefualtForecast.fFuelType.hydrogen,
          electric: DefualtForecast.fFuelType.electric,
        })
      );
    }
  }, [fFuelType.setDefault, fDefault]);

  // onChange 이밴트 핸들러 --> 바뀌는 값 감시하고 적용시킴
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      if (Objectkey === "commuting" && isBaseline) {
        dispatch(
          bSetCommuting({
            ...bCommuting,
            [value]: parseInt(event.target.value, 10),
          })
        );
      } else if (Objectkey === "fuel" && isBaseline) {
        dispatch(
          bSetFuelType({
            ...bFuelType,
            [value]: parseInt(event.target.value, 10),
          })
        );
      } else if (Objectkey === "commuting" && !isBaseline) {
        dispatch(
          fSetCommuting({
            ...fCommuting,
            [value]: parseInt(event.target.value, 10),
          })
        );
      } else if (Objectkey === "fuel" && !isBaseline) {
        dispatch(
          fSetFuelType({
            ...fFuelType,
            [value]: parseInt(event.target.value, 10),
          })
        );
      }
    } else if (Objectkey === "commuting" && isBaseline) {
      dispatch(
        bSetCommuting({
          ...bCommuting,
          [value]: 0,
        })
      );
    } else if (Objectkey === "fuel" && isBaseline) {
      dispatch(
        bSetFuelType({
          ...bFuelType,
          [value]: 0,
        })
      );
    } else if (Objectkey === "commuting" && !isBaseline) {
      dispatch(
        fSetCommuting({
          ...fCommuting,
          [value]: 0,
        })
      );
    } else if (Objectkey === "fuel" && !isBaseline) {
      dispatch(
        fSetFuelType({
          ...fFuelType,
          [value]: 0,
        })
      );
    }
  };

  const initialFuelObject = isBaseline ? bFuelType : fFuelType; // Objectkey 가 fuel 일 경우
  const initialCommutingObject = isBaseline ? bCommuting : fCommuting; // Objectkey 가 commuting 일 경우
  // initial value 값
  const defaultValue =
    Objectkey === "commuting"
      ? initialCommutingObject[value as keyof typeof bCommuting].toString()
      : initialFuelObject[value as keyof typeof bFuelType].toString();

  return (
    <div className="flex w-[100%]  h-[3] m-2 p-1 justify-between px-2">
      <div className="flex flex-col content-center">
        <li style={{color}}>
          <span className="text-black">{title}</span>
        </li>
      </div>
      <div id="percentVal" className="mr-3 via-green-100 flex">
        <input
          type="number"
          min={0}
          max={Objectkey === "commuting" ? 100 : ""}
          value={defaultValue}
          className="w-12 text-gray-700 bg-white rounded"
          onChange={handleChange}
        />
        <div className="ml-2">{unit}</div>
      </div>
    </div>
  );
}

export default memo(PercentInput);
