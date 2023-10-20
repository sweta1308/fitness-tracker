const initialState = {
  exercises: [],
  loading: false
};

export const exerciseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_ALL_EXERCISES":
      return { ...state, exercises: payload, loading: false };
    case "ADD_EXERCISE":
      return {
        ...state,
        exercises: [...state.exercises, payload],
        loading: false
      };
    case "REMOVE_EXERCISE":
      return {
        ...state,
        exercises: state.exercises.filter(
          (exercise) => exercise._id !== payload
        ),
        loading: false
      };
    default:
      return state;
  }
};
