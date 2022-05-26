import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import CheckBox from "./LCcomponents/CheckBox";
import PercentSlider from "./LCcomponents/PercentSlider";

const TransportationSlider = () => {
  return (
    <div className=" w-[100%] ">
      <label className="inline-flex items-center w-[100%] justify-start pt-3 pl-3 ml-6 my-3">
        <input type="checkbox" className="form-checkbox h-4 w-4" />
        <span className="ml-2">기본 값 적용</span>
      </label>

      <hr className="border-none h-1 bg-white"></hr>

      <div className="flex my-3 m-6">
        <div className="w-[60%] pl-3  flex flex-col justify-center text-lg">
          Lorem Ipsum is{" "}
        </div>
        <input
          type="number"
          className="
          form-control
          block
          w-[40%]
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white
          bg-clip-padding
          border border-solid
          border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700
          focus:bg-white
          focus:border-blue-600
          focus:outline-none
          "
          placeholder=""
          min={0}
          // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
        />
        <div className="flex items-center justify-center p-3">km</div>
      </div>
      <hr className="border-none h-1 bg-white"></hr>

      <div className="rounded-lg p-2 m-6">
        <PercentSlider />
        <PercentSlider />
        <PercentSlider />
      
      </div>
    </div>
  );
};

export default TransportationSlider;
