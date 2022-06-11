import Results from "./Results";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ResultsSlider = () => {
  const [open, setOpen] = useState(true);
  const handleFilterOpening = (e: any) => {
    setOpen(!open);
  };

  return (
    <div>
     <div className = "flex w-[100%] border-2 justify-center py-4 rounded-t-lg">
          <button className = "pr-2" onClick={handleFilterOpening}>Open to view content</button>
          <button onClick={handleFilterOpening}>
              {open ? <div>↑</div> :<div>↓</div> }
          </button>
    </div>
      <div >
        <div>{open ? <Results /> : ""}</div>
      </div>
    </div>
  );
};

export default ResultsSlider;
