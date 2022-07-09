import React, {useState, useEffect} from "react";
import {getBaselineResultState} from "../../../store/slices/baslineResultSlice";
import {getForecastResultState} from "../../../store/slices/forecastResultSlice";
import {useSelector} from "../../../store/store";
import {calculateForecastInfo} from "../../../functions/ResultFunctions";

type AddForcastInfoType = {
  type: string;
};
function AddForcastInfo({type}: AddForcastInfoType) {
  const {
    bAnnual,
    bCalculateCar,
    bCalculateBuilding,
    bCalculteRemoteWork,
    bCalculateCommuting,
    bClaculateFlights,
  } = useSelector(getBaselineResultState);
  const {
    fAnnual,
    fCalculateCar,
    fCalculateBuilding,
    fCalculateRemoteWork,
    fCalculateCommuting,
    fCalculateFlights,
  } = useSelector(getForecastResultState);

  const [value, setVal] = useState(0);

  useEffect(() => {
    if (type === "annualResult") {
      setVal(calculateForecastInfo(fAnnual, bAnnual));
    } else if (type === "carResult" && bCalculateCar !== 0) {
      setVal(calculateForecastInfo(fCalculateCar, bCalculateCar));
    } else if (type === "buildingResult" && bCalculateBuilding !== 0) {
      setVal(calculateForecastInfo(fCalculateBuilding, bCalculateBuilding));
    } else if (type === "commutingResult" && bCalculateCommuting !== 0) {
      setVal(calculateForecastInfo(fCalculateCommuting, bCalculateCommuting));
    } else if (type === "flightsResult") {
      setVal(calculateForecastInfo(fCalculateFlights, bClaculateFlights));
    } else if (type === "remoteWorkResult" && bCalculateCommuting !== 0) {
      setVal(calculateForecastInfo(fCalculateRemoteWork, bCalculteRemoteWork));
    } else {
      setVal(0);
    }
  }, [
    bAnnual,
    bCalculateCar,
    bCalculateBuilding,
    bCalculteRemoteWork,
    bCalculateCommuting,
    bClaculateFlights,
    fAnnual,
    fCalculateCar,
    fCalculateBuilding,
    fCalculateRemoteWork,
    fCalculateCommuting,
    fCalculateFlights,
  ]);

  return (
    <div className="flex justify-end w-[68px]">
      {type === "annualResult" ? (
        <div
          className={` rounded-full px-1 ${
            value < 0.05 && value > -0.05
              ? `bg-slate-300`
              : value > 0.05
              ? `bg-red-200 `
              : `bg-green-200`
          } border`}>
          {Number.isNaN(value)
            ? "0.0%"
            : value > 0
            ? `+${Number.isFinite(value) ? value.toFixed(1) : "∞"}`
            : value === 0
            ? "0.0"
            : value.toFixed(1)}
          {!Number.isFinite(value) ? "" : "%"}
        </div>
      ) : (
        <div
          className={`${
            (value < 0.05 && value > -0.05) || Number.isNaN(value)
              ? ``
              : value > 0.05
              ? `text-red-400 `
              : `text-green-600`
          }`}>
          {Number.isNaN(value)
            ? "0.0%"
            : value > 0
            ? `+${Number.isFinite(value) ? value.toFixed(1) : "∞"}`
            : value === 0
            ? "0.0"
            : value.toFixed(1)}
          {!Number.isFinite(value) ? "" : "%"}
        </div>
      )}
    </div>
  );
}

export default AddForcastInfo;
