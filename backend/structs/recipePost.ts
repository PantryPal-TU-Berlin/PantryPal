import { Recipe } from "./recipe.ts";
import { User } from "./user.ts";

export type recipePost = {
  user: User;
  recipe: Recipe;
  date: string;
};
