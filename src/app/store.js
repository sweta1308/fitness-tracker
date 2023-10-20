import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { exerciseReducer } from "../reducers/exerciseReducer";
import { foodReducer } from "../reducers/foodReducer";
import { goalReducer } from "../reducers/goalReducer";

const reducers = combineReducers({
  exercises: exerciseReducer,
  foods: foodReducer,
  goals: goalReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
