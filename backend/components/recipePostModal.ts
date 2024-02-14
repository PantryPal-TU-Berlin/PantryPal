import { recipePosts, currentRecipePostId } from "backend/data/eternalData.ts";
import { recipePost } from "common/structs/recipePost.ts";

export function createNewRecipePost(recipePost: recipePost) {
  console.log("ausgeführt");
  currentRecipePostId.val = currentRecipePostId.val + 1;
  recipePosts.set(currentRecipePostId.val, recipePost);
  console.log(recipePosts);
}
