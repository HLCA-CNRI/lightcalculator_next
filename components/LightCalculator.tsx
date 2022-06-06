import logo from "../image/logo.png";
import titleImage from "../image/titleImage.svg";
import NumberInput from "./LCcomponents/NumberIput";
import SliderInput from "./LCcomponents/SliderInput";
import { useSelector } from "../store/store";
import TransportationInput from "./LCcomponents/TransportationInput";
import Results from "./LCcomponents/Results";
import { useRef, useEffect,useState } from "react";

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

const LightCalculator = () => {
  const surveyStart = useRef<null | HTMLParagraphElement>(null);
  const result = useRef<null | HTMLHeadingElement>(null)
  // state the takes the survery start top position as scrollPosition
  const [scrollPosition, setScrollPosition] = useState(1);
  //observes updated changes in setScrollPosition
  useEffect(() => {
    const updatePosition = () => {
      if(surveyStart && surveyStart.current ){
        setScrollPosition(surveyStart.current.getBoundingClientRect().top)
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  }, []);
  useEffect(() => {
    if(result && result.current){
      if (parseInt(scrollPosition.toString()) <= 0) {
        result.current.style.animationFillMode = "forwards"
        result.current.style.position = 'fixed'
      }else{
        result.current.style.position = ''
      }

    }
  },[scrollPosition])

  const executeScroll = () => {
    if (surveyStart.current != undefined) {
      surveyStart.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const {
    bCompanyEmployeeSize: bCompanyEmployeeSize,
    bFuelType: bFuelType,
    bCompanyGasPrice: bCompanyGasPrice,
    bCommutingDays: bCommutingDays,
    bCommuting: bCommuting,
    bUseRenewableEnergy: bUseRenewableEnergy,
    bCompanysize: bCompanysize,
    bRoundTrip: bRoundTrip,
  } = useSelector(getBaselineState);
  const {
    fCompanyEmployeeSize: fCompanyEmployeeSize,
    fFuelType: fFuelType,
    fCompanyGasPrice: fCompanyGasPrice,
    fCommutingDays: fCommutingDays,
    fCommuting: fCommuting,
    fUseRenewableEnergy: fUseRenewableEnergy,
    fCompanysize: fCompanysize,
    fRoundTrip: fRoundTrip,
  } = useSelector(getForecastState);

  return (
    <div>
      <nav className="flex place-items-center justify-between h-[6em] min-w-[100%] bg-white">
        <div className="m-10">
          <img src={logo.src} width={180} height={70} />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-10">
          데모 신청하기
        </button>
      </nav>
      <hr className="border-none h-[1px] bg-slate-400"></hr>

      <div className="grid  place-items-center min-h-screen  ">
        <div className=" mt-10 max-w-6xl grid gap-4 xs:grid-cols-1 md:grid-cols-3 ">
          <h1 className=" h-auto bg-slate-200 xs:col-span-1 md:col-span-3 mb-10 rounded-lg ">
            <div className="px-6">
              <div className="font-extrabold text-4xl w-[65%] ">
                <br></br>
                전기차로의 전환, 재택근무로 인한 <br></br>기후 변화 영향력 측정
              </div>
              <br></br>
              <div className=" md:w-[56%] text-lg text-gray-600">
                개인, 기업, 기관 소유 차량이 전기차로 빠르게 전환되고 있고
                COVID-19 이후 재택근무의 비율이 급격히 증가했습니다.
                탄소중립연구원의 기후 임팩트 계산기는 의사결정에 따른 기후 변화
                영향력을 측정합니다. <br></br>
                <br></br>아래 간단한 항목들에 답해보시고 귀사의 기후 변화
                영향력을 측정해보세요.
              </div>
              <button
                onClick={executeScroll}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-5 w-40"
              >
                시작하기
              </button>
            </div>

            <img src={titleImage.src} className="rounded-lg " />
          </h1>

          <p ref={surveyStart}> </p>
          <p className="text-3xl font-semibold "> Baseline </p>
          <p className="text-3xl font-semibold "> Forecast</p>

          <div className="mb-3 mr-2 pr-10">
            <h2 className="text-xl font-semibold mb-2 ">임직원 수</h2>
            <p className="text-gray-600">
              귀사에 종사하고 있는 임직원은 몇 명인가요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg">
            <NumberInput
              type="baseline"
              unit="명"
              setNumber={bSetCompanyEmployeeSize}
              initial={bCompanyEmployeeSize.toString()}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              unit="명"
              setNumber={fSetCompanyEmployeeSize}
              initial={fCompanyEmployeeSize.toString()}
            />
          </div>

          <div className="mb-3 pr-10 ">
            <h2 className="text-xl font-semibold mb-2">차량 종류별 대수</h2>
            <p className="text-gray-600">
              최근 다양한 종류의 차량이 많이 상용화되고 있습니다. 귀사의 차량
              종류별 대수는 어떻게 되시나요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <GasInput type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <GasInput type="forecast" />
          </div>

          <div className="mb-3 pr-10  ">
            <h2 className="text-xl font-semibold mb-2">차량 연료 비용</h2>
            <p className="text-gray-600">
              다양한 종류의 차량이 생기며 차량 연료도 다양해지고 있습니다.
              귀사에서 연간 소비하고 있는 총 차량 연료 비용을 입력해주세요.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="baseline"
              unit="만원"
              setNumber={bSetCompanyGasPrice}
              initial={bCompanyGasPrice.toString()}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              unit="만원"
              setNumber={fSetCompanyGasPrice}
              initial={fCompanyGasPrice.toString()}
            />
          </div>

          <div className="mb-3 pr-10  ">
            <h2 className="text-xl font-semibold mb-2">근무 형태</h2>
            <p className="text-gray-600">
              최근 재택근무를 시행하는 기업이 많아지고 있습니다. 귀사는
              평균적으로 오피스 출근이 얼마나 되시나요??
            </p>
          </div>
          <div className="bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <SliderInput type="baseline" setNumber={bSetCommutingDays} />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <SliderInput type="forecast" setNumber={fSetCommuntingDays} />
          </div>

          <div className="mb-3 pr-10  ">
            <h2 className="text-xl font-semibold mb-2">출퇴근 거리 및 방식</h2>
            <p className="text-gray-600">
              귀사 임직원의 평균적인 출퇴근 거리와 방식이 어떻게 되나요?
              자동차를 통한 출퇴근은 버스나 지하철 같은 대중교통에 비해 많은
              탄소 배출이 발생합니다.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-start rounded-lg    ">
            <TransportationInput type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-start rounded-lg    ">
            <TransportationInput type="forecast" />
          </div>

          <div className="mb-3  pr-10 ">
            <h2 className="text-xl font-semibold mb-2">신재생 에너지</h2>
            <p className="text-gray-600">
              현재 귀사에 공급되는 전기는 신재생 에너지입니까? 신재생 에너지로의
              전환은 탄소 배출 감소에 도움이 될 수 있습니다.
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg   ">
            <CheckBox
              type="baseline"
              label="신재생 에너지 사용"
              setChecked={bSetUseRenewableEnergy}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <CheckBox
              type="forecast"
              label="신재생 에너지 사용"
              setChecked={fSetUseRenewableEnergy}
            />
          </div>

          <div className="mb-3 pr-10  ">
            <h2 className="text-xl font-semibold mb-2">사무실 면적</h2>
            <p className="text-gray-600">
              큰 사무실일수록 전기와 난방으로 인한 배출량이 많습니다. 귀사의
              사무실 면적은 어떻게 되나요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg  ">
            <NumberInput
              type="baseline"
              unit="m"
              setNumber={bSetCompanySize}
              initial={bCompanysize.toString()}
            />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg   ">
            <NumberInput
              type="forecast"
              unit="m"
              setNumber={fSetCompanySize}
              initial={fCompanysize.toString()}
            />
          </div>

          <div className="mb-3  pr-10 ">
            <h2 className="text-xl font-semibold mb-2">왕복 비행 출장</h2>
            <p className="text-gray-600">
              글로벌 시대인만큼 해외로의 출장도 많아지고 있습니다.귀사에서의
              연간 총 해외 출장은 몇 번이신가요?
            </p>
          </div>
          <div className=" bg-cnri_light_blue flex justify-center flex-col items-center rounded-lg">
            <BuisnessTripInfo type="baseline" />
          </div>
          <div className=" bg-cnri_light_green flex justify-center flex-col items-center rounded-lg ">
            <BuisnessTripInfo type="forecast" />
          </div>

          <h1  className="max-w-6xl h-auto bg-white xs:col-span-1 md:col-span-3  rounded-lg bottom-1">
            <div className=" md:w-[65%]"></div>
            <Results />
          </h1>

          <h1 ref = {result} className="max-w-6xl h-auto bg-white xs:col-span-1 md:col-span-3  rounded-lg bottom-1">
            <div className=" md:w-[65%]"></div>
            <Results />
          </h1>

        </div>
      </div>
    </div>
  );
};
export default LightCalculator;
