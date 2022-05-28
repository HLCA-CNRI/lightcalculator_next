type calculateBuildingType = {
    employee:number,
    commuteDays:number,
    companySize:number,
    useRenewableEnergy: boolean,
}

export const calculateBuilding = ({employee,commuteDays,companySize,useRenewableEnergy}:calculateBuildingType) =>{
    const calculateRenewableEnergy = useRenewableEnergy ? 1:0
    return (employee * 38.04 * commuteDays + companySize * (39.9 - 30.7584 * calculateRenewableEnergy))
}

type calculateCarType = {
    gasoline:number, 
    diesel:number, 
    lpg:number,
    hydrogen:number,
    electric:number
    companyGasPrice:number
}

export const calculateCars = ({gasoline,diesel,lpg,hydrogen,electric,companyGasPrice}:calculateCarType) =>{
    const first = (((2586.81/11.76) * gasoline) + ((3062.93/11.28)*diesel) + ((2124.03/8.77)*lpg) + ((4939.64/93.81)*hydrogen) + ((337.69/5.5)*electric))
    const second = ((10*companyGasPrice)/(((2001/11.76)*gasoline) + ((2003/11.28)*diesel) + ((1133/8.77)*lpg) + ((8800/93.81)*hydrogen) + ((300/5.5)*electric)))
    return (first*second)
}

type remoteWorkType = {
    employeeSize:number, 
    commutingDays:number
}

export const calculateRemoteWork = ({employeeSize,commutingDays}:remoteWorkType) =>{
    return (employeeSize * 101.65 * (5-commutingDays))
}

type commutingDaysType = {
    employeeSize:number,
    commutingDays:number,
    commutingDistance:number
    car:number, 
    publicTransit:number
}

export const calculateCommutingDays = ({employeeSize,commutingDays,commutingDistance,car,publicTransit}:commutingDaysType) =>{
    const initial = employeeSize * commutingDays * commutingDistance * (26.856 * car + 7.394 * publicTransit)
    return (initial/100)
}

type flightType = {
    asia: number,
    europe: number,
    northAmerica: number,
    southAmerica: number,
    oceana: number,
    africa: number,
};

export const calculateFlight = ({asia,europe,northAmerica,southAmerica,oceana,africa}:flightType) =>{
    const values = (903*asia) + (8135*europe) + (9107*northAmerica) + (18302*southAmerica) + (13713*africa) + (8311*oceana)
    return (values * 2 * 0.10113)
}


type annualTotalType = {
    building:number, 
    cars:number, 
    remoteWork:number, 
    commuting:number, 
    flights:number 
}

export const annualTotal = ({building, cars, remoteWork, commuting, flights}:annualTotalType) =>{
    return (building + cars + remoteWork + commuting + flights)
}