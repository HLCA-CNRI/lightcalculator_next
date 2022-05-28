import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";

type NumberInputType = {
  type: string;
  placeholder: string;
  unit: string;
  setNumber: ActionCreatorWithPayload<number, string>;
};

const NumberInput = ({
  type,
  placeholder,
  unit,
  setNumber,
}: NumberInputType) => {
  const [number, setVal] = useState(0);

  useEffect(() => {
    // console.log(number);
  }, [number]);
  //REDUX

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentVal = event.currentTarget.value;
    if (!isNaN(parseInt(currentVal, 10))) {
      dispatch(setNumber(parseInt(currentVal, 10)));
    }
  };

  return (
    <div className="flex w-[100%] justify-center my-4 pl-3">
      <input
        type="number"
        className="w-14 text-gray-700 bg-white rounded"
        placeholder={placeholder}
        min={0}
        onChange={handleChange}

        // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
      />
      <div className="flex items-center justify-center p-3">{unit}</div>
    </div>
  );
};

export default NumberInput;
