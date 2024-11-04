import React, { useState } from "react";
import {IMeal, IMealItem} from "../../types";
import axiosApi from "../../axiosAPI";
import { useNavigate } from "react-router-dom";
import ButtonLoading from "../UI/ButtonLoading/ButtonLoading.tsx";
import {toast} from "react-toastify";

const initialState: IMeal = { time: "", description: "", calories: 0 };


interface Props {
  addNewMeal: (meal: IMeal) => void;
  existingMeal?: IMealItem;
  isEdit?: boolean;
  isLoading?: boolean;
}

const MealForm: React.FC<Props> = ({ meal, isEdit = false, existingMeal = initialState, isLoading = false }) => {
  const [form, setForm] = useState<IMeal>(meal || initialState);
  const navigate = useNavigate();

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit && meal) {
      await axiosApi.put(`/meals/${meal.id}.json`, form);
    } else {
      await axiosApi.post("/meals.json", form);
      toast.success("Meal successfully added");
      navigate("/");
    }
    setForm(initialState);
  };

  const onInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: name === "calories" ? Number(value) : value,
    }));
  };
  return (
    <>
      <form className="form-control mb-4" onSubmit={onSubmitForm}>
        <div>
          <h3>{isEdit ? 'Edit' : 'Add'} meal</h3>
          <label htmlFor="mealTime"></label>
          <select
              name="time"
              onChange={onInputChange}
              value={form.time}
              className="form-select mb-3 mt-1"
          >
            <option value="" disabled>
              Select Meal Time
            </option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Snack">Snack</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="text"></label>
          <textarea
            required
            className="form-control"
            name="description"
            onChange={onInputChange}
            value={form.description}
            placeholder="Meal description"
          ></textarea>
        </div>
        <div className="mt-3">
          <input
            name="calories"
            className="form-control"
            type="number"
            value={form.calories}
            onChange={onInputChange}
            placeholder="Calories"
            required
          />
        </div>
        <button className="btn btn-primary mt-3 mb-2" type="submit">
          Save
        </button>
      </form>
      <div>
        <ButtonLoading text={isEdit ? 'Edit' : 'Add' } isLoading={isLoading} isDisabled={isLoading}/>
      </div>

    </>
  );
};

export default MealForm;
