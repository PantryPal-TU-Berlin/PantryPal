import { createRecipe } from './recipe.ts';
import { createPost } from './recipePost.ts';
import { User } from './user.ts';

// Call createRecipe with some sample data
const recipe = createRecipe('Test Recipe', 'This is a test recipe.', 'Step 1: Test the recipe.');
const recipe2 = createRecipe('Test Recipe', 'This is a test recipe.', 'Step 1: Test the recipe.');
// Log the created recipe
console.log(recipe);
console.log(recipe2);

// Create a sample user
const user: User = {
  id: 1,
  username: 'testUser',
  profilePicture: 'path/to/profile/picture.jpg'
};

// Call createPost with the user and a recipe index
const post = createPost(user, 0);
const post2 = createPost(user, 1);

// Log the created post
console.log(post);
console.log(post2);