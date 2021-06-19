import React from "react";
import { form } from "./Form.module.css";

const Form = ({ children }) => {
  return (
    <form action="submit" className={form}>
      {children}
    </form>
  );
};

export default Form;
