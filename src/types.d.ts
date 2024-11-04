export interface IMeal {
  id?: string;
  time: "Breakfast" | "Snack" | "Lunch" | "Dinner";
  description: string;
  calories: number;
}

export interface IMealItem {
  id: string;
  meal: IMeal;
}

export interface IMealAPI {
  [id: string]: IMeal;
}
