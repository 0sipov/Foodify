import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import DishCard from "../../components/DishCard/DishCard";
import NavBar from "../../components/NavBar/NavBar";
import CreateDishModal from "../../components/CreateDishModal/CreateDishModal";
import { addRandomDishAction } from "../../redux/actions/actions";
import {
  dishList,
  dishCard,
  createDishButton,
} from "./FavouritesPage.module.css";

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(modalIsOpen);
  const favourites = JSON.parse(localStorage.getItem("favourites"));
  useEffect(() => {
    dispatch(addRandomDishAction(favourites));
  });
  return (
    <>
      <NavBar />
      <Button
        text="Add custom dish"
        type="button"
        onClick={() => setModalIsOpen(!modalIsOpen)}
        styles={createDishButton}
      />
      <div className={dishList}>
        {favourites?.map((dish) => {
          return (
            <DishCard key={dish.dishId} dishData={dish} styles={dishCard} />
          );
        })}
      </div>
      {modalIsOpen && (
        <CreateDishModal
          setModalIsOpen={setModalIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
    </>
  );
};

export default FavoritesPage;
