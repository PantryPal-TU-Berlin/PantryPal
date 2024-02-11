export interface Ingredient {
  ingredient: string;
  unit: string;
  amount: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: Ingredient[];
  instruction: string;
  timeInMinutes: number;
  servings: number;
  image: string;
  tags: string[];
  category: string;
}
