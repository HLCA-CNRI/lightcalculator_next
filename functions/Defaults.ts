export interface baselineState {
  bCompanyEmployeeSize: number;
  bFuelType: {
    setDefault: boolean;
    gasoline: number;
    diesel: number;
    lpg: number;
    hydrogen: number;
    electric: number;
  };
  bCompanyGasPrice: number;
  bCommutingDays: number;
  bCommuting: {
    setDefault: boolean;
    distance: number;
    car: number;
    publicTransit: number;
    walkOrBike: number;
  };
  bUseRenewableEnergy: boolean;
  bCompanysize: number;
  bRoundTrip: {
    asia: number;
    europe: number;
    northAmerica: number;
    southAmerica: number;
    oceana: number;
    africa: number;
  };
}

export const defaultBaseline: baselineState = {
  bCompanyEmployeeSize: 100,
  bFuelType: {
    setDefault: false,
    gasoline: 47,
    diesel: 39,
    lpg: 8,
    hydrogen: 2,
    electric: 4,
  },
  bCompanyGasPrice: 5000,
  bCommutingDays: 5,
  bCommuting: {
    setDefault: false,
    distance: 14,
    car: 36,
    publicTransit: 40,
    walkOrBike: 24,
  },
  bUseRenewableEnergy: false,
  bCompanysize: 1000,
  bRoundTrip: {
    asia: 0,
    europe: 0,
    northAmerica: 0,
    southAmerica: 0,
    oceana: 0,
    africa: 0,
  },
};

export interface forecastState {
  fCompanyEmployeeSize: number;
  fFuelType: {
    setDefault: boolean;
    gasoline: number;
    diesel: number;
    lpg: number;
    hydrogen: number;
    electric: number;
  };
  fCompanyGasPrice: number;
  fCommutingDays: number;
  fCommuting: {
    setDefault: boolean;
    distance: number;
    car: number;
    publicTransit: number;
    walkOrBike: number;
  };
  fUseRenewableEnergy: boolean;
  fCompanysize: number;
  fRoundTrip: {
    asia: number;
    europe: number;
    northAmerica: number;
    southAmerica: number;
    oceana: number;
    africa: number;
  };
}

export const DefualtForecast: forecastState = {
  fCompanyEmployeeSize: 100,
  fFuelType: {
    setDefault: false,
    gasoline: 47,
    diesel: 39,
    lpg: 8,
    hydrogen: 2,
    electric: 4,
  },
  fCompanyGasPrice: 5000,
  fCommutingDays: 5,
  fCommuting: {
    setDefault: false,
    distance: 14,
    car: 36,
    publicTransit: 40,
    walkOrBike: 24,
  },
  fUseRenewableEnergy: false,
  fCompanysize: 1000,
  fRoundTrip: {
    asia: 0,
    europe: 0,
    northAmerica: 0,
    southAmerica: 0,
    oceana: 0,
    africa: 0,
  },
};
