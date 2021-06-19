import React from "react";
import { input } from "./Input.module.css";

const Input = ({ id, type, placeholder, setInput, inputState, styles }) => {
  const onChange = (e) => setInput(e.target.value);
  return (
    <input
      onChange={onChange}
      value={inputState}
      type={type}
      placeholder={placeholder}
      id={id}
      className={`${input} ${styles}`}
    />
  );
};

export default Input;
