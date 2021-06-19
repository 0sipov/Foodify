import React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Textarea from "../Textarea/Textarea";
import {
  layout,
  form,
  input,
  textarea,
  formTitle,
  createDishButton,
} from "./CreateDishModal.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AddDishToLocalStorage } from "../../services/AddDishToLocalStorage";

const CreateDishModal = ({ toggleModal }) => {
  const [dishName, setDishName] = useState("");
  const [dishRecipe, setDishRecipe] = useState("");
  const createNewDish = () => ({
    dishId: uuidv4(),
    dishImg: null,
    dishName,
    dishRecipe,
  });
  const handleCreateDishButton = () => {
    AddDishToLocalStorage(createNewDish());
    toggleModal();
  };
  return (
    <div className={layout} onClick={toggleModal}>
      <Form styles={form}>
        <h1 className={formTitle}>Add custom dish</h1>
        <Input
          placeholder="Dish title"
          setInput={setDishName}
          inputState={dishName}
          styles={input}
        />
        <Textarea
          placeholder="Dish description..."
          setTextArea={setDishRecipe}
          textareaState={dishRecipe}
          styles={textarea}
        />
        <Button
          text="Add custom dish"
          type="button"
          onClick={handleCreateDishButton}
          styles={createDishButton}
        />
      </Form>
    </div>
  );
};

export default CreateDishModal;
