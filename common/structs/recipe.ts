export interface Ingredient {
  ingredient: string;
  unit: string;
  amount: number;
}

export interface Recipe {
  id: number;
  name: string;
  descripiton: string;
  ingredients: Ingredient[];
  instruction: string;
}
