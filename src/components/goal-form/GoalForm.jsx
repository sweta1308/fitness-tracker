import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGoal } from "../../actions/goalAction";

export const GoalForm = ({ setGoalModal }) => {
  const dispatch = useDispatch();
  const [newGoal, setNewGoal] = useState({
    goalName: "",
    description: "",
    targetDate: "",
    targetCalories: 0,
    status: "In Progress"
  });
  const handleGoalSubmit = (e) => {
    e.preventDefault();
    dispatch(addGoal(newGoal));
    setGoalModal(false);
    setNewGoal({
      goalName: "",
      description: "",
      targetDate: "",
      targetCalories: 0,
      status: "In Progress"
    });
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
      <h2>Add Goal</h2>
      <form onSubmit={handleGoalSubmit}>
        <div>
          <label htmlFor="goal">Goal Name: </label>
          <input
            id="goal"
            value={newGoal.goalName}
            onChange={(e) =>
              setNewGoal({ ...newGoal, goalName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            value={newGoal.description}
            onChange={(e) =>
              setNewGoal({ ...newGoal, description: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="targetDate">Target Date:</label>
          <input
            id="targetDate"
            type="date"
            value={newGoal.targetDate}
            onChange={(e) =>
              setNewGoal({ ...newGoal, targetDate: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="targetCalories">Target Calories:</label>
          <input
            id="targetCalories"
            type="number"
            value={newGoal.targetCalories}
            onChange={(e) =>
              setNewGoal({
                ...newGoal,
                targetCalories: e.target.value
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="status">Status:</label>
          <select
            value={newGoal.status}
            onChange={(e) => setNewGoal({ ...newGoal, status: e.target.value })}
          >
            <option value="In Progress">In Progress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </select>
        </div>

        <input type="submit" />
        <button onClick={() => setGoalModal(false)}>Cancel</button>
      </form>
    </div>
  );
};
