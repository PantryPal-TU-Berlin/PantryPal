type ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

type recipe = {
  id: number;
  name: string;
  descripiton: string;
  ingredients: ingredient[];
  instruction: string;
};
