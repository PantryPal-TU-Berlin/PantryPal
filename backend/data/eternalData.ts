import { ObjectRef } from "unyt_core/runtime/pointers.ts";

import { RecipePost } from "common/structs/recipePost.ts";
import { User } from "common/structs/user.ts";

export const currentRecipePostId = eternalVar("currentRecipePostId") ?? $$(0);

export const recipePosts: Map<number, RecipePost> =
  eternalVar("recipePosts") ?? $$(new Map<number, RecipePost>());

export const users: Map<string, User> =
  eternalVar("users") ?? $$(new Map<string, ObjectRef<User>>());
