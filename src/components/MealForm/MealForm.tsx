import { IMeal } from '././types.d.ts';
import axiosApi from "../../axiosAPI.ts";
import { useState} from 'react';

const MealForm = () => {
    const [meal, setMeal] = useState<IMeal>({
        mealTime: '',
        description: '',
        calories: 0,
    });

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosApi.post('/meals.json', {...meal});
            setMeal(response.data);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
      <form className="form-control" onSubmit={submitForm}>
          <div>
              <h4>Add / edit meal</h4>
              <label htmlFor="mealTime"></label>
              <select
                  id="mealTime"
                  className="form-select mb-3 mt-1"
              >
                  <option value="">Select Meal Time</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
              </select>
          </div>
          <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Meal description"
          ></textarea>
          <label htmlFor="text">Meal description</label>
        </div>
        <div className="form-group mt-3">
            <input
            id="mealCalories"
            className="form-control"
            type="number"
            name="mealCalories"
            placeholder="Calories"
            min="1"
            required
            />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Save
        </button>
      </form>
    </>
  );
};

export default MealForm;
