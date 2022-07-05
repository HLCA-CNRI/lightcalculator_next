import {memo, useState} from "react";
import Results from "./Results";

function ResultsSlider() {
  const [open, setOpen] = useState(true); // 열려있는지 닫혀있는지 알려주는 state
  // onClick 이벤트 행들러 --> open 토글시킴
  const handleFilterOpening = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <div>{open ? <Results /> : ""}</div>
      </div>
      <div className="flex w-[100%] border-2 justify-center py-4 rounded-b-lg">
        <button type="button" className="pr-2" onClick={handleFilterOpening}>
          {" "}
          {open ? <div>결과 닫기</div> : <div>결과 보기</div>}
        </button>
        <button type="button" onClick={handleFilterOpening}>
          {open ? <div>↓</div> : <div>↑</div>}
        </button>
      </div>
    </div>
  );
}

export default memo(ResultsSlider);
