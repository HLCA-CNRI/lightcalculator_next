import { useDispatch } from "../../../store/store";
import { getBaselineResultState } from "../../../store/slices/baslineResultSlice";
import { getForecastResultState } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "../../../store/store";
import React, { useState, useEffect } from "react";
import classnames from "tailwindcss-classnames";
import AnnualResult from "./AnnualResult";

type AddForcastInfoType = {
  type: string;
};
const AddForcastInfo = ({ type }: AddForcastInfoType) => {
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

  //TODO: Not good implementation
  useEffect(() => {
    if (type == "annualResult") {
      setVal(Math.round(((fAnnual - bAnnual) / bAnnual) * 100 * 10) / 10);
    } else if (type == "carResult" && bCalculateCar != 0) {
      setVal(
        Math.round(
          ((fCalculateCar - bCalculateCar) / bCalculateCar) * 100 * 10) / 10 );
    } else if (type == "buildingResult" && bCalculateBuilding != 0) {
      setVal(
        Math.round(
          ((fCalculateBuilding - bCalculateBuilding) / bCalculateBuilding) * 100 *10) / 10);
    } else if (type == "commutingResult" && bCalculateCommuting != 0) {
      setVal(
        Math.round(
          ((fCalculateCommuting - bCalculateCommuting) / bCalculateCommuting) *100 *10) / 10);
    } else if (type == "flightsResult") {
      setVal(
        Math.round(
          ((fCalculateFlights - bClaculateFlights) / bClaculateFlights) *100 *10) / 10);
    } else if (type == "remoteWorkResult" && bCalculateCommuting != 0) {
      setVal(
        Math.round(
          ((fCalculateRemoteWork - bCalculteRemoteWork) / bCalculteRemoteWork) *100 *10) / 10);
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
    //TODO : combine by setting conditional to style
    <div className="ml-2">

      {type == "annualResult" ? (
        <div className={` rounded-full px-1 ${(value > 0 ) ? `bg-red-200`:`bg-green-200 `}`}>
          {isNaN(value) ? "0.0":(value > 0 ) ? "+"+value:value}
          {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}%
        </div>
      ) : (
        <div className = {`${(value > 0 ) ? `text-red-900`:`text-green-900`}`}>
          {isNaN(value) ? "0.0":(value > 0 ) ? "+"+value:value}
          {(Math.round(value * 10) / 10) % 1 == 0 ? ".0" : ""}%
        </div>
      )}
    </div>
  );
};

export default AddForcastInfo;
