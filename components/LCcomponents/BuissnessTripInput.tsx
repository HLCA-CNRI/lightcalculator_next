import {memo} from "react";
import {useDispatch, useSelector} from "../../store/store";
import {getBaselineState, bSetRoundTrip} from "../../store/slices/baselineSlice";
import {getForecastState, fSetRoundTrip} from "../../store/slices/forecastSlice";

type BuissnessTripInputType = {
  country: string; // 화면에 보여지는 나라(한국어)
  value: string; // 저장되는 redux 값(영어)
  isBaseline: boolean; // baseline or forecast --> 불리언 값
};

function BuissnessTripInput({country, value, isBaseline}: BuissnessTripInputType) {
  const sVal = value as keyof typeof bRoundTrip; // 현제 값 baseline 이여도 forecast이여도 형식이 같아서 상과없음
  const {bRoundTrip} = useSelector(getBaselineState); // baseline 왕복 비행 값들
  const {fRoundTrip} = useSelector(getForecastState); // forecast 왕복 비행 값들
  const dispatch = useDispatch();

  // onChange 이벤트 핸들러 --> input 값 바뀔때마다 감시하고 적용시킴
  const handleChange = (event: any) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      if (isBaseline) {
        dispatch(bSetRoundTrip({...bRoundTrip, [value]: event.target.value}));
      } else {
        dispatch(fSetRoundTrip({...fRoundTrip, [value]: event.target.value}));
      }
    }
  };

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
