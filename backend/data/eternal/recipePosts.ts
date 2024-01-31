import { recipePost } from "../../structs/recipePost.ts";
import { Recipe } from "../../structs/recipe.ts";

export const recipePosts =
  eternalVar("recipePosts") ?? $$(new Set<recipePost>());

const today = new Date();

const exampleRecipe: Recipe = {
  id: 1,
  name: "Example Recipe",
  descripiton: "This is an example recipe.",
  ingredients: [
    {
      name: "Example Ingredient",
      quantity: 1,
      unit: "unit",
    },
  ],
  instruction: "This is an example instruction.",
};

export const exampleRecipePost: recipePost = {
  user: {
    id: 1,
    username: "exampleUser",
    profilePicture: "../data/images/example-dish.jpeg",
  },
  recipe: exampleRecipe,
  date: String(today.getDate()),
};

recipePosts.add(exampleRecipePost);
