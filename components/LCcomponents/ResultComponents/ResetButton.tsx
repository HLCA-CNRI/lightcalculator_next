import {useDispatch, useSelector} from "react-redux";
import {defaultBaseline, DefualtForecast} from "../../../functions/Defaults";
import {getBaselineState, bSetDefault} from "../../../store/slices/baselineSlice";
import {getForecastState, fSetDefault} from "../../../store/slices/forecastSlice";

function ResetButton() {
  const {bDefault} = useSelector(getBaselineState);
  const {fDefault} = useSelector(getForecastState);
  const dispatch = useDispatch();

  const handleDefaultChange = () => {
    dispatch(bSetDefault(!bDefault));
    dispatch(fSetDefault(!fDefault));
  };
  return (
    <div>
      <button
        type="button"
        onClick={handleDefaultChange}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Reset
      </button>
    </div>
  );
}

export default ResetButton;
