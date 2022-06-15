import Results from "./Results";
import { memo, useState } from "react";

const ResultsSlider = () => {
  const [open, setOpen] = useState(true);
  const handleFilterOpening = (e: any) => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <div>{open ? <Results /> : ""}</div>
      </div>
      <div className="flex w-[100%] border-2 justify-center py-4 rounded-b-lg shadow-md">
        <button className="pr-2" onClick={handleFilterOpening}>
          {" "}
          {open ? <div>결과 닫기</div> : <div>결과 보기</div>}
        </button>
        <button onClick={handleFilterOpening}>{open ? <div>↓</div> : <div>↑</div>}</button>
      </div>
    </div>
  );
};

export default memo(ResultsSlider);
