import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../../actions/exerciseAction";

export const ExerciseForm = ({ setExerciseModal }) => {
  const dispatch = useDispatch();
  const [newExercise, setNewExercise] = useState({
    exerciseName: "",
    duration: 0
  });
  const handleExerciseSubmit = (e) => {
    e.preventDefault();
    dispatch(addExercise(newExercise));
    setExerciseModal(false);
    setNewExercise({ exerciseName: "", duration: 0 });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2
  };

  return (
    <div style={{ ...style }} className="modal">
      <h2>Add Exercise</h2>
      <form onSubmit={handleExerciseSubmit}>
        <div>
          <label htmlFor="exercise">Exercise Name: </label>
          <input
            id="exercise"
            value={newExercise.exerciseName}
            onChange={(e) =>
              setNewExercise({ ...newExercise, exerciseName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="duration">
            Duration <small>(in minutes)</small>:{" "}
          </label>
          <input
            id="duration"
            type="number"
            value={newExercise.duration}
            onChange={(e) =>
              setNewExercise({ ...newExercise, duration: e.target.value })
            }
            required
          />
        </div>
        <input type="submit" />
        <button onClick={() => setExerciseModal(false)}>Cancel</button>
      </form>
    </div>
  );
};
