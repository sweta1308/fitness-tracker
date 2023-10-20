import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../../actions/foodAction";

export const FoodForm = ({ setFoodModal }) => {
  const dispatch = useDispatch();
  const [newFoodItem, setNewFoodItem] = useState({
    foodName: "",
    calories: 0,
    proteins: 0,
    carbohydrates: 0,
    fats: 0
  });
  const handleFoodSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(newFoodItem));
    setFoodModal(false);
    setNewFoodItem({
      foodName: "",
      calories: 0,
      proteins: 0,
      carbohydrates: 0,
      fats: 0
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
      <h2>Add Food Item</h2>
      <form onSubmit={handleFoodSubmit}>
        <div>
          <label htmlFor="food">Food Item: </label>
          <input
            id="food"
            value={newFoodItem.foodName}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, foodName: e.target.value })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="calories">Calories: </label>
          <input
            id="calories"
            type="number"
            value={newFoodItem.calories}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, calories: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="proteins">
            Proteins: <small>(in g): </small>{" "}
          </label>
          <input
            id="proteins"
            type="number"
            value={newFoodItem.proteins}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, proteins: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="carbohydrates">
            Carbohydrates: <small>(in g): </small>{" "}
          </label>
          <input
            id="carbohydrates"
            type="number"
            value={newFoodItem.carbohydrates}
            onChange={(e) =>
              setNewFoodItem({
                ...newFoodItem,
                carbohydrates: e.target.value
              })
            }
            required
          />
        </div>

        <div>
          <label htmlFor="fats">
            Fats: <small>(in g): </small>{" "}
          </label>
          <input
            id="fats"
            type="number"
            value={newFoodItem.fats}
            onChange={(e) =>
              setNewFoodItem({ ...newFoodItem, fats: e.target.value })
            }
            required
          />
        </div>

        <input type="submit" />
        <button onClick={() => setFoodModal(false)}>Cancel</button>
      </form>
    </div>
  );
};
