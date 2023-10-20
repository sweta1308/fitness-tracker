const initialState = {
  goals: [],
  loading: false
};

export const goalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_ALL_GOALS":
      return { ...state, goals: payload, loading: false };
    case "ADD_GOAL":
      return { ...state, goals: [...state.goals, payload], loading: false };
    case "REMOVE_GOAL":
      return {
        ...state,
        goals: state.goals.filter((goal) => goal._id !== payload),
        loading: false
      };
    default:
      return state;
  }
};
