import { recipePost } from "common/structs/recipePost.ts";
import { User } from "common/structs/user.ts";

export const currentRecipePostId = eternalVar("currentRecipePostId") ?? $$(0);

export const recipePosts: Map<number, recipePost> =
  eternalVar("recipePosts") ?? $$(new Map<number, recipePost>());

export const users: Map<string, User> =
  eternalVar("users") ?? $$(new Map<string, User>());
