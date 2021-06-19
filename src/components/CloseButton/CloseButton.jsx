import React from "react";
import { closeButton } from "./CloseButton.module.css";

const CloseButton = ({ type, onClick }) => {
  return (
    <button onClick={onClick} type={type} className={closeButton}>
      X
    </button>
  );
};

export default CloseButton;
