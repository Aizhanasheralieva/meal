import React from "react";
import { IMeal } from "../../types";
import {useNavigate} from "react-router-dom";

interface Props {
  meal: IMeal;
  onDelete: () => void;
}

const MealBlocks: React.FC<Props> = ({ meal, onDelete }) => {
    const navigate = useNavigate();

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6>{meal.time}</h6>
        <p>{meal.description}</p>
        <p>{meal.calories} kcal</p>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate(`/edit/${meal.id}`);
          }}
        >
          Edit
        </button>
        <button className="btn btn-danger ms-2" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default MealBlocks;
