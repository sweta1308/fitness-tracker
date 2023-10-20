import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { deleteGoal, fetchGoals } from "../../actions/goalAction";
import { GoalForm } from "../../components/goal-form/GoalForm";

export const Goal = () => {
  const [goalModal, setGoalModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const state = useSelector((state) => state.goals);
  return (
    <div>
      <h1>Goals</h1>
      <button onClick={() => setGoalModal(true)}>Add Goal</button>
      {state.loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {state.goals.length === 0 ? (
            <h3>No Goals Found!</h3>
          ) : (
            <ul>
              {state.goals.map(
                ({
                  _id,
                  goalName,
                  description,
                  targetDate,
                  targetCalories,
                  status
                }) => (
                  <li key={_id}>
                    <h3>{goalName}</h3>
                    <p>
                      Description:{" "}
                      {description.length > 20
                        ? description.substring(0, 20) + "..."
                        : description}
                    </p>
                    <p>
                      Target Date: {new Date(targetDate).toLocaleDateString()}
                    </p>
                    <p>Target Calories: {targetCalories} kcals</p>
                    <p>Status: {status}</p>
                    <button onClick={() => dispatch(deleteGoal(_id))}>
                      Delete
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      )}
      <Modal open={goalModal} onClose={() => setGoalModal(false)}>
        <GoalForm setGoalModal={setGoalModal} />
      </Modal>
    </div>
  );
};
