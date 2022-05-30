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
  

    const[value,setVal] = useState(0)

    console.log(value)


    useEffect(()=>{
   
    
        console.log(value)

        console.log("HERHEHHERHEHR",bCalculteRemoteWork,bClaculateFlights,bCalculateCommuting,fCalculateRemoteWork,fCalculateFlights,fCalculateCommuting)
       if(type ==  "annualResult"){
        setVal(Math.round((((fAnnual - bAnnual)/bAnnual)*100) * 10) / 10)
       } else if(type ==  "carResult" && bCalculateCar!=0){
        setVal(Math.round((((fCalculateCar - bCalculateCar)/bCalculateCar)*100) * 10) / 10)
       }else if(type == "buildingResult" && bCalculateBuilding!=0){
        setVal(Math.round((((fCalculateBuilding - bCalculateBuilding)/bCalculateBuilding)*100) * 10) / 10)
       }else if(type == "commutingResult" && bCalculateCommuting!=0){
        setVal(Math.round((((fCalculateCommuting - bCalculateCommuting)/bCalculateCommuting)*100) * 10) / 10)
       }

       else{
           setVal(0)
       }

    },[bAnnual,bCalculateCar,bCalculateBuilding,bCalculteRemoteWork,bCalculateCommuting,bClaculateFlights,fAnnual,fCalculateCar,fCalculateBuilding,fCalculateRemoteWork,fCalculateCommuting,fCalculateFlights])


    return (
        <div className="ml-2">

             <div>{value}{(Math.round(value * 10) / 10)%1 == 0 ? ".0":""}</div>
        </div>
    )
}

export default AddForcastInfo

