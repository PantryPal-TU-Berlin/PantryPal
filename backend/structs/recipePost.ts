import { Recipe } from "./recipe.ts";
import { User } from "./user.ts";

export type recipePost = {
  user: User;
  id: number;
  recipe: Recipe;
  date: string;
};
