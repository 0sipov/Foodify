import React from "react";
import { form } from "./Form.module.css";

const Form = ({ children, styles }) => {
  return (
    <form action="submit" className={`${form} ${styles}`}>
      {children}
    </form>
  );
};

export default Form;
