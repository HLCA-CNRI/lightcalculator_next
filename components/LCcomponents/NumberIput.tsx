import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {useState,useEffect} from 'react'
import {useDispatch} from '../../store/store'

type NumberInputType = {
    type:string, 
    placeholder:string,
    unit:string,
    setNumber: ActionCreatorWithPayload<number,string>
  }
  
  
  
  const NumberInput = ({type,placeholder,unit,setNumber}:NumberInputType) => {

    const [number,setVal] = useState(0)

    // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    //   const currentVal = event.currentTarget.value
    //   if(!isNaN(parseInt(currentVal,10))){
    //     setVal(parseInt(currentVal,10))
    //   }
    // }

    useEffect(() =>{
      console.log(number)
    },[number])
    //REDUX 

    const dispatch = useDispatch();

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
      const currentVal = event.currentTarget.value
      if(!isNaN(parseInt(currentVal,10))){
        dispatch(setNumber(parseInt(currentVal,10)))
      }
    }


    return (
      <div className = "flex w-[100%] justify-center my-4 pl-3">
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
          placeholder={placeholder}
          min={0}
          onChange = {handleChange}
  
          // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
        />
        <div className = "flex items-center justify-center p-3">{unit}</div>
      </div>
    );
  };
  
  export default NumberInput;
  