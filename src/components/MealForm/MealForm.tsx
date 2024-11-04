import React, {useState} from 'react';
import axiosApi from "../../axiosAPI.ts";
import {IMeal} from "../../types";

const initialState = {
    time: '',
    description: '',
    calories: 0,
};

const MealForm = () => {
    const [form, setForm] = useState<IMeal>(initialState);

    const onSubmitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("form submitted", form);

        if (form.description.trim().length > 0 && form.calories > 0 && form.time !== '') {
            try {
                const response = await axiosApi.post('/meals.json', {...form});
                setForm(initialState);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
            setForm({...form, calories: Number(form.calories)});
        } else {
            alert("Please, fill out the fields");
        }
    };
    const onInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: name === 'calories' ? Number(value) : value,
            };
        });
    };

  return (
    <>
      <form className="form-control" onSubmit={onSubmitForm}>
          <div>
              <h4>Add / edit meal</h4>
              <label htmlFor="mealTime"></label>
              <select
                  name="time"
                  onChange={onInputChange}
                  value={form.time}
                  className="form-select mb-3 mt-1"
              >
                  <option value="" disabled>Select Meal Time</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
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
        <button className="btn btn-primary mt-3" type="submit" >
          Save
        </button>
      </form>
    </>
  );
};

export default MealForm;
