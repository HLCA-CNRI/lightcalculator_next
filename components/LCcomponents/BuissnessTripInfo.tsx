import {memo} from "react";
import BuissnessTripInput from "./BuissnessTripInput";

type BuisnessTripInfoType = {
  type: string;
};
function BuisnessTripInfo({type}: BuisnessTripInfoType) {
  return (
    <div className="w-full  p-5">
      <BuissnessTripInput country="아시아" value="asia" isBaseline={type === "baseline"} />
      <BuissnessTripInput country="유럽" value="europe" isBaseline={type === "baseline"} />
      <BuissnessTripInput
        country="북아메리카"
        value="northAmerica"
        isBaseline={type === "baseline"}
      />
      <BuissnessTripInput
        country="남아메리카"
        value="southAmerica"
        isBaseline={type === "baseline"}
      />
      <BuissnessTripInput country="오세아니아" value="oceana" isBaseline={type === "baseline"} />
      <BuissnessTripInput country="아프리카" value="africa" isBaseline={type === "baseline"} />
    </div>
  );
}

export default memo(BuisnessTripInfo);
