import React from "react";
import { label, input, error, inputBlock } from "./Input.module.css";

const Input = (props) => {
  const { id, lable, type, placeholder, textError, setInput, inputState } =
    props;
  const onChange = (e) => setInput(e.target.value);
  return (
    <div className={inputBlock}>
      <label htmlFor={id} className={label}>
        {lable}
      </label>
      <input
        onChange={onChange}
        value={inputState}
        type={type}
        placeholder={placeholder}
        id={id}
        className={input}
      />
      <p className={error}>{textError}</p>
    </div>
  );
};

export default Input;
