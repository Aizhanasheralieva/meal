import React, { useEffect, useState } from "react";
import { IMeal } from "../../types";
import axiosApi from "../../axiosAPI";
import { useNavigate } from "react-router-dom";
import MealBlocks from "../../components/MealBlocks/MealBlocks.tsx";

const Home: React.FC = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await axiosApi.get("/meals.json");
      const mealsData = Object.keys(response.data).map((key) => ({
        id: key,
        ...response.data[key],
      }));
      setMeals(mealsData);
    };
    void fetchMeals();
  }, []);

  const handleDelete = async (id: string) => {
    await axiosApi.delete(`/meals/${id}.json`);
    setMeals(meals.filter((meal) => meal.id !== id));
  };

  const totalCalories = meals.reduce((acc, meal) => acc + meal.calories, 0);

  return (
    <div className="container mt-5">
      <h1>Calorie Tracker</h1>
      <hr />
      <button className="btn btn-primary mb-5" onClick={() => navigate("/add")}>
        Add new meal
      </button>
      <h4>Total Calories: {totalCalories} kcal</h4>
      {meals.length > 0 ? (
        meals.map((meal) => (
          <MealBlocks
            key={meal.id}
            meal={meal}
            onDelete={() => handleDelete(meal.id)}
          />
        ))
      ) : (
        <p>No meals yet</p>
      )}
    </div>
  );
};

export default Home;
