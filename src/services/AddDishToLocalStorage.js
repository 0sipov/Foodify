export const AddDishToLocalStorage = (dish) => {
  let favourites = localStorage.getItem("favourites");
  if (favourites) {
    favourites = JSON.parse(favourites);
    localStorage.setItem("favourites", JSON.stringify([...favourites, dish]));
  } else {
    localStorage.setItem("favourites", JSON.stringify([dish]));
  }
};
