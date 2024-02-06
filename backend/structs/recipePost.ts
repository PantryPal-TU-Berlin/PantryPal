import { Recipe, createRecipe } from "./recipe.ts";
import { User } from "./user.ts";

export type RecipePost = {
  user: User;
  id: number;
  recipe: Recipe;
  date: string;
};

let postIndex = 0;
const posts: Record<number, RecipePost> = {};

export function createPost(user: User, recipeIndex: number) {
  const recipe = createRecipe("Recipe Name", "Description", "Instruction");
  if (!recipe) {
    console.log(`Recipe with index ${recipeIndex} does not exist.`);
    return null;
  }
  const date = new Date().toISOString();
  const post: RecipePost = {
    user: user,
    id: postIndex++,
    recipe: recipe,
    date: date
  };
  posts[post.id] = post;
  return post;
}