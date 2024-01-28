// // frontend/components/recipeview/recipeview.tsx
// import React, { useState, useEffect } from 'react';

// // Define the type for your recipe
// interface Recipe {
//   name: string;
//   ingredients: string[];
//   instructions: string[];
// }

// const RecipeDropup: React.FC = () => {
//   const [recipe, setRecipe] = useState<Recipe | null>(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     // Here you would fetch the recipe data from your backend
//     // For this example, we will use mock data
//     const mockRecipe: Recipe = {
//       name: 'Bowl mit Reis und Kimchi',
//       ingredients: ['100g Reis', '1 Dose Kimchi', '1 Avocado', 'Sesam'],
//       instructions: [
//         'Reis kochen.',
//         'Avocado schneiden.',
//         'Kimchi, Avocado, und Reis in eine Schüssel geben.',
//         'Mit Sesam verzieren und servieren.'
//       ],
//     };
//     setRecipe(mockRecipe);
//   }, []);

//   const toggleDropup = () => {
//     setIsVisible(!isVisible);
//   };

//   return (
//     <div className={`recipe-dropup ${isVisible ? 'show' : ''}`}>
//       {recipe && (
//         <>
//           <h1>{recipe.name}</h1>
//           <ul>
//             {recipe.ingredients.map((ingredient: string, index: number) => (
//               <li key={index}>{ingredient}</li>
//             ))}
//           </ul>
//           <ol>
//             {recipe.instructions.map((instruction: string, index: number) => (
//               <li key={index}>{instruction}</li>
//             ))}
//           </ol>
//           <button onclick={toggleDropup}>
//             {isVisible ? 'Hide' : 'Show'} Recipe
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// export default RecipeDropup;


// Define the type for your recipe
interface Recipe {
    name: string;
    ingredients: string[];
    instructions: string[];
  }
  
  // Define a custom element
  class RecipeDropup extends HTMLElement {
    recipe: Recipe | null = null;
    isVisible= false;
  
    constructor() {
      super();
      this.fetchRecipeData();
    }
  
    connectedCallback() {
      this.render();
      this.addEventListeners();
    }
  
    fetchRecipeData() {
      // Mock recipe data
      this.recipe = {
        name: 'Bowl mit Reis und Kimchi',
        ingredients: ['100g Reis', '1 Dose Kimchi', '1 Avocado', 'Sesam'],
        instructions: [
          'Reis kochen.',
          'Avocado schneiden.',
          'Kimchi, Avocado, und Reis in eine Schüssel geben.',
          'Mit Sesam verzieren und servieren.'
        ]
      };
      this.render(); // Re-render after fetching data
    }
  
    toggleDropup() {
      this.isVisible = !this.isVisible;
      this.render(); // Re-render to reflect state change
    }
  
    addEventListeners() {
      const toggleButton = this.querySelector('.toggle-dropup');
      toggleButton?.addEventListener('click', () => this.toggleDropup());
    }
  
    render() {
      this.innerHTML = `
        <div class="recipe-dropup ${this.isVisible ? 'show' : ''}">
          <h1>${this.recipe?.name}</h1>
          <ul>
            ${this.recipe?.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
          </ul>
          <ol>
            ${this.recipe?.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
          </ol>
          <button class="toggle-dropup">${this.isVisible ? 'Hide' : 'Show'} Recipe</button>
        </div>
      `;
    }
  }
  
  // Define the new element
  customElements.define('recipe-dropup', RecipeDropup);