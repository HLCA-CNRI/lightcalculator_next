import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {useState,useEffect} from 'react'
import {useDispatch} from '../../store/store'
import BuissnessTripInput from './BuissnessTripInput';

type BuisnessTripInfoType = {
    type :string 
}
const BuisnessTripInfo = ({type}:BuisnessTripInfoType) =>{
    return(
        <div className = "w-full  p-5">
            <BuissnessTripInput country = "아시아" value='asia' isBaseline={type == "baseline" ? true : false}/>
            <BuissnessTripInput country = "유럽" value='europe' isBaseline={type == "baseline" ? true : false}/>
            <BuissnessTripInput country = "북아메리카" value='northAmerica' isBaseline={type == "baseline" ? true : false}/>
            <BuissnessTripInput country = "남아메리카" value='southAmerica' isBaseline={type == "baseline" ? true : false}/>
            <BuissnessTripInput country = "오세아니아" value='oceana' isBaseline={type == "baseline" ? true : false}/>
            <BuissnessTripInput country = "아프리카" value='africa' isBaseline={type == "baseline" ? true : false}/>
        </div>
    )

}

export default BuisnessTripInfo