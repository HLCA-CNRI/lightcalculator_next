/* eslint-disable jsx-a11y/label-has-associated-control */
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch } from "../../store/store";

type CheckBoxType = {
  type: string;
  label: string;
  setChecked: ActionCreatorWithPayload<boolean, string>;
};

function CheckBox({ type, label, setChecked }: CheckBoxType) {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setChecked(event.target.checked));
  };

  return (
    <div className="w-[100%] p-8">
      <label className="inline-flex items-center w-[100%] ">
        {type === "baseline" ? (
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 "
            onChange={handleChange}
          />
        ) : (
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 accent-[#548235] "
            onChange={handleChange}
          />
        )}

        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
}

export default CheckBox;
