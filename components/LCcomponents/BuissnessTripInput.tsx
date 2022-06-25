import {memo} from "react";
import {useDispatch, useSelector} from "../../store/store";
import {getBaselineState, bSetRoundTrip} from "../../store/slices/baselineSlice";
import {getForecastState, fSetRoundTrip} from "../../store/slices/forecastSlice";

type BuissnessTripInputType = {
  country: string;
  value: string;
  isBaseline: boolean;
};

function BuissnessTripInput({country, value, isBaseline}: BuissnessTripInputType) {
  const {bRoundTrip} = useSelector(getBaselineState);
  const {fRoundTrip} = useSelector(getForecastState);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (isBaseline) {
        dispatch(bSetRoundTrip({...bRoundTrip, [value]: event.target.value}));
      } else {
        dispatch(fSetRoundTrip({...fRoundTrip, [value]: event.target.value}));
      }
    }
  };

  const sVal = value as keyof typeof bRoundTrip;

  return (
    <div className="flex justify-between pb-3">
      <div className="pl-2">{country}</div>
      <div className="flex  pr-5">
        <input
          type="number"
          className="w-12 rounded"
          min={0}
          defaultValue={isBaseline ? bRoundTrip[sVal] : fRoundTrip[sVal]}
          onChange={handleChange}
        />
        <div>회</div>
      </div>
    </div>
  );
}

export default memo(BuissnessTripInput);
