import React from "react";
import { layout } from "./CreateDishModal.module.css";

const CreateDishModal = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <div className={layout} onClick={() => setModalIsOpen(!modalIsOpen)}></div>
  );
};

export default CreateDishModal;
