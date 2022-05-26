import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {useState,useEffect} from 'react'
import {useDispatch} from '../../store/store'


const BuisnessTripInfo = () =>{

    return(
        <div className = "flex w-[100%] justify-center my-2 pl-3  pr-4">
        <div className = "flex items-center justify-center p-3 ">Country1</div>
        <input
          type="number"
          className="
          form-control
          block
          w-[25%]
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
          focus:outline-none"
        //   placeholder={placeholder}
          min={0}
        //   onChange = {handleChange}
  
          // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
        />
        {/* <div className = "flex items-center justify-center p-3">{unit}</div> */}
        <div className = "flex items-center justify-center p-3">왕복비행</div>
      </div>
    )

}

export default BuisnessTripInfo