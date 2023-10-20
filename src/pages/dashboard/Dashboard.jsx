import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchExercise } from "../../actions/exerciseAction";
import { fetchFood } from "../../actions/foodAction";
import { fetchGoals } from "../../actions/goalAction";

export const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercise());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);
  const state = useSelector((state) => state);
  const { exercises, foods, goals } = state;
  const totalCaloriesBurnt = exercises.exercises.reduce(
    (acc, value) => acc + value.caloriesBurned,
    0
  );
  const totalCaloriesConsumed = foods.foodItems.reduce(
    (acc, value) => acc + value.calories,
    0
  );
  const totalCaloriesGoal = goals.goals.reduce(
    (acc, value) => acc + value.targetCalories,
    0
  );
  const remainingCalories = totalCaloriesGoal - totalCaloriesBurnt;
  return (
    <div>
      <h1>Dashboard</h1>
      {exercises.loading || foods.loading || goals.loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <p>
            <strong>Total Calories Burnt: </strong> {totalCaloriesBurnt} kcals
          </p>
          <p>
            <strong>Total Calories Consumed: </strong> {totalCaloriesConsumed}{" "}
            kcals
          </p>
          <p>
            <strong>Total Calories Goal: </strong> {totalCaloriesGoal} kcals
          </p>
          <p>
            <strong>Remaining Calories: </strong>{" "}
            {remainingCalories < 0 ? 0 : remainingCalories} kcals
          </p>
        </div>
      )}
    </div>
  );
};
