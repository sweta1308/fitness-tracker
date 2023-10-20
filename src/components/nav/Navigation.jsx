import { Link } from "react-router-dom";
import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Dashboard</Link>
      <Link to="/exercises">Exercises</Link>
      <Link to="/foodItems">Food Items</Link>
      <Link to="/goals">Goals</Link>
    </div>
  );
};
