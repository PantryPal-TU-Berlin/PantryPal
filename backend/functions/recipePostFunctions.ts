import {
  recipePosts,
  currentRecipePostId,
  users,
} from "backend/data/eternalData.ts";
import { recipePost } from "common/structs/recipePost.ts";

export function createNewRecipePost(recipePost: recipePost) {
  console.log("ausgeführt");
  currentRecipePostId.val = currentRecipePostId.val + 1;
  recipePosts.set(currentRecipePostId.val, recipePost);
  const user = users.get(recipePost.user);
  if (user) {
    user.anzahlRezepte += 1;
    user.rezepte.push(currentRecipePostId);
  }
}

export function getAllRecipePosts() {
  console.log("getAllRecipePosts");
  console.log(recipePosts.values());
  return Array.from(recipePosts.values());
}
