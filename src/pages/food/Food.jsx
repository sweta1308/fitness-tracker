import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "@mui/material";
import { deleteFood, fetchFood } from "../../actions/foodAction";
import { FoodForm } from "../../components/food-form/FoodForm";

export const Food = () => {
  const [foodModal, setFoodModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  const state = useSelector((state) => state.foods);
  return (
    <div>
      <h1>Food Items</h1>
      <button onClick={() => setFoodModal(true)}>Add Food Item</button>
      {state.loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {state.foodItems.length === 0 ? (
            <h3>No Food Items Found</h3>
          ) : (
            <ul>
              {state.foodItems.map(
                ({
                  _id,
                  foodName,
                  calories,
                  proteins,
                  carbohydrates,
                  fats
                }) => (
                  <li key={_id}>
                    <h3>{foodName}</h3>
                    <p>Calories: {calories} kcals</p>
                    <p>Proteins: {proteins} g</p>
                    <p>Carbohydrates: {carbohydrates} g</p>
                    <p>Fats: {fats} g</p>
                    <button onClick={() => dispatch(deleteFood(_id))}>
                      Delete
                    </button>
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      )}
      <Modal open={foodModal} onClose={() => setFoodModal(false)}>
        <FoodForm setFoodModal={setFoodModal} />
      </Modal>
    </div>
  );
};
