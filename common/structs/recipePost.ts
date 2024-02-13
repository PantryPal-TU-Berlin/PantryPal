import { Recipe } from "./recipe.ts";

export interface RecipePost {
  user: string;
  recipe: Recipe;
  date: Date;
}
