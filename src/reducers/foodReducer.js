const initialState = {
  foodItems: [],
  loading: false
};

export const foodReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_ALL_ITEMS":
      return { ...state, foodItems: payload, loading: false };
    case "ADD_FOOD_ITEM":
      return {
        ...state,
        foodItems: [...state.foodItems, payload],
        loading: false
      };
    case "REMOVE_FOOD_ITEM":
      return {
        ...state,
        foodItems: state.foodItems.filter((item) => item._id !== payload),
        loading: false
      };
    default:
      return state;
  }
};
