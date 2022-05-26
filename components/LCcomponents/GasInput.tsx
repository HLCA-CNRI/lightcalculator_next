import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../store/store";
import PercentSlider from "./PercentSlider";

const GasInput = () => {
  return (
    <div className="w-[100%]">
      <label className="inline-flex items-center w-[100%] justify-start pt-3 pl-3 ml-6 my-3">
        <input type="checkbox" className="form-checkbox h-4 w-4" />
        <span className="ml-2">기본 값 적용</span>
      </label>
      <hr className="border-none h-1 bg-white"></hr>

      <div className = "rounded-lg p-2  m-6">
        <PercentSlider />
        <PercentSlider />
        <PercentSlider />
        <PercentSlider />
        <PercentSlider />
      </div>
    </div>
  );
};

export default GasInput;
