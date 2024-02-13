//backend imports
import { createNewRecipePost } from "backend/functions/recipePostFunctions.ts";
import {
  createUserOrGet,
  getCurrentUserId,
} from "backend/functions/usersFunctions.ts";

//structs imports
import { RecipePost } from "common/structs/recipePost.ts";

import { Component } from "uix/components/Component.ts";
import { IngredientComponent } from "frontend/components/ingredientComponent/ingredientComponent.tsx";
import {
  AddIngredientComponent,
  resetNewIngredient,
} from "frontend/components/ingredientComponent/addIngredientComponent.tsx";
import { Ingredient } from "common/structs/recipe.ts";
import { Datex } from "unyt_core/datex.ts";

export const modalVisible = $$(false);
function addRecipePost() {
  if (title.val.length < 1) {
    alert("Necessary information is missing: title");
    return;
  }
  if (time.val < 1) {
    alert("Necessary information is missing: time");
    return;
  }
  if (servings.val < 1) {
    alert("Necessary information is missing: servings");
    return;
  }
  if (ingredients.length < 1) {
    alert("Necessary information is missing: ingredients");
    return;
  }

  console.log("addRecipePost executed");
  const newRecipePost: RecipePost = {
    user: getCurrentUserId(),
    recipe: {
      name: title.val,
      category: category.val,
      timeInMinutes: time.val,
      servings: servings.val,
      instruction: steps.val,
<<<<<<< HEAD
<<<<<<< HEAD
      tags: tags.val.replace(/\s+/g, "").split(","),
      ingredients: Datex.Pointer.getByValue(ingredients)!.val,
=======
      tags: tags.val.replace(/\s+/g, " ").split("*"),
      
=======
      tags: tags.val.replace(/\s+/g, "").split(","),
>>>>>>> 877e106 (bug)
      ingredients: ingredients,
>>>>>>> 3b6abe5 (local scss changes)
      image: image.val,
    },
    date: new Date(),
  };

  createNewRecipePost(newRecipePost);
  modalVisible.val = !modalVisible.val;
}

export function resetData() {
  title.val = "";
  time.val = 0;
  servings.val = 0;
  tags.val = "";
  steps.val = "Type cooking steps here...";
  category.val = "dairy";
  image.val = "../../utilities/images/default_food.jpg";
  modalVisible.val = false;
  Datex.Pointer.getByValue(ingredients)!.val = [];

  const stepsInput = document.getElementById("steps-input");
  stepsInput!.textContent = "Type cooking steps here...";
  resetNewIngredient();
  modalVisible.val = !modalVisible.val;
}

type Base64Callback = (base64String: string) => void;

function fileToBase64(file: File, callback: Base64Callback) {
  const reader = new FileReader();

  reader.onload = () => {
    if (typeof reader.result === "string") {
      callback(reader.result);
    } else {
      console.error("Error: FileReader result is not a string");
    }
  };

  reader.onerror = (error) => {
    console.error("Error converting file to base64:", error);
  };

  reader.readAsDataURL(file);
}

function myCallback(base64String: string) {
  image.val = base64String;
}

function uploadImage() {
  const fileInput = document.getElementById("imageInput");
  if (
    fileInput instanceof HTMLInputElement &&
    (fileInput as any).files !== null
  ) {
    const files = (fileInput as any).files;

    if (files.length > 0) {
      const file = files[0];
      fileToBase64(file, myCallback);
    }
  }
}

const title = $$("");
const servings = $$(0);
const time = $$(0);
export const ingredients: Ingredient[] = $$([]);
const tags = $$("");
const steps = $$("Type cooking steps here...");
const category = $$("dairy");
const image = $$("../../utilities/images/default_food.jpg");

@template(() => (
  <div id="add-recipe-modal" class={{ visible: modalVisible }}>
    <div class="modal-header">
      <h1>Post a Dish</h1>
      <button class="close-button" onclick={() => (modalVisible.val = !modalVisible.val)}>
        &times;
      </button>
    </div>
    <div class="modal-body">
      <div>
        <div class="static-section">
          <div class="title-section column">
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              required
            />
            <input
              id="tags"
              type="text"
              value={tags}
              placeholder="Tags: separate tags with a comma"
            />
          </div>

          <div class="meta-data-section column">
            <div id="category-selector">
              <i class="fa-solid fa-layer-group fa-xl"></i>
              <select id="category" value={category}>
                <option value="meat">Meat</option>
                <option value="fish">Fish</option>
                <option value="vegan">Vegan</option>
                <option value="dairy">Dairy</option>
              </select>
            </div>
            <div class="meta-data-wrapper">
              <div>
                <i class="fa-regular fa-clock fa-xl"></i>
                <input
                  id="time"
                  type="text"
                  placeholder="Time required"
                  value={time}
                />
                <p>min</p>
              </div>

              <div>
                <i class="fa-solid fa-user fa-xl"></i>
                <select id="servings" value={servings}>
                  <option value="0">Servings</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="dynamic-section">
          <div id="ingredients">
            <label>Ingredients</label>

            <AddIngredientComponent />

            {ingredients.$.map((ingredient: Ingredient) => (
              <IngredientComponent
                ingredient={ingredient.ingredient}
                amount={ingredient.amount}
                unit={ingredient.unit}
              />
            ))}
          </div>

          <div id="steps-container">
            <div class="input-container">
              <label for="steps">Description</label>

              <div id="steps" class="large-input" contenteditable="true">
                {
                  <div id="steps-input" contenteditable="true">
                    Type cooking steps here...
                  </div>
                }
              </div>
              {/* <textarea value={steps} class="large-input" id="steps"></textarea> */}
            </div>
          </div>
        </div>
        <div id="image-container">
          <label for="imageInput">Upload Image</label>
          <div id="imageInputSection">
            <input
              onchange={uploadImage}
              type="file"
              accept="image/*"
              id="imageInput"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="secondary-button" onclick={() => modalVisible.val = !modalVisible.val}>
        Cancel
      </button>
      <button class="primary-button" onclick={addRecipePost}>
        Create
      </button>
    </div>
  </div>
))
export class AddRecipeModal extends Component {}
