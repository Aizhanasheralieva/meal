import React from "react";
import { useParams } from "react-router-dom";
import { IMeal } from "../../types";
import axiosApi from "../../axiosAPI";
import { useEffect, useState } from "react";
import MealForm from "../../components/MealForm/MealForm.tsx";

const EditMeal: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await axiosApi.get(`/meals/${id}.json`);
      setMeal({ id, ...response.data });
    };
    void fetchMeal();
  }, [id]);


  return <MealForm meal={meal} isEdit={true} />;
};

export default EditMeal;
