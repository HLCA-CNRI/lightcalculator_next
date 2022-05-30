import classnames from "tailwindcss-classnames";
import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { calculateCars } from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type CarResultType = {
  type: string;
};

const CarResult = ({ type }: CarResultType) => {
  const { bFuelType, bCompanyGasPrice } = useSelector(getBaselineState);
  const { fFuelType, fCompanyGasPrice } = useSelector(getForecastState);
  const { bCalculateCar } = useSelector(getBaselineResultState);
  const { fCalculateCar } = useSelector(getForecastResultState);

  const currentFuelType = type == "baseline" ? bFuelType : fFuelType;
  const currentGasType =
    type == "baseline" ? bCompanyGasPrice : fCompanyGasPrice;
  const currentType = type == "baseline" ? bCalculateCar : fCalculateCar;
  const currentAction = type == "baseline" ? bSetCarResult : fSetCarResult;
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
    dispatch(currentAction(value));
  }, [value, currentFuelType, currentGasType]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-2 text-2xl ">&#x2022;</div>
          <div>차량</div>
        </div>
        {/* Change so that it reads the redux val  */}
        <div className="flex">
          <div>
            {value}
            {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}
          </div>
          {type == "forecast" ? <AddForcastInfo type="carResult" /> : ""}
        </div>
      </div>
      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]"></div>
          <div className="absolute bg-[#bdd7ee] h-3 rounded-l-lg w-[80%]"></div>
        </div>
      </div>
    </div>
  );
};

export default CarResult;
