import MealBlocks from "../MealBlocks/MealBlocks.tsx";
import React, { useEffect, useState } from "react";
import axiosApi from "../../axiosAPI.ts";
import { IMeal, IMealAPI } from "../../types";

const CollectionOfMealsInfo: React.FC = () => {
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    const fetchMealsData = async () => {
      try {
        const response = await axiosApi<IMealAPI>("/meals/meals.json");
        console.log(response.data);

        setMeals(
          Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          })),
        );
      } catch (error) {
        console.error(error);
      }
    };

    void fetchMealsData();
  }, []);

  return (
    <div>
      {meals.length > 0 ? (
        meals.map((meal) =>
            <MealBlocks key={meal.id} meal={meal} />)
      ) : (
        <p>No meals yet</p>
      )}
    </div>
  );
};

export default CollectionOfMealsInfo;
