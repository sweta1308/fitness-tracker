import axios from "axios";

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await fetch(
      "https://fitness-tracker.swetaagarwalla.repl.co/api/food"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_ALL_ITEMS", payload: data.foods });
  } catch (e) {
    console.error(e);
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios({
      method: "POST",
      url: "https://fitness-tracker.swetaagarwalla.repl.co/api/food",
      data: food
    });
    dispatch({ type: "ADD_FOOD_ITEM", payload: response.data.food });
  } catch (e) {
    console.error(e);
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.delete(
      `https://fitness-tracker.swetaagarwalla.repl.co/api/food/${id}`
    );
    console.log(response);
    dispatch({ type: "REMOVE_FOOD_ITEM", payload: id });
  } catch (e) {
    console.error(e);
  }
};
