import axios from "axios";

export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await fetch(
      "https://fitness-tracker.swetaagarwalla.repl.co/api/goals"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_ALL_GOALS", payload: data.goals });
  } catch (e) {
    console.error(e);
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios({
      method: "POST",
      url: "https://fitness-tracker.swetaagarwalla.repl.co/api/goals",
      data: goal
    });
    dispatch({ type: "ADD_GOAL", payload: response.data.goal });
  } catch (e) {
    console.error(e);
  }
};

export const deleteGoal = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.delete(
      `https://fitness-tracker.swetaagarwalla.repl.co/api/goals/${id}`
    );
    console.log(response);
    dispatch({ type: "REMOVE_GOAL", payload: id });
  } catch (e) {
    console.error(e);
  }
};
