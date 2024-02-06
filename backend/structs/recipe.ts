import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";

type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instruction: string;
};

let recipeIndex = 0;
const recipes: Record<number, Datex.ObjectRef<Recipe>> = {};

export function createRecipe(recipeName: string, description: string, instruction: string) {
    const key = recipeIndex++;
    console.log(`Creating database entry for ${key}`);
    recipes[key] = $$(
    {
        id: key,
        name: recipeName,
        description: description,
        ingredients: [],
        instruction: instruction
    } as Recipe
    );

    return recipes[key]; 
}