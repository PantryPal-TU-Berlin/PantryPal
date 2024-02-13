import { Recipe } from "./recipe.ts";

export interface recipePost {
  user: string;
  recipe: Recipe;
  date: Date;
}
