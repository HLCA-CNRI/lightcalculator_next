import { useDispatch } from "../../../store/store";
import { getBaselineResultState } from "../../../store/slices/baslineResultSlice";
import { getForecastResultState } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "../../../store/store";
import React, { useState, useEffect } from "react";

type AddForcastInfoType = {
    type : string;
}
const AddForcastInfo =({type}:AddForcastInfoType) =>{
    
    const {bAnnual} = useSelector(getBaselineResultState)
    const {fAnnual} = useSelector(getForecastResultState)
    let value = (((fAnnual - bAnnual)/bAnnual)*100)

  

    useEffect(()=>{
        switch(type){
            case "annualResult":
                value = (((fAnnual - bAnnual)/bAnnual)*100)
                console.log(value)
        }
        // console.log(type,bAnnual,fAnnual)

    },[bAnnual,fAnnual])


    return (
        <div>
             <div>{value}{(Math.round(value * 10) / 10)%1 == 0 ? ".0":""}</div>
        </div>
    )
}

export default AddForcastInfo

