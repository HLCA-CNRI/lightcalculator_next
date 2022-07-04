// 수식 저장하는 곳 --> result 계산할때 활용함

// result 건물
export const calculateBuilding = (
  employee: number,
  commuteDays: number,
  companySize: number,
  useRenewableEnergy: boolean
) => {
  const calculateRenewableEnergy = useRenewableEnergy ? 1 : 0;
  return employee * 38.04 * commuteDays + companySize * (39.9 - 30.7584 * calculateRenewableEnergy);
};
// result 차량
export const calculateCars = (
  gasoline: number,
  diesel: number,
  lpg: number,
  hydrogen: number,
  electric: number,
  companyGasPrice: number
) => {
  const first =
    (2586.81 / 11.76) * gasoline +
    (3062.93 / 11.28) * diesel +
    (2124.03 / 8.77) * lpg +
    (4939.64 / 93.81) * hydrogen +
    (337.69 / 5.5) * electric;
  const second =
    (10 * companyGasPrice) /
    ((2001 / 11.76) * gasoline +
      (2003 / 11.28) * diesel +
      (1133 / 8.77) * lpg +
      (8800 / 93.81) * hydrogen +
      (300 / 5.5) * electric);
  return first * second;
};
// result 재택근무
export const calculateRemoteWork = (employeeSize: number, commutingDays: number) =>
  employeeSize * 101.65 * (5 - commutingDays);
// result 출퇴근
export const calculateCommuting = (
  employeeSize: number,
  commutingDays: number,
  commutingDistance: number,
  car: number,
  publicTransit: number,
  walkOrBike: number
) => {
  const initial =
    (employeeSize *
      commutingDays *
      commutingDistance *
      (26.856 * car + 7.394 * publicTransit + 0 * walkOrBike)) /
    (car + publicTransit + walkOrBike);
  return initial;
};
// result 출장
export const calculateFlight = (
  asia: number,
  europe: number,
  northAmerica: number,
  southAmerica: number,
  oceana: number,
  africa: number
) => {
  const values =
    903 * asia +
    8135 * europe +
    9107 * northAmerica +
    18302 * southAmerica +
    13713 * africa +
    8311 * oceana;
  return values * 2 * 0.10113;
};
// result Annual
export const annualTotal = (
  building: number,
  cars: number,
  remoteWork: number,
  commuting: number,
  flights: number
) => building + cars + remoteWork + commuting + flights;

// 여기에서부터는 forecast에 %값 계산해주는 수식들

export const calculateForecastInfo = (forecastVal: number, baselineVal: number) => {
  const val = ((forecastVal - baselineVal) / baselineVal) * 100;
  return val;
};

export const annualEmissions = (forecastAnnual: number, baselineAnnual: number) => {
  const val = forecastAnnual - baselineAnnual;
  return val;
};

export const annualEmissionsReduction = (forecastAnnual: number, baselineAnnual: number) => {
  const val = calculateForecastInfo(forecastAnnual, baselineAnnual);
  return val;
};

export const GreenEmissionToVehicleComp = (forecastAnnual: number, baselineAnnual: number) => {
  const val = annualEmissions(forecastAnnual, baselineAnnual);
  return val / 2228.3;
};

export const RedEmissionToVehicleComp = (forecastAnnual: number, baselineAnnual: number) => {
  const val = annualEmissions(forecastAnnual, baselineAnnual);
  return val / 3091.1;
};

// 별도 *** 숫자에 콤마 붙이기
export const numberWithCommas = (val: number) =>
  val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
