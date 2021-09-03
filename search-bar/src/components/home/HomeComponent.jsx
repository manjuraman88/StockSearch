import React from "react";
import ServerGrids from "../table/ServerGrids";
const HomeComponent = (props) => {
  return (
    <>
      <div>
        <ServerGrids {...props} />
      </div>
    </>
  );
};

export default HomeComponent;
