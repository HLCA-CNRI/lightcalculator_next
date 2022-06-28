import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import React, {useState, useEffect, memo} from "react";
import {useDispatch} from "../../store/store";

type NumberInputType = {
  type: string;
  initial: string;
  unit: string;
  setNumber: ActionCreatorWithPayload<number, string>;
};

// eslint-disable-next-line no-unused-vars
function NumberInput({type, initial, unit, setNumber}: NumberInputType) {
  const [number] = useState(0);

  useEffect(() => {}, [number]);

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!Number.isNaN(parseInt(currentVal, 10))) {
      dispatch(setNumber(parseInt(currentVal, 10)));
    }
  };
  // TODO: FIX --> when m2 is taken in, slice it and 적용해
  // There are no m units so when m is added to units it automatically changes the unit to m^2

  return (
    <div className="flex  m-2">
      <input
        type="number"
        className="w-20 rounded text-right"
        defaultValue={initial}
        min={0}
        onChange={handleChange}
      />
      <div className="ml-1">
        {unit}
        {unit === "m" ? <sup>2</sup> : ""}
      </div>
      {/* <div className = "ml-1">{unit}{ unit=="m2" ? <sup>2</sup>:""}</div> */}
    </div>
  );
}

export default memo(NumberInput);
