import { useDispatch } from "../../../store/store";
import { getBaselineResultState } from "../../../store/slices/baslineResultSlice";
import { getForecastResultState } from "../../../store/slices/forecastResultSlice";
import { useSelector } from "../../../store/store";
import React, { useState, useEffect } from "react";
import classnames from "tailwindcss-classnames";


type AddForcastInfoType = {
    type : string;
}
const AddForcastInfo =({type}:AddForcastInfoType) =>{
    
    const {bAnnual,bCalculateCar,bCalculateBuilding,bCalculteRemoteWork,bCalculateCommuting,bClaculateFlights} = useSelector(getBaselineResultState)
    const {fAnnual,fCalculateCar,fCalculateBuilding,fCalculateRemoteWork,fCalculateCommuting,fCalculateFlights} = useSelector(getForecastResultState)
    const[value,setVal] =useState(0)


    useEffect(()=>{

        switch(type){
            case "annualResult":
                setVal(Math.round((((fAnnual - bAnnual)/bAnnual)*100) * 10) / 10)
            case "carResult":
                setVal(Math.round((((bCalculateCar - fCalculateCar)/bCalculateCar)*100) * 10) / 10)
            case "buildingResult":
                setVal(Math.round((((bCalculateBuilding - fCalculateBuilding)/bCalculateBuilding)*100) * 10) / 10)
            case "remoteResult":
                setVal(Math.round((((bCalculteRemoteWork - fCalculateRemoteWork)/bCalculteRemoteWork)*100) * 10) / 10)
            case "commutingResult":
                setVal(Math.round((((bCalculateCommuting - fCalculateCommuting)/bCalculateCommuting)*100) * 10) / 10)
            case "flightResult":
                setVal(Math.round((((bClaculateFlights - fCalculateFlights)/bClaculateFlights)*100) * 10) / 10)
                
        }


    },[value,bAnnual,fAnnual])


    return (
        <div className="ml-2 border-2">

             <div>{value}{(Math.round(value * 10) / 10)%1 == 0 ? ".0":""}</div>
        </div>
    )
}

export default AddForcastInfo

