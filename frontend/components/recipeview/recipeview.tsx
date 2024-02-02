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


import { Component } from "uix/components/Component.ts";
//export class RecipeDropup extends Component{}

interface Recipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
  bewertungen: number; 
  time: number; 
  person: number; 
  fullStars: number; 
  halfStars: number;
  img: string;
  emptyStars: number;
}

// Define a custom element
class RecipeDropup extends HTMLElement implements Recipe {
isVisible: boolean = false;
name: string = '';
tags: string[] = [];
bewertungen: number = 0;
time: number = 0;
person: number = 0;
ingredients: string[] = [];
instructions: string[] = [];
fullStars: number = 0;
halfStars: number = 0;
img: string = '';
emptyStars: number = 0;

  constructor
  (        
  name: string,
  ingredients: string[],
  instructions: string[],
  tags: string[],
  bewertungen: number, 
  time: number, 
  person: number, 
  fullStars: number, 
  halfStars: number,
  img: string,
  emptyStars: number
  )
    {
      super();
         // this.recipe: Recipe | null = null;
          this.isVisible = false;
          this.name = name;
          this.tags = tags;
          this.bewertungen = bewertungen;
          this.time = time;
          this.person = person;
          this.ingredients = ingredients;
          this.instructions = instructions;
          this.fullStars = fullStars;
          this.halfStars = halfStars;
          this.img = img;
          this.emptyStars = emptyStars;
          
    }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  fetchRecipeData() {

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

      stars() {
    const div_main = document.createElement('div');
    div_main.classList.add('main');


    for(let i = 0; i < this.fullStars; i++) {
      div_main.innerHTML += `<img src="img/solar_star-bold.png" />`;
    }

const div = document.createElement('div');
div.classList.add('star_to_join');


for(let i = 0; i < this.halfStars; i++) {
      div.innerHTML += `<img src="img/solar_star-bold-duotone.png" />`;
    }

for(let i = 0; i < this.emptyStars; i++) {
      // div.innerHTML += `<img src="img/ (name of no bold star).png " />`;
    }


    div_main.append(div);
    return div_main.innerHTML;
  }

    visibility() {
     this.isVisible = !this.isVisible;
  }

  render() {

this.innerHTML = `

<div class="recipe-dropup ${this.isVisible ? 'show' : ''}">

   <input type="button" onClick="${this.visibility()}"><img src="img/cross.png" alt="" class="cross"> 

<div class="m">
<div class="header_description">
<div class="header">
   <span style="margin-left: 0px;">
      <img src="img/Profile.png" alt="" width="35px" height="35px" />
      <p>Profil anzeigen</p>
   </span>
   <span>
      <img src="img/Like.png" alt="" width="34px" height="32px" />
      <p>Favorisieren</p>
   </span>
   <span>
      <img src="img/Kalender.png" alt="" width="36px" height="31px" />
      <p>Hinzufügen</p>
   </span>
</div>

  
     <div class="description">
        <h1>${this.name}</h1>
        <div class="short_info">
          <div class="tags">
            ${this.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <div class="bewertungen">
           <div>
             ${this.stars()}
           </div>
          
           <span>Bewertungen ${this.bewertungen}</span>
          </div>

          <div class="cook">
            <div class="time">
               <span>
                  <img src="img/clock.png" alt="" />
               </span>
               <div class="text">${this.time} min</div>
            </div>

            <div class="person">
               <span>
                  <img src="img/Person.png" alt="" />
               </span>
               <div class="text">${this.person}x</div>
            </div>

          </div>
        </div>
        <p class="titel">Zutaten:</p>
        <ul> 
          ${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <p class="titel">Zubereitung:</p>
        <ol>
          ${this.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
        </ol>

       </div>
       </div>
       <div class="image">
           <img src=${this.img} alt="" />
       </div> 
</div>
</div>
   
  `; 

  }
}

// Define the new element
customElements.define('recipe-dropup', RecipeDropup);



