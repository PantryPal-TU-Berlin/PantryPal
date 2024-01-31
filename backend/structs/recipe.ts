type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export type Recipe = {
  id: number;
  name: string;
  descripiton: string;
  ingredients: Ingredient[];
  instruction: string;
};
