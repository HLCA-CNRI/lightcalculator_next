import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "../../../store/store";

type RemoteWorkType = {
  type: string;
};

const RemoteWork = ({type}: RemoteWorkType) => {
  return (
    <div>
      <div>Remote Work</div>
      <div className="">
        <div className="w-[100%] bg-slate-400 h-2 rounded-lg">
          <div className="rounded-l-lg w-[45%] bg-red-400 h-2  "></div>
        </div>
      </div>
    </div>
  );
};

export default RemoteWork;
