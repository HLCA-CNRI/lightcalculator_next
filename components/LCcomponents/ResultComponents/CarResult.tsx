import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "../../../store/store";
import { getBaselineState } from "../../../store/slices/baselineSlice";
import { getForecastState } from "../../../store/slices/forecastSlice";
import {
  getBaselineResultState,
  bSetCarResult,
} from "../../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetCarResult,
} from "../../../store/slices/forecastResultSlice";
import {
  calculateCars,
  numberWithCommas,
} from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type CarResultType = {
  type: string;
};

function CarResult({ type }: CarResultType) {
  const { bFuelType, bCompanyGasPrice } = useSelector(getBaselineState);
  const { fFuelType, fCompanyGasPrice } = useSelector(getForecastState);
  const { bAnnual } = useSelector(getBaselineResultState);
  const { fAnnual } = useSelector(getForecastResultState);

  const currentAnnual = type === "baseline" ? bAnnual : fAnnual;
  const currentFuelType = type === "baseline" ? bFuelType : fFuelType;
  const currentGasType =
    type === "baseline" ? bCompanyGasPrice : fCompanyGasPrice;
  const currentAction = type === "baseline" ? bSetCarResult : fSetCarResult;
  const dispatch = useDispatch();

  const [value, setValue] = useState(
    calculateCars(
      currentFuelType.gasoline,
      currentFuelType.diesel,
      currentFuelType.lpg,
      currentFuelType.hydrogen,
      currentFuelType.electric,
      currentGasType
    )
  );
  useEffect(() => {
    const num = calculateCars(
      currentFuelType.gasoline,
      currentFuelType.diesel,
      currentFuelType.lpg,
      currentFuelType.hydrogen,
      currentFuelType.electric,
      currentGasType
    );

    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(num));
  }, [value, currentFuelType, currentGasType]);

  return (
    <div>
      <div className="flex justify-between my-1">
        <li className="text-[#11c28d]">
          <span className="text-black">차량</span>
        </li>
        {/* TODO Change so that it reads the redux val  */}

        <div className="flex">
          <div>
            {numberWithCommas(value)}
            {(Math.round(value * 10) / 10) % 1 === 0 ? ".0" : ""}
          </div>
          {type === "forecast" ? <AddForcastInfo type="carResult" /> : ""}
        </div>
      </div>
      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]" />
          <div
            className="absolute bg-[#bdd7ee] h-3 rounded-l-lg "
            style={{ width: `${(value / currentAnnual) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarResult;
