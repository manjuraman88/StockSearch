import React from "react";
import { FiRefreshCcw } from "react-icons/fi";

const Title = (props) => {
  return (
    <>
      <div className="title">
        <span className="yellow-txt">Stock </span>
        <span>Indicator</span>
        <a onClick={props.refresh} className="sync">
          <FiRefreshCcw />
        </a>
      </div>
    </>
  );
};

export default Title;
