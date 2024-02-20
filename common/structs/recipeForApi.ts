import { Ingredient } from "common/structs/recipe.ts";

export interface recipeRequest {
  categories: string[];
  ingredients: Ingredient[];
}
