import logo from "../image/logo.png";
import NumberInput from "./LCcomponents/NumberIput";
import SliderInput from "./LCcomponents/SliderInput";
import { useSelector } from "../store/store";
import TransportationInput from "./LCcomponents/TransportationInput";
import Results from "./LCcomponents/Results";


import {
  getBaselineState,
  bSetCompanyEmployeeSize,
  bSetFuelType,
  bSetCompanyGasPrice,
  bSetCommutingDays,
  bSetCompanySize,
  bSetCommuting,
  bSetUseRenewableEnergy,
  bSetRoundTrip,
} from "../store/slices/baselineSlice";

import {
  getForecastState,
  fSetCompanyEmployeeSize,
  fSetFuelType,
  fSetCompanyGasPrice,
  fSetCommuntingDays,
  fSetCommuting,
  fSetUseRenewableEnergy,
  fSetRoundTrip,
  fSetCompanySize,
} from "../store/slices/forecastSlice";

import CheckBox from "./LCcomponents/CheckBox";
import GasInput from "./LCcomponents/GasInput";
import BuisnessTripInfo from "./LCcomponents/BuissnessTripInfo";
//useSelector => to get const values

const LightCalculator = () => {
  const {
    bCompanyEmployeeSize: bCompanyEmployeeSize,
    bFuelType: bFuelType,
    bCompanyGasPrice: bCompanyGasPrice,
    bCommutingDays: bCommutingDays,
    bCommuting: bCommuting,
  } = useSelector(getBaselineState);
  const {
    fCompanyEmployeeSize: fCompanyEmployeeSize,
    fFuelType: fFuelType,
    fCompanyGasPrice: fCompanyGasPrice,
    fCommutingDays: fCommutingDays,
    fCommuting,
  } = useSelector(getForecastState);


  return (
    <div>
      <nav className="flex place-items-center justify-between h-[6em] min-w-[100%] bg-white">
        <div className="m-10">
          <img src={logo.src} width={180} height={70} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-10">
          데모 신청하기
        </button>
      </nav>
      <hr className="border-none h-[1px] bg-slate-400"></hr>

      <div className="grid  place-items-center min-h-screen  ">
        <div className=" mt-10  max-w-5xl grid gap-4 xs:grid-cols-1 md:grid-cols-3  ">
          <h1 className="p-6 h-auto bg-slate-200 xs:col-span-1 md:col-span-3 mb-10 rounded-lg ">
            <div className="font-extrabold text-2xl w-[65%] ">
              전기차로의 전환, 재택근무로 인한 기후 변화 영향력 측정
            </div>
            <div className=" md:w-[65%]">
              개인, 기업, 기관 소유 차량이 전기차로 빠르게 전환되고 있고
              COVID-19 이후 재택근무의 비율이 급격히 증가했습니다.
              탄소중립연구원의 기후 임팩트 계산기는 의사결정에 따른 기후 변화
              영향력을 측정합니다. 아래 간단한 항목들에 답해보시고 귀사의 기후
              변화 영향력을 측정해보세요.{" "}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 w-40">
              시작하기
            </button>
            <div className=" h-40 bg-slate-200" />
          </h1>

          <p> </p>
          <p className="text-3xl font-semibold "> Baseline </p>
          <p className="text-3xl font-semibold "> Forecast</p>

          <div className="mb-3 ">
            <h2 className="text-xl font-medium">임직원 수</h2>
            <p className="text-gray-600">
              귀사에 종사하고 있는 임직원은 몇 명인가요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg">
            <NumberInput
              type="baseline"
              placeholder=" place1 "
              unit="명"
              setNumber={bSetCompanyEmployeeSize}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              placeholder=" place1 "
              unit="명"
              setNumber={fSetCompanyEmployeeSize}
            />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">차량 종류 비율</h2>
            <p className="text-gray-600">
              최근 다양한 종류의 차량이 많이 상용화되고 있습니다. 귀사의 차량
              종류 비율은 어떻게 되시나요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <GasInput type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <GasInput type="forecast" />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">차량 연료 비용</h2>
            <p className="text-gray-600">
              다양한 종류의 차량이 생기며 차량 연료도 다양해지고 있습니다.
              귀사에서 연간 소비하고 있는 총 차량 연료 비용을 입력해주세요.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="baseline"
              placeholder=" placer4 "
              unit="만원"
              setNumber={bSetCompanyGasPrice}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              placeholder="  place4 "
              unit="만원"
              setNumber={fSetCompanyGasPrice}
            />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">근무 형태</h2>
            <p className="text-gray-600">
              최근 재택근무를 시행하는 기업이 많아지고 있습니다. 평균적으로
              임직원 한 명당 일주일에 며칠씩 사무실로 출근하시나요?
            </p>
          </div>
          <div className="bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <SliderInput type="baseline" setNumber={bSetCommutingDays} />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <SliderInput type="forecast" setNumber={fSetCommuntingDays} />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">출퇴근 거리 및 방식</h2>
            <p className="text-gray-600">
              평균적인 출퇴근 거리와 방식이 어떻게 되나요? 자동차를 통한
              출퇴근은 버스나 지하철 같은 대중교통에 비해 많은 탄소 배출이
              발생합니다.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-start rounded-lg    ">
            <TransportationInput type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-start rounded-lg    ">
            <TransportationInput type="forecast" />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">신재생 에너지</h2>
            <p className="text-gray-600">
              현재 귀사에 공급되는 전기는 신재생 에너지입니까? 신재생 에너지로의
              전환은 탄소 배출 감소에 도움이 될 수 있습니다.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <CheckBox
              type="baseline"
              label="Option One"
              setChecked={bSetUseRenewableEnergy}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <CheckBox
              type="forecast"
              label="Option Two"
              setChecked={fSetUseRenewableEnergy}
            />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">사무실 면적</h2>
            <p className="text-gray-600">
              큰 사무실일수록 전기와 난방으로 인한 배출량이 많습니다. 귀사의
              사무실 면적은 어떻게 되나요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  ">
            <NumberInput
              type="baseline"
              placeholder=""
              unit="m"
              setNumber={bSetCompanySize}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              placeholder=""
              unit="m"
              setNumber={fSetCompanySize}
            />
          </div>

          <div className="mb-3   ">
            <h2 className="text-xl font-medium">왕복 비행 출장</h2>
            <p className="text-gray-600">
              글로벌 시대인만큼 해외로의 출장도 많아지고 있습니다.귀사에서의
              연간 총 해외 출장은 몇 번이신가요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg ">
            <BuisnessTripInfo type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg ">
            <BuisnessTripInfo type="forecast" />
          </div>

          <h1 className=" p-6 h-[35vh] xs:col-span-1 md:col-span-3  rounded-lg  mt-=3 ">
           
          </h1>


          <h1 className=" max-w-5xl h-[35vh] fixed   bg-slate-200 xs:col-span-1 md:col-span-3  rounded-lg bottom-0 mt-3">
      
            <div className=" md:w-[65%]">
           
            </div>
            <Results/>            

        
          </h1>


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
