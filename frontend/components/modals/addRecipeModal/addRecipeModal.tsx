import { createRecipesArray } from "backend/data.ts";
import { Component } from "uix/components/Component.ts";

const modalVisible = $$(false);
export function showAddRecipeModal() {
  modalVisible.val = true;
}


function addRecipe() {
  recipes.push({
    title: title.val,
    time: time.val,
    servings: servings.val,
    ingredients: ingredients,
    tags: tagsArray,
    steps: steps,
  });

  modalVisible.val = false;
}

function addIngredient() {
  const dynamicSection = document.querySelector(".dynamic-section #ingredients");
  const newInput = document.createElement("input");
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('placeholder', "Ingredient");
  const newDeleteButton = document.createElement("button");
  newDeleteButton.id = "delete";
  newDeleteButton.innerHTML = "&times;"
  const newInputContainer = document.createElement("div");
  newInputContainer.className = "input-container";
  newInputContainer.appendChild(newInput);
  newInputContainer.appendChild(newDeleteButton);
  dynamicSection?.insertBefore(newInputContainer, dynamicSection.lastElementChild);
}

function addStep() {
  const dynamicSection = document.querySelector(".dynamic-section #steps");
  const newInput = document.createElement("input");
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('placeholder', "Step");
  const newDeleteButton = document.createElement("button");
  newDeleteButton.id = "delete";
  newDeleteButton.innerHTML = "&times;"
  const newInputContainer = document.createElement("div");
  newInputContainer.className = "input-container";
  newInputContainer.appendChild(newInput);
  newInputContainer.appendChild(newDeleteButton);
  dynamicSection?.insertBefore(newInputContainer, dynamicSection.lastElementChild);
}

function collectIngredients() {
  const inputFields = document.querySelectorAll('input[id="ingredient]');
  const texts: string[] = [];

  inputFields.forEach(function(input) {
    if(input.textContent != null)
      texts.push(input.textContent);
  });

  ingredients = texts;
}

function collectSteps() {
  const inputFields = document.querySelectorAll('input[id="step]');
  const texts: string[] = [];

  inputFields.forEach(function(input) {
    if(input.textContent != null)
      texts.push(input.textContent);
  });

  steps = texts;
}

function createTagsArray() {
  const inputField = document.querySelector('input[id="tags]');
  let texts: string[] = [];

  if(inputField) {
    const string = inputField.innerHTML;
    texts = string.split(", ");
  }
  tagsArray = texts;
}

function closeModal() {
  collectIngredients();
  collectSteps();
  createTagsArray();
  addRecipe();
}

const title = $$("");
const servings = $$(0);
const time = $$(0);
let ingredients: string[] = [];
let tagsArray: string[] = [];
let steps: string[] = [];

const recipes = await createRecipesArray();

@template(
        <div id="add-recipe-modal" class={{ visible: modalVisible }}>
          <div class="modal-header">
            <h1>Post a Dish</h1>
            <button
              class="close-button"
              onclick={() => (modalVisible.val = !modalVisible.val)}
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div>
              <div class="static-section">
                <div class="title-section column">
                    <input id="title" type="text" placeholder="Title" value={title}/>
                    <input id="tags" type="text" placeholder="Tags: separate tags with a comma"/>
                </div>
                
                <div class="meta-data-section column">
                  <div>
                    <svg fill="rgb(8, 92, 54)" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 100 100" enable-background="new 0 0 100 100"><path d="M53.5,46.7V25.6c0-2-1.6-3.5-3.5-3.5c-2,0-3.5,1.6-3.5,3.5v29.6c0.1,2,1.6,3.6,3.5,3.6c0.8,0,1.7-0.4,2.4-1.1L67.2,43  c1.4-1.4,1.4-3.7,0-5c-1.4-1.4-3.7-1.4-5,0L53.5,46.7z M50,5C25.2,5,5,25.2,5,50c0,24.8,20.2,45,45,45c24.8,0,45-20.2,45-45  C95,25.2,74.8,5,50,5L50,5z M50,85.5c-19.5,0-35.5-16-35.5-35.5c0-19.5,16-35.6,35.5-35.6c19.5,0,35.6,16,35.6,35.6  C85.6,69.5,69.5,85.5,50,85.5z"></path></svg>
                    <input id="time" type="text" placeholder="Time required" value={time}/>
                    <p>min</p>
                  </div>
                  
                  <div>
                    <svg fill="rgb(8, 92, 54)" width="1.5em" height="1.5em" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-j</title><path d="M332.64,64.58C313.18,43.57,286,32,256,32c-30.16,0-57.43,11.5-76.8,32.38-19.58,21.11-29.12,49.8-26.88,80.78C156.76,206.28,203.27,256,256,256s99.16-49.71,103.67-110.82C361.94,114.48,352.34,85.85,332.64,64.58Z"/><path d="M432,480H80A31,31,0,0,1,55.8,468.87c-6.5-7.77-9.12-18.38-7.18-29.11C57.06,392.94,83.4,353.61,124.8,326c36.78-24.51,83.37-38,131.2-38s94.42,13.5,131.2,38c41.4,27.6,67.74,66.93,76.18,113.75,1.94,10.73-.68,21.34-7.18,29.11A31,31,0,0,1,432,480Z"/></svg>
                    <select id="servings" value={servings}>
                      <option selected value="0">Servings</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5+</option>
                    </select>
                  </div>
                  
                </div>
              </div>

              <div class="dynamic-section">
                <div id="ingredients">
                  <div class="input-container">
                    <input id="ingredient" type="text" placeholder="Ingredient"/>
                    <button id="delete">&times;</button>
                  </div>  
                  <button class="add-button" onclick={addIngredient}>Add Ingredient</button>
                </div>
                <div id="steps">
                  <div class="input-container">
                    <input id="step" type="text" placeholder="Step"/>
                    <button id="delete">&times;</button>
                  </div>  
                  <button class="add-button" onclick={addStep}>Add Step</button>
                </div>
                
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
                class="secondary-button"
                onclick={() => (modalVisible.val = !modalVisible.val)}
            >
                Cancel
            </button>
            <button class="primary-button" onclick={closeModal}>
                Create
            </button>
            </div>
        </div>
)

export class AddRecipeModal extends Component { }