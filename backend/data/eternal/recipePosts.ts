import { recipePost } from "../../../common/structs/recipePost.ts";
import { Recipe } from "../../../common/structs/recipe.ts";

export const recipePosts =
  eternalVar("recipePosts") ?? $$(new Set<recipePost>());

const today = new Date();

const exampleRecipe: Recipe = {
  id: 1,
  name: "Example Recipe",
  descripiton: "This is an example recipe.",
  ingredients: [
    {
      ingredient: "Example Ingredient",
      amount: 1,
      unit: "unit",
    },
  ],
  instruction: "This is an example instruction.",
};

export const exampleRecipePost: recipePost = {
  id: 1,
  user: {
    id: 1,
    username: "exampleUser",
    profilePicture: "../data/images/example-dish.jpeg",
  },
  recipe: exampleRecipe,
  date: today,
};

recipePosts.add(exampleRecipePost);
