import React, { useState } from "react";
import StatusPopUp from "../utilities/StatusPopUp";
const DropDown = (props) => {
  const { versionMap } = props;
  const [modalShow, setModalShow] = useState(false);
  const [selectedVal, setSelectedVal] = useState(versionMap.current.toString());
  const [popUpData, setPopUpData] = useState({
    status: "error",
    msg: "",
    errMsg: "",
  });
  const displayStatusPopup = (status, msg, errMsg) => {
    const popup = {
      status: status,
      msg: msg,
      errMsg: errMsg,
    };
    setPopUpData(popup);
    setModalShow(true);
  };
  const updateVersion = (e) => {
    if (
      versionMap.current &&
      versionMap.current.toString() === e.target.value
    ) {
      displayStatusPopup(
        "error",
        "Please select a different version",
        "Version selected is same as the current version."
      );
      return;
    } else {
      setSelectedVal(e.target.value);
      const ver = {
        name: versionMap.name,
        version: e.target.value,
        id: versionMap.id,
      };
      props.updateVersion(ver);
    }
  };

  return (
    <>
      <div className="width-50">
        <select
          className="drp-select"
          onChange={(e) => {
            e.preventDefault();
            updateVersion(e);
          }}
          value={selectedVal}
        >
          {versionMap.versions.map((ver) => (
            <option value={ver}>{ver}</option>
          ))}
        </select>
      </div>
      <StatusPopUp
        show={modalShow}
        onHide={() => setModalShow(false)}
        popUpData={popUpData}
      />
    </>
  );
};

export default DropDown;
