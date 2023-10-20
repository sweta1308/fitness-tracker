import axios from "axios";

export const fetchExercise = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const response = await fetch(
      "https://fitness-tracker.swetaagarwalla.repl.co/api/exercises"
    );
    const data = await response.json();
    dispatch({ type: "FETCH_ALL_EXERCISES", payload: data.exercises });
  } catch (e) {
    console.error(e);
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios({
      method: "POST",
      url: "https://fitness-tracker.swetaagarwalla.repl.co/api/exercises",
      data: exercise
    });
    dispatch({ type: "ADD_EXERCISE", payload: response.data.exercise });
  } catch (e) {
    console.error(e);
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.delete(
      `https://fitness-tracker.swetaagarwalla.repl.co/api/exercises/${id}`
    );
    console.log(response);
    dispatch({ type: "REMOVE_EXERCISE", payload: id });
  } catch (e) {
    console.error(e);
  }
};
