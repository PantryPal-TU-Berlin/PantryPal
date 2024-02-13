import { Recipe } from "./recipe.ts";
import { User } from "./user.ts";

export interface recipePost {
  user: User;
  recipe: Recipe;
  date: Date;
}
