import { recipePosts } from "backend/data/eternalData.ts";

export function getAllRecipePosts() {
  console.log("getAllRecipePosts");
  console.log(recipePosts.values());
  return Array.from(recipePosts.values());
}
