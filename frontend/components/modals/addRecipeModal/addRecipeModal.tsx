import { PropsIngredient, createRecipesArray } from "backend/data.ts";
import { Component } from "uix/components/Component.ts";
import { IngredientComponent } from "frontend/components/ingredientComponent/ingredientComponent.tsx";
import { AddIngredientComponent, resetNewIngredient } from "frontend/components/ingredientComponent/addIngredientComponent.tsx";

export const modalVisible = $$(false);

function addRecipe() {
  const stepsInput = document.getElementById("steps-input")?.textContent;
  dishes.push({
    title: title.val,
    time: time.val,
    servings: servings.val,
    image: image.val,
    ingredients: ingredients,
    steps: stepsInput ? stepsInput : "",
    tags: tags.val.split(", "),
    category: category.val,
  });

  modalVisible.val = false;

  resetData();
}

function resetData() {
  title.val = "";
  time.val = 0;
  servings.val = 0;
  tags.val = "";
  steps.val = "Type cooking steps here...";
  category.val = "salad-category";
  image.val = $$("../../utilities/images/default_food.jpg");
  modalVisible.val = false;

  const stepsInput = document.getElementById("steps-input");
  stepsInput!.textContent = "Type cooking steps here...";
  resetIngredients();
  resetNewIngredient();
}

function resetIngredients() {
  let quantity = ingredients.length;
  while(quantity > 0) {
    ingredients.splice(0, 1);
    quantity--;
  }
}

function uploadImage() {
  const fileInput = document.getElementById('imageInput') as HTMLInputElement;
  if (fileInput instanceof HTMLInputElement && (fileInput as any).files !== null) {
      const files = (fileInput as any).files;

      if (files.length > 0) {
        const file = files[0];
        const fileUrl = URL.createObjectURL(file);
        image.val = fileUrl;
        title.val = image.val;
      }
    }
};

const title = $$("");
const servings = $$(0);
const time = $$(0);
export const ingredients: PropsIngredient[] = $$([]);
const tags = $$("");
const steps = $$("Type cooking steps here...");
const category = $$("salad-category");
const image = $$("../../utilities/images/default_food.jpg");

const dishes = await createRecipesArray();

@template(() => (
        <div id="add-recipe-modal" class={{ visible: modalVisible }}>
          <div class="modal-header">
            <h1>Post a Dish</h1>
            <button
              class="close-button"
              onclick={resetData}
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div class="static-section">
                <div class="title-section column">
                    <input id="title" type="text" placeholder="Title" value={title}/>
                    <input id="tags" type="text" value={tags} placeholder="Tags: separate tags with a comma"/>
                </div>
                
                <div class="meta-data-section column">
                    <div id="category-selector">
                        <i class="fa-solid fa-layer-group fa-xl"></i>
                        <select id="category" value={category}>
                          <option value="salad-category">Salad</option>
                          <option value="meat">Meat</option>
                          <option value="fish">Fish</option>
                          <option value="vegan">Vegan</option>
                          <option value="dairy">Dairy</option>
                          <option value="dessert-category">Dessert</option>
                        </select>
                    </div>
                  <div class="meta-data-wrapper">
                      <div>
                        <i class="fa-regular fa-clock fa-xl"></i>
                        <input id="time" type="text" placeholder="Time required" value={time}/>
                        <p>min</p>
                      </div>

                      <div>
                        <i class="fa-solid fa-user fa-xl"></i>
                        <select id="servings" value={servings}>
                          <option selected value="0">Servings</option>
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

                    {ingredients.$.map((ingredient: PropsIngredient) => (
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
                        {<div id="steps-input" contenteditable="true">Type cooking steps here...</div>}
                    </div>
                    {/* <textarea class="large-input" id="steps">{steps}</textarea> */}
                  </div>  
                </div>
                
              </div>
              <div id="image-container">
                <label for="imageInput">Upload Image</label>
                <div id="imageInputSection">
                    <input onchange={uploadImage} type="file" accept="image/*" id="imageInput"/>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
                class="secondary-button"
                onclick={resetData}
            >
                Cancel
            </button>
            <button class="primary-button" onclick={addRecipe}>
                Create
            </button>
            </div>
        </div>
))

export class AddRecipeModal extends Component { }