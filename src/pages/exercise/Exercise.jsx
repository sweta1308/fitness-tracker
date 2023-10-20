import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { deleteExercise, fetchExercise } from "../../actions/exerciseAction";
import { ExerciseForm } from "../../components/exercise-form/ExerciseForm";

export const Exercise = () => {
  const [exerciseModal, setExerciseModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercise());
  }, [dispatch]);
  const state = useSelector((state) => state.exercises);
  return (
    <div>
      <h1>Exercises</h1>
      <button onClick={() => setExerciseModal(true)}>Add Exercise</button>
      {state.loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {state.exercises.length === 0 ? (
            <h3>No exercises found!</h3>
          ) : (
            <ul>
              {state.exercises.map(
                ({ _id, exerciseName, duration, caloriesBurned }) => (
                  <li key={_id}>
                    <h3>{exerciseName}</h3>
                    <p>Duration: {duration} minutes</p>
                    <p>Calories Burnt: {caloriesBurned} kcals</p>
                    <button onClick={() => dispatch(deleteExercise(_id))}>
                      Delete
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      )}
      <div id="exercise-form">
        <Modal open={exerciseModal} onClose={() => setExerciseModal(false)}>
          <ExerciseForm setExerciseModal={setExerciseModal} />
        </Modal>
      </div>
    </div>
  );
};
