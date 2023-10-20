import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Exercise } from "./pages/exercise/Exercise";
import { Food } from "./pages/food/Food";
import { Goal } from "./pages/goal/Goal";
import { Navigation } from "./components/nav/Navigation";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exercises" element={<Exercise />} />
        <Route path="/foodItems" element={<Food />} />
        <Route path="/goals" element={<Goal />} />
      </Routes>
    </div>
  );
}
