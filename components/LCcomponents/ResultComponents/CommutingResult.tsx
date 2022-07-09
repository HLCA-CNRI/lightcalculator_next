import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "../../../store/store";
import {getBaselineState} from "../../../store/slices/baselineSlice";
import {getForecastState} from "../../../store/slices/forecastSlice";
import {
  getBaselineResultState,
  bSetCommunityResult,
} from "../../../store/slices/baslineResultSlice";
import {
  getForecastResultState,
  fSetCommunityResult,
} from "../../../store/slices/forecastResultSlice";
import {calculateCommuting, numberWithCommas} from "../../../functions/ResultFunctions";
import AddForcastInfo from "./AddForcastInfo";

type CommutingResultType = {
  type: string;
};

function CommutingResult({type}: CommutingResultType) {
  const {bCompanyEmployeeSize, bCommutingDays, bCommuting} = useSelector(getBaselineState);
  const {fCompanyEmployeeSize, fCommutingDays, fCommuting} = useSelector(getForecastState);

  const {bAnnual} = useSelector(getBaselineResultState);
  const {fAnnual} = useSelector(getForecastResultState);

  const currentAnnual = type === "baseline" ? bAnnual : fAnnual;

  const currentCompanyEmployeeSize =
    type === "baseline" ? bCompanyEmployeeSize : fCompanyEmployeeSize;
  const currentCommutingDays = type === "baseline" ? bCommutingDays : fCommutingDays;
  const currentCommuting = type === "baseline" ? bCommuting : fCommuting;
  const currentAction = type === "baseline" ? bSetCommunityResult : fSetCommunityResult;

  const dispatch = useDispatch();

  const [value, setValue] = useState(
    calculateCommuting(
      currentCompanyEmployeeSize,
      currentCommutingDays,
      currentCommuting.distance,
      currentCommuting.car,
      currentCommuting.publicTransit,
      currentCommuting.walkOrBike
    )
  );

  useEffect(() => {
    const num = calculateCommuting(
      currentCompanyEmployeeSize,
      currentCommutingDays,
      currentCommuting.distance,
      currentCommuting.car,
      currentCommuting.publicTransit,
      currentCommuting.walkOrBike
    );
    setValue(Math.round(num * 10) / 10);
    dispatch(currentAction(num));
  }, [currentCompanyEmployeeSize, currentCommutingDays, currentCommuting]);

  return (
    <div>
      <div className="flex justify-between">
        <li className="text-[#916aff]">
          <span className="text-black">출퇴근</span>
        </li>

        <div className="flex ">
          <div>
            {numberWithCommas(value)}
            {(Math.round(value * 100) / 100) % 1 === 0 ? ".0" : ""}
          </div>
          {type === "forecast" ? <AddForcastInfo type="commutingResult" /> : ""}
        </div>
      </div>

      <div className="">
        <div className="relative h-3 rounded-lg">
          <div className="absolute bg-[#e1e1e1] h-3 rounded-lg w-[100%]" />
          <div
            className="absolute bg-[#bdd7ee] h-3 rounded-l-lg w-[60%]"
            style={{width: `${(value / currentAnnual) * 100}%`}}
          />
        </div>
      </div>
    </div>
  );
}

export default CommutingResult;
