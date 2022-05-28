import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import { useSelector } from "../../store/store";
import { getBaselineState,bSetRoundTrip } from "../../store/slices/baselineSlice";
import { getForecastState,fSetRoundTrip } from "../../store/slices/forecastSlice";

type BuissnessTripInputType = {
  country: string;
  value: string;
  isBaseline:boolean;
};

const BuissnessTripInput = ({ country, value ,isBaseline}: BuissnessTripInputType) => {
  const { bRoundTrip } = useSelector(getBaselineState);
  const {fRoundTrip} = useSelector(getForecastState)
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      if (isBaseline){
        dispatch(bSetRoundTrip({ ...bRoundTrip, [value]: event.target.value }));
      }else{
        dispatch(fSetRoundTrip({ ...fRoundTrip, [value]: event.target.value }));
      }
      
    }
  };

  return (
    <div className="flex w-[100%] justify-center my-2 pl-3  pr-4 ">
      <div className="flex items-center justify-center p-3 ">{country}</div>
      <input
        type="number"
        className="w-14 text-gray-700 bg-white rounded"
        min={0}
        onChange={handleChange}
      />
      <div className="flex items-center justify-center p-3">회</div>
      <div className="flex items-center justify-center p-3">왕복비행</div>
    </div>
  );
};

export default BuissnessTripInput;
