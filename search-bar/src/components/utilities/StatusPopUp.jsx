import React from "react";
import Modal from "react-bootstrap/Modal";
import { FaRegCheckCircle } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";

const StatusPopUp = (props) => {
  const { popUpData } = props;
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="statusModal"
      scrollable
    >
      <Modal.Header closeButton className="no-border"></Modal.Header>
      <Modal.Body>
        {popUpData && popUpData.status && popUpData.status === "success" && (
          <div
            className={`icon-box text-${popUpData.status} text-center fa-5x`}
          >
            <FaRegCheckCircle size={80} />
          </div>
        )}{" "}
        {popUpData && popUpData.status && popUpData.status === "error" && (
          <div
            className={`icon-box text-${popUpData.status} text-center fa-5x`}
          >
            <RiErrorWarningLine size={80} />
          </div>
        )}
        {popUpData && popUpData.imgComp && (
          <div className="icon-box text-center fa-5x">{popUpData.imgComp}</div>
        )}
        <p
          className={`modal-title w-100 fs-5 text-center text-${
            popUpData.status ? popUpData.status : "success"
          }`}
        >
          {popUpData.msg}
        </p>
        <p class={`text-center ${popUpData.status ? "error-msg" : ""}`}>
          {popUpData.errMsg}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default StatusPopUp;
