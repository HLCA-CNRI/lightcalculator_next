import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const PercentSlider = () => {
  return (
    <div className=" grid grid-cols-5">
    <div className="text-2xl mr-2 flex flex-col justify-center items-center pb-2">🚁</div>

      <div className=" col-span-3 mr-3">
        <input
          type="range"
          min="0"
          max="100"
          className="range range-primary w-[100%]"
        />
        <ul className="flex justify-between px-[10px]">
          <li className="flex justify-center relative mb-4 text-sm">
            <span className="absolute">0%</span>
          </li>

          <li className="flex justify-center relative mb-4 text-sm">
            <span className="absolute">100%</span>
          </li>
        </ul>
      </div>

      <div className="text-lg mr-2 flex flex-col justify-center items-center pb-2 pl-2">25%</div>

    
    </div>
  );
};

export default PercentSlider;
