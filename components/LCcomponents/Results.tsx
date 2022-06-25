import AnnualResult from "./ResultComponents/AnnualResult";
import BuildingResult from "./ResultComponents/BuildingResult";
import CarResult from "./ResultComponents/CarResult";
import CommutingResults from "./ResultComponents/CommutingResult";
import FlightResult from "./ResultComponents/FlightResult";
import RemoteWork from "./ResultComponents/RemoteWork";
import ResultMessage from "./ResultComponents/ResultMessage";

function Results() {
  return (
    <div className="grid gap-4 xs:grid-cols-1 md:grid-cols-3 border rounded-t-lg overflow-auto h-[50vh] sm:h-auto">
      <div className="w-[100%] h-[95%] px-3  pb-3 pr-10 ">
        <div className="pt-5 pl-2 h-[80%] text-lg font-semibold">
          <ResultMessage />
        </div>
        <div className="flex h-[100%]border-2 mt-4 justify-start">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-4">
            share
          </button>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
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
}

export default Results;
