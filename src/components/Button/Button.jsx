import React from "react";
import { button } from "./Button.module.css";

const Button = ({ text, type, onClick, styles }) => {
  return (
    <button onClick={onClick} type={type} className={`${button} ${styles}`}>
      {text}
    </button>
  );
};

export default Button;
