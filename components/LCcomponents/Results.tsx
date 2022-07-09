import AnnualResult from "./ResultComponents/AnnualResult";
import BuildingResult from "./ResultComponents/BuildingResult";
import CarResult from "./ResultComponents/CarResult";
import CommutingResults from "./ResultComponents/CommutingResult";
import FlightResult from "./ResultComponents/FlightResult";
import RemoteWork from "./ResultComponents/RemoteWork";
import ResultMessage from "./ResultComponents/ResultMessage";
import ResetButton from "./ResultComponents/ResetButton";

function Results() {
  return (
    <div className=" md:flex overflow-y-auto h-[40vh] md:h-auto  overflow-x-hidden border-2 rounded-t-lg">
      {/* Result Message + reset Button */}
      <div className="w-[100%] px-3  pb-3  ">
        <div className="pt-5 pl-2 md:h-[80%] text-lg font-semibold">
          <ResultMessage />
        </div>
        <div className="flex h-[100%]border-2 mt-4 justify-start">
          <ResetButton />
        </div>
      </div>
      {/* Baseline results */}
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
      {/* Forecast  results */}
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
