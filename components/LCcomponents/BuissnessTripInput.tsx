/* eslint-disable use-isnan */
import {memo, useEffect} from "react";
import {useDispatch, useSelector} from "../../store/store";
import {defaultBaseline, DefualtForecast} from "../../functions/Defaults";
import {getBaselineState, bSetRoundTrip} from "../../store/slices/baselineSlice";
import {getForecastState, fSetRoundTrip} from "../../store/slices/forecastSlice";

type BuissnessTripInputType = {
  country: string;
  value: string;
  isBaseline: boolean;
};

function BuissnessTripInput({country, value, isBaseline}: BuissnessTripInputType) {
  const {bRoundTrip, bDefault} = useSelector(getBaselineState);
  const {fRoundTrip, fDefault} = useSelector(getForecastState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      bSetRoundTrip({
        ...bRoundTrip,
        asia: defaultBaseline.bRoundTrip.asia,
        europe: defaultBaseline.bRoundTrip.europe,
        northAmerica: defaultBaseline.bRoundTrip.northAmerica,
        southAmerica: defaultBaseline.bRoundTrip.southAmerica,
        oceana: defaultBaseline.bRoundTrip.oceana,
        africa: defaultBaseline.bRoundTrip.africa,
      })
    );
    dispatch(
      fSetRoundTrip({
        ...fRoundTrip,
        asia: DefualtForecast.fRoundTrip.asia,
        europe: DefualtForecast.fRoundTrip.europe,
        northAmerica: DefualtForecast.fRoundTrip.northAmerica,
        southAmerica: DefualtForecast.fRoundTrip.southAmerica,
        oceana: DefualtForecast.fRoundTrip.oceana,
        africa: DefualtForecast.fRoundTrip.africa,
      })
    );
  }, [bDefault, fDefault]);

  const handleChange = (event: any) => {
    const currentVal = event.currentTarget.value;
    console.log(currentVal);
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      if (isBaseline) {
        dispatch(bSetRoundTrip({...bRoundTrip, [value]: parseInt(currentVal, 10)}));
      } else {
        dispatch(fSetRoundTrip({...fRoundTrip, [value]: parseInt(currentVal, 10)}));
      }
    } else if (isBaseline) {
      dispatch(bSetRoundTrip({...bRoundTrip, [value]: 0}));
    } else {
      dispatch(fSetRoundTrip({...fRoundTrip, [value]: 0}));
    }
  };

  const defaultValue = isBaseline
    ? bRoundTrip[value as keyof typeof bRoundTrip]
    : fRoundTrip[value as keyof typeof bRoundTrip];

  return (
    <div className="flex justify-between pb-3">
      <div className="pl-2">{country}</div>
      <div className="flex  pr-5">
        <input
          type="number"
          min="0"
          value={defaultValue.toString()}
          className="w-12 text-gray-700 bg-white rounded"
          onChange={handleChange}
        />
        <div>회</div>
      </div>
    </div>
  );
}

export default memo(BuissnessTripInput);
