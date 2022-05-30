export const calculateBuilding = (employee:number,commuteDays:number,companySize:number,useRenewableEnergy:boolean) =>{
    const calculateRenewableEnergy = useRenewableEnergy ? 1:0
    return (employee * 38.04 * commuteDays + companySize * (39.9 - 30.7584 * calculateRenewableEnergy))
}

export const calculateCars = (gasoline:number,diesel:number,lpg:number,hydrogen:number,electric:number,companyGasPrice:number) =>{
    const first = (((2586.81/11.76) * gasoline) + ((3062.93/11.28)*diesel) + ((2124.03/8.77)*lpg) + ((4939.64/93.81)*hydrogen) + ((337.69/5.5)*electric))
    const second = ((10*companyGasPrice)/(((2001/11.76)*gasoline) + ((2003/11.28)*diesel) + ((1133/8.77)*lpg) + ((8800/93.81)*hydrogen) + ((300/5.5)*electric)))
    console.log(first*second)
    return (first*second)
}

export const calculateRemoteWork = (employeeSize:number,commutingDays:number) =>{
    return (employeeSize * 101.65 * (5-commutingDays))
}

export const calculateCommutingDays = (employeeSize:number,commutingDays:number,commutingDistance:number,car:number,publicTransit:number) =>{
    const initial = employeeSize * commutingDays * commutingDistance * (26.856 * car + 7.394 * publicTransit)
    return (initial/100)
}

export const calculateFlight = (asia:number,europe:number,northAmerica:number,southAmerica:number,oceana:number,africa:number) =>{
    const values = (903*asia) + (8135*europe) + (9107*northAmerica) + (18302*southAmerica) + (13713*africa) + (8311*oceana)
    return (values * 2 * 0.10113)
}

export const annualTotal = (building:number, cars:number, remoteWork:number, commuting:number, flights:number) =>{
    console.log(building,cars,remoteWork,commuting,flights ,"=" ,building + cars + remoteWork + commuting + flights)

    return (building + cars + remoteWork + commuting + flights)
}