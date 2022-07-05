import {useDispatch, useSelector} from "react-redux";
import {defaultBaseline, DefualtForecast} from "../../../functions/Defaults";
import {
  getBaselineState,
  bSetCompanyEmployeeSize,
  bSetFuelType,
  bSetCompanyGasPrice,
  bSetCommutingDays,
  bSetCommuting,
  bSetUseRenewableEnergy,
  bSetRoundTrip,
  bSetCompanySize,
  bSetDefault,
} from "../../../store/slices/baselineSlice";
import {
  fSetCompanyEmployeeSize,
  fSetFuelType,
  fSetCompanyGasPrice,
  fSetCommutingDays,
  fSetCommuting,
  fSetUseRenewableEnergy,
  fSetRoundTrip,
  fSetCompanySize,
} from "../../../store/slices/forecastSlice";

function ResetButton() {
  const {bFuelType, bCompanyEmployeeSize, bDefault} = useSelector(getBaselineState); // baseline fuel 값들
  const dispatch = useDispatch();

  const handleDefaultChange = () => {
    dispatch(bSetDefault(!bDefault));
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleDefaultChange}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        reset
      </button>
    </div>
  );
}

export default ResetButton;
