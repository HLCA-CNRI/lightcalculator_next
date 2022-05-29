import AnnualResult from "./ResultComponents/AnnualResult";
import BuildingResult from "./ResultComponents/BuildingResult";
import CarResult from "./ResultComponents/CarResult";
import CommutingResults from "./ResultComponents/CommutingResult";
import FlightResult from "./ResultComponents/FlightResult";
import RemoteWork from "./ResultComponents/RemoteWork";

const Results = () => {
  return (
    <div className="grid gap-4 grid-cols-3 border shadow-md">
      <div className= "w-[100%] px-3  pb-3">
        <div className = "pt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </div>
      </div>
      <div className="w-[100%] px-3  pb-3">
        <AnnualResult type="Baseline" />
        <div>
          <div className="font-normal">WorkPlace</div>
          <div className="ml-2">
            <CarResult type="baseline" />
            <BuildingResult type="baseline" />
            <CommutingResults type="baseline" />
            <FlightResult type="baseline" />
            <RemoteWork type="baseline" />
          </div>
        </div>
      </div>

      <div className= "w-[100%] px-3 pb-3">
        <AnnualResult type="Forecast" />

        <div>
          <div className="font-normal">WorkPlace</div>
          <div className="ml-2">
            <CarResult type="forecast" />
            <BuildingResult type="forecast" />
            <CommutingResults type="forecast" />
            <FlightResult type="forecast" />
            <RemoteWork type="forecast" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
