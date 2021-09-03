import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader-medium spinner-border " role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="">Loading ...</div>
      </div>
      <div className="fade modal-backdrop show"></div>
    </>
  );
};

export default Loader;
