import { User } from "./user.ts";
import { createPost } from "./recipePost.ts";

// Create a sample user
const user: User = {
	id: 1,
	name: "Test User",
	email: "test@example.com"
};

// Create a post with the sample user and a recipe index
const post = createPost(user, 0);

// Log the created post
console.log(post);