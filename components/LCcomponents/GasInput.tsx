import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../../store/store";
import PercentInput from "./PercentInput";
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

function GasInput({ type }: GasInputType) {
  const { bFuelType } = useSelector(getBaselineState);
  const { fFuelType } = useSelector(getForecastState);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (type === "baseline") {
      setTotal(
        bFuelType.diesel +
          bFuelType.electric +
          bFuelType.gasoline +
          bFuelType.hydrogen +
          bFuelType.lpg
      );
    } else {
      setTotal(
        fFuelType.diesel +
          fFuelType.electric +
          fFuelType.gasoline +
          fFuelType.hydrogen +
          fFuelType.lpg
      );
    }
  }, [bFuelType, fFuelType]);

  const dispatch = useDispatch();

  // setFuel type will toggle between true and false true or false 이여도 기본 값이 적용됨
  const handleDefaultChange = () => {
    if (type === "baseline") {
      dispatch(
        bSetFuelType({ ...bFuelType, setDefault: !bFuelType.setDefault })
      );
    } else {
      dispatch(
        fSetFuelType({ ...fFuelType, setDefault: !fFuelType.setDefault })
      );
    }
  };

  return (
    <div className="w-[100%]">
      {type === "baseline" ? (
        <div className="rounded-lg p-2  m-5">
          <div className="w-[100%] mt-2 flex">
            <div
              className="bg-[#2f5597] h-3 rounded-l-lg"
              style={{ width: `${(bFuelType.gasoline / total) * 100}%` }}
            />
            <div
              className="bg-[#2e75b6] h-3"
              style={{ width: `${(bFuelType.diesel / total) * 100}%` }}
            />
            <div
              className="bg-[#5b9bd5] h-3"
              style={{ width: `${(bFuelType.lpg / total) * 100}%` }}
            />
            <div
              className="bg-[#9dc3e6] h-3 w-[2%]"
              style={{ width: `${(bFuelType.hydrogen / total) * 100}%` }}
            />
            <div
              className="bg-[#bdd7ee] h-3 w-[4%] rounded-r-lg"
              style={{ width: `${(bFuelType.electric / total) * 100}%` }}
            />
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type === "baseline"}
            title="휘발유"
            unit="대"
            color="#2f5597"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type === "baseline"}
            title="경유"
            unit="대"
            color="#2e75b6"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type === "baseline"}
            title="LPG"
            unit="대"
            color="#5b9bd5"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type === "baseline"}
            title="수소"
            unit="대"
            color="#9dc3e6"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type === "baseline"}
            title="전기"
            unit="대"
            color="#bdd7ee"
          />

          {/* <label className="flex justify-end pt-4">
      <button onClick={handleDefaultChange} className={`${type == "baseline" ? `bg-blue-600 hover:bg-blue-400` : `bg-lime-600 hover:bg-lime-500`} text-white font-bold py-2 px-4 rounded-full`}>
      기본값 적용
      </button>
          
      </label> */}
        </div>
      ) : (
        <div className="rounded-lg p-2  m-5">
          <div className="w-[100%] mt-2 flex">
            <div
              className="bg-[#385723] h-3 rounded-l-lg"
              style={{ width: `${(fFuelType.gasoline / total) * 100}%` }}
            />
            <div
              className="bg-[#548235] h-3"
              style={{ width: `${(fFuelType.diesel / total) * 100}%` }}
            />
            <div
              className="bg-[#70ad47] h-3"
              style={{ width: `${(fFuelType.lpg / total) * 100}%` }}
            />
            <div
              className="bg-[#a9d18e] h-3 w-[2%]"
              style={{ width: `${(fFuelType.hydrogen / total) * 100}%` }}
            />
            <div
              className="bg-[#c5e0b4] h-3 w-[4%] rounded-r-lg"
              style={{ width: `${(fFuelType.electric / total) * 100}%` }}
            />
          </div>

          <PercentInput
            Objectkey="fuel"
            value="gasoline"
            isBaseline={type === "baseline"}
            title="휘발유"
            unit="대"
            color="#385723"
          />
          <PercentInput
            Objectkey="fuel"
            value="diesel"
            isBaseline={type === "baseline"}
            title="경유"
            unit="대"
            color="#548235"
          />
          <PercentInput
            Objectkey="fuel"
            value="lpg"
            isBaseline={type === "baseline"}
            title="LPG"
            unit="대"
            color="#70ad47"
          />
          <PercentInput
            Objectkey="fuel"
            value="hydrogen"
            isBaseline={type === "baseline"}
            title="수소"
            unit="대"
            color="#a9d18e"
          />
          <PercentInput
            Objectkey="fuel"
            value="electric"
            isBaseline={type === "baseline"}
            title="전기"
            unit="대"
            color="#c5e0b4"
          />

          {/* <label className="flex justify-start pt-4">
      <button onClick={handleDefaultChange} className={`${type == "baseline" ? `bg-blue-600 hover:bg-blue-400` : `bg-lime-600 hover:bg-lime-500`} text-white font-bold py-2 px-4 rounded-lg`}>
      기본값 적용
      </button>
          
      </label> */}
        </div>
      )}
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

export default GasInput;
