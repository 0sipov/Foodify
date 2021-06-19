import React from "react";
import placeholder from "../../imgs/placeholder.png";
import {
  dishCard,
  imgContainer,
  dishTitle,
  dishDescription,
  textCard,
  img,
} from "./DishCard.module.css";

const DishCard = ({ dishData, styles = {} }) => {
  const { dishName, dishRecipe, dishImg } = dishData;
  return (
    <div className={`${dishCard} ${styles}`}>
      <div className={imgContainer}>
        <img src={dishImg || placeholder} alt={dishName} className={img} />
      </div>
      <div className={textCard}>
        <h1 className={dishTitle}>{dishName}</h1>
        <p className={dishDescription}>{dishRecipe}</p>
      </div>
    </div>
  );
};

export default DishCard;
