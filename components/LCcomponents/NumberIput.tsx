import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";

type NumberInputType = {
  type: string;
  initial:string;
  unit: string;
  setNumber: ActionCreatorWithPayload<number, string>;
};

const NumberInput = ({
  type,
  initial,
  unit,
  setNumber
 
}: NumberInputType) => {
  const [number, setVal] = useState(0);

  useEffect(() => {

  }, [number]);


  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      dispatch(setNumber(parseInt(currentVal, 10)));
    }
  };

  return (
    <div className = "flex  m-2">
      <input type = "number" className = "w-14 rounded" defaultValue={initial} min = "0" onChange={handleChange}></input>
      <div className = "ml-1">{unit}</div>
    </div>
  );
};

export default NumberInput;
