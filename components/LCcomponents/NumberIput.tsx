type NumberInputTpe = {
    type:string, 
    placeholder:string,
    unit:string
  }
  
  
  const NumberInput = ({type,placeholder,unit}:NumberInputTpe) => {
    return (
      <div className = "flex w-[100%] justify-center my-4">
        <input
          type="number"
          className="
          form-control
          block
          w-[70%]
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
  
          // className = {type === "baseline" ?  "bg-white": "bg-yellow"}
        />
        <div className = "flex items-center justify-center p-3">{unit}</div>
      </div>
    );
  };
  
  export default NumberInput;
  