import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

type SliderInputType = {
    type:string,
    setNumber: ActionCreatorWithPayload<number,string>
}

const SliderInput = ({type,setNumber}:SliderInputType) =>{

    const dispatch = useDispatch();

    const [num,setNum] = useState(0)

    useEffect(() =>{
        console.log(num)

    },[num])


    const handleChange = ((event: React.ChangeEvent<HTMLInputElement>) =>{
        const currentVal = event.currentTarget.value
        if(!isNaN(parseInt(currentVal,10))){
            let numberCurrent = parseInt(currentVal,10) - 1 
            dispatch(setNumber(numberCurrent))
            console.log(numberCurrent)
        }
    })


    return(
        <div className = "flex flex-col space-y-2 w-[80%]">
            <input 
                type = "range"
                className = " w-[100%]"
                min = "1"
                max = "6"
                onChange={handleChange}
                // value ="0"
                 step = "1"/>
            <ul className = "flex justify-between w-full px-[10px]">
                <li className="flex justify-center relative mb-4"><span className="absolute">0</span></li>
                <li className="flex justify-center relative mb-4"><span className="absolute">1</span></li>
                <li className="flex justify-center relative mb-4"><span className="absolute">2</span></li>
                <li className="flex justify-center relative mb-4"><span className="absolute">3</span></li>
                <li className="flex justify-center relative mb-4"><span className="absolute">4</span></li>
                <li className="flex justify-center relative mb-4"><span className="absolute">5</span></li>
            </ul>

        </div>
      
    )
}


export default SliderInput

{/* <div className="w-[100%]">
<input type="range" min="1" max="100" value="50" className="slider" id="myRange">
</div> */}