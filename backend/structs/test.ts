import { createRecipe } from './recipe.ts';

// Call createRecipe with some sample data
const recipe = createRecipe('Test Recipe', 'This is a test recipe.', 'Step 1: Test the recipe.');
const recipe2 = createRecipe('Test Recipe', 'This is a test recipe.', 'Step 1: Test the recipe.');
// Log the created recipe
console.log(recipe);
console.log(recipe2);