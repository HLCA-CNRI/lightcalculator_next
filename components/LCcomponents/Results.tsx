import AnnualResult from "./ResultComponents/AnnualResult";
import BuildingResult from "./ResultComponents/BuildingResult";
import CarResult from "./ResultComponents/CarResult";
import CommutingResults from "./ResultComponents/CommutingResult";
import FlightResult from "./ResultComponents/FlightResult";
import RemoteWork from "./ResultComponents/RemoteWork";
import ResultMessage from "./ResultComponents/ResultMessage";

const Results = () => {
  return (
    <div className="grid gap-4 grid-cols-3 border shadow-md rounded-lg">
      <div className="w-[100%] h-[95%] px-3  pb-3 pr-10 ">
        <div className="pt-5 pl-2 h-[80%] text-lg font-semibold">
          <ResultMessage/>
        </div>
        <div className="flex h-[100%]border-2 mt-4 justify-start">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">
            share
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            reset
          </button>
        </div>
      </div>
      <div className="w-[100%] px-3  pb-3">
        <AnnualResult type="baseline" title="Baseline" />
        <div className="mt-2">
          <CarResult type="baseline" />
          <BuildingResult type="baseline" />
          <CommutingResults type="baseline" />
          <FlightResult type="baseline" />
          <RemoteWork type="baseline" />
        </div>
      </div>

      <div className="w-[100%] px-3 pb-3">
        <AnnualResult type="forecast" title="Forecast" />

        <div className="mt-2">
          <CarResult type="forecast" />
          <BuildingResult type="forecast" />
          <CommutingResults type="forecast" />
          <FlightResult type="forecast" />
          <RemoteWork type="forecast" />
        </div>
      </div>
    </div>
  );
};

export default Results;
