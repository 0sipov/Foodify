import React from "react";
import { textarea } from "./Textarea.module.css";

const Textarea = ({
  id,
  type,
  placeholder,
  setTextArea,
  textareaState,
  styles,
}) => {
  const onChange = (e) => setTextArea(e.target.value);
  return (
    <textarea
      onChange={onChange}
      value={textareaState}
      type={type}
      placeholder={placeholder}
      id={id}
      className={`${textarea} ${styles}`}
    />
  );
};

export default Textarea;
