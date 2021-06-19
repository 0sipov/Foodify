import getDish from "../../request/getDish";
import { ADD_DISH, CREATE_DISH, GET_DISH } from "../variables";

const addRandomDishAction = (dish) => ({
  type: ADD_DISH,
  payload: dish,
});

const createDishAction = (dish) => ({
  type: CREATE_DISH,
  payload: dish,
});

const getRandomDishAction = () => {
  return async (dispatch) => {
    const dish = await getDish();
    return dispatch({
      type: GET_DISH,
      payload: {
        dishId: dish.idMeal,
        dishName: dish.strMeal,
        dishRecipe: dish.strInstructions,
        dishImg: dish.strMealThumb,
      },
    });
  };
};
export { addRandomDishAction, createDishAction, getRandomDishAction };
