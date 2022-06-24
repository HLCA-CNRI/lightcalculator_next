/* eslint-disable no-nested-ternary */
import { useState, useEffect } from "react";
import { getForecastResultState } from "../../../store/slices/forecastResultSlice";
import { getBaselineResultState } from "../../../store/slices/baslineResultSlice";
import {
  annualEmissions,
  annualEmissionsReduction,
  GreenEmissionToVehicleComp,
  RedEmissionToVehicleComp,
  numberWithCommas,
} from "../../../functions/ResultFunctions";
import { useSelector } from "../../../store/store";

function ResultMessage() {
  const { bAnnual } = useSelector(getBaselineResultState);
  const { fAnnual } = useSelector(getForecastResultState);
  const [annualEmissionVal, SetAnnualEmission] = useState(0);
  const [annualEmissionReductionVal, SetAnnualEmissionReduction] = useState(0);
  const [emissionToVehicleCompVal, SetEmissionToVehicleCompVal] = useState(0);
  const [messageColor, setMessageColor] = useState("");

  useEffect(() => {
    const reductionVal = annualEmissionsReduction(fAnnual, bAnnual);
    SetAnnualEmission(annualEmissions(fAnnual, bAnnual));
    SetAnnualEmissionReduction(reductionVal);

    if (reductionVal > 0.05) {
      SetEmissionToVehicleCompVal(RedEmissionToVehicleComp(fAnnual, bAnnual));
      setMessageColor("red");
    } else if (reductionVal < -0.05) {
      SetEmissionToVehicleCompVal(GreenEmissionToVehicleComp(fAnnual, bAnnual));
      setMessageColor("green");
    } else {
      setMessageColor("gray");
    }
  }, [bAnnual, fAnnual]);

  return (
    // TODO Change to if Else
    <div className="font-bold">
      {messageColor === "gray" ? (
        <span>
          Forecast 상황과 Baseline 상황에서의 연간 배출량이 큰 차이가 없습니다.
          재택근무 시행, 유류비 절약 등 다양한 배출량 감축 시도를 추천드립니다.
        </span>
      ) : messageColor === "green" ? (
        <span>
          Forecast 상황에 따르면{" "}
          <span className="text-green-600">
            연간 배출량이{" "}
            {numberWithCommas(parseFloat(annualEmissionVal.toFixed(1))).slice(
              1
            )}
            kgCO2e만큼 약 {annualEmissionReductionVal.toFixed(1).slice(1)}%
            줄어듭니다
          </span>
          . 이는 내연기관차{" "}
          <span className="text-green-600">
            {numberWithCommas(
              parseFloat(emissionToVehicleCompVal.toFixed(1))
            ).slice(1)}
            대
          </span>
          가 전기차로 전환되는 효과와 같습니다.
        </span>
      ) : (
        // When messageColor is red
        <span>
          Forecast 상황에 따르면{" "}
          <span className="text-red-400">
            연간 배출량이{" "}
            {numberWithCommas(parseFloat(annualEmissionVal.toFixed(1)))}
            kgCO2e만큼 약 {annualEmissionReductionVal.toFixed(1)}% 증가합니다
          </span>
          . 이는 화석연료 차량{" "}
          <span className="text-red-400">
            {numberWithCommas(parseFloat(emissionToVehicleCompVal.toFixed(1)))}
            대
          </span>
          가 늘어난 효과와 같습니다.
        </span>
      )}
    </div>
  );
}

export default ResultMessage;
