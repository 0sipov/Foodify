import { GET_DISH, CREATE_DISH, ADD_DISH } from "../variables";

const initialState = {
  favourites: [],
  randomDish: {},
};
export default function handleTweetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DISH:
      return {
        ...state,
        randomDish: { ...action.payload },
      };
    case ADD_DISH:
      return {
        ...state,
        favourites: action.payload,
      };
    default:
      return state;
  }
}
