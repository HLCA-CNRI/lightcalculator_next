import logo from "../image/logo.png";
import NumberInput from "./LCcomponents/NumberIput";
import SliderInput from "./LCcomponents/SliderInput";
import {useSelector} from '../store/store'
import {getBaselineState,setbOne,setbTwo,setbThree,setbFour,setbFive,setbSix} from '../store/slices/baselineSlice'
import { getForecastState,setfOne,setfTwo,setfThree,setFFour,setFFive,setFSix} from "../store/slices/forecastSlice";
import CheckBox from "./LCcomponents/CheckBox";

//useSelector => to get const values 


const LightCalculator = () => {
  const {bOne,bTwo, bThree ,bFour,bFive,bSix} = useSelector(getBaselineState)
  const {fOne,fTwo, fThree,fFour,fFive,fSix} = useSelector(getForecastState)
  console.log("baseline",bOne,bTwo,bThree,bFour,bFive)
  console.log("forecast",fOne,fTwo,fThree,fFour,fFive)

  return (
    <div>

      <nav className="flex place-items-center justify-between h-[6em] min-w-[100%] bg-slate-200 ">
        <div className="m-10">
          <img src={logo.src} width={180} height={70} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-10">
          Request Demo
        </button>
        
      </nav>

      <div className="grid  place-items-center min-h-screen  ">
        <div className=" mt-10 p-4 max-w-6xl grid gap-4 xs:grid-cols-1 md:grid-cols-3  ">

          <h1 className="p-6 h-auto bg-slate-200 xs:col-span-1 md:col-span-3 mb-10 rounded-lg ">
            <div className="font-extrabold text-2xl w-[65%] ">
              Ipsum is simply dummy text of the printing and typesetting
              industry
            </div>
            <div className=" md:w-[65%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s{" "}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 w-40">
              Get Started
            </button>
            <div className=" h-40 bg-slate-200" />
          </h1>

          <p> </p>
          <p className="text-3xl font-semibold  mx-4"> Baseline </p>
          <p className="text-3xl font-semibold  mx-4"> Forecast</p>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </p>
          </div>
          <div className="h-20 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg mx-4">
            <NumberInput type = "baseline" placeholder=" place1 "  unit = "명" setNumber={setbOne}/>
          </div>
          <div className="h-26 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <NumberInput type = "forecast" placeholder=" place1 "  unit = "명" setNumber={setfOne}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </p>
          </div>
          <div className="h-20 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            <NumberInput type = "baseline" placeholder=" place2 "   unit = "대" setNumber={setbTwo} />
          </div>
          <div className="h-26 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <NumberInput type = "forecast" placeholder=" place2 "  unit = "대"  setNumber={setfTwo}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's 
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            <SliderInput  type = "baseline" setNumber={setbThree}/>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <SliderInput type = "forecast" setNumber={setfThree}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </p>
          </div>
          <div className="h-20 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            <NumberInput type = "baseline" placeholder=" placer4 "  unit = "만원" setNumber={setbFour}/>
          </div>
          <div className="h-26 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <NumberInput type = "forecast" placeholder="  place4 "  unit = "만원" setNumber={setFFour}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            <SliderInput type = "baseline" setNumber={setbFive}/>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <SliderInput type = "forecast" setNumber={setFFive}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            <CheckBox type = "baseline" label = "Option One" setChecked={setbSix}/>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            <CheckBox type = "forecast" label = "Option Two" setChecked={setFSix}/>
          </div>

          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>
        
          <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>

        <div className="mb-3  mx-4">
            <h2 className="text-xl font-medium">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>
          <div className="h-16 md:h-[100%] bg-cnri_light_green flex justify-center flex-col items-center rounded-lg  mx-4">
            Content
          </div>

          {/* <h1 className =  "h-50 font-extrabold bg-yellow-300 xs:col-span-1 md:col-span-3 mb-10">
              <div className='grid  place-items-center'>
              <div className=' p-2 max-w-5xl grid gap-4 xs:grid-cols-1 md:grid-cols-3 '>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <div className="h-30 bg-blue-500"></div>
                  <div className="h-30 bg-red-300 "></div>
              </div>
            </div>
          </h1> */}
        </div>
      </div>
    </div>
  );
};
export default LightCalculator;
