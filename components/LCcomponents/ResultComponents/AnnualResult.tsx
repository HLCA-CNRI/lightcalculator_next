import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";


type AnnualResultType ={ 
    type:string
}

const AnnualResult = ({type}:AnnualResultType) => {
  return (
    <div>
      <div className="w-[100%] flex justify-between pt-3 ">
        <div className="flex">
          <div className="font-semibold">{type} Annual</div>
          {/* <div className="font-light">(tCO2e)</div> */}
        </div>
        <div>value</div>
      </div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-2 rounded-lg">
          <div className="rounded-l-lg w-[85%] bg-red-400 h-2  ">
            <div className="rounded-l-lg w-[70%] bg-orange-400 h-2 ">
              <div className="rounded-l-lg w-[40%] bg-emerald-400 h-2 ">
                <div className="rounded-l-lg w-[38%] bg-purple-900 h-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualResult;
