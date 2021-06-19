import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import DishCard from "../../components/DishCard/DishCard";
import NavBar from "../../components/NavBar/NavBar";
import { getRandomDishAction } from "../../redux/actions/actions";
import { dishCard, buttonWrapper, button } from "./RandomDishPage.module.css";
const RandomDishPage = () => {
  const dishData = useSelector((state) => state.randomDish);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(dishData).length === 0) {
      dispatch(getRandomDishAction());
    }
  });
  const handleSkip = () => dispatch(getRandomDishAction());
  const handleLike = () => {
    let favourites = localStorage.getItem("favourites");
    if (favourites) {
      favourites = JSON.parse(favourites);
      localStorage.setItem(
        "favourites",
        JSON.stringify([...favourites, dishData])
      );
    } else {
      localStorage.setItem("favourites", JSON.stringify([dishData]));
    }
    dispatch(getRandomDishAction());
  };
  return (
    <>
      <NavBar />
      <DishCard styles={dishCard} dishData={dishData} />
      <div className={buttonWrapper}>
        <Button
          text="Skip"
          type="button"
          onClick={handleSkip}
          styles={button}
        />
        <Button
          text="Like"
          type="button"
          onClick={handleLike}
          styles={button}
        />
      </div>
    </>
  );
};

export default RandomDishPage;
