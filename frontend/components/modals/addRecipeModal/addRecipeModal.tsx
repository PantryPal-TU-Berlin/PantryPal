import { PropsIngredient, createRecipesArray } from "backend/data.ts";
import { Component } from "uix/components/Component.ts";
import { IngredientComponent } from "frontend/components/ingredientComponent/ingredientComponent.tsx";

export const modalVisible = $$(false);


function addRecipe() {
  dishes.push({
    title: title.val,
    time: time.val,
    servings: servings.val,
    //image: image.val,
    ingredients: createIngredientsArray(),
    steps: steps,
    tags: tags.val.split(", "),
  });

  modalVisible.val = false;
}

function createIngredientsArray() {
  const itemsArray = ingredients.val.split(", ");
  const resultArray: PropsIngredient[] = [];

  for (let i = 0; i < itemsArray.length; i += 3) {
    const ingredient = itemsArray[i];
    const amount = parseInt(itemsArray[i + 1]);
    const unit = itemsArray[i + 2];
  
    // Create an object with properties "ingredient", "amount", and "unit"
    const obj: PropsIngredient = {
      ingredient: ingredient,
      amount: amount,
      unit: unit
    };
  
    // Push the object to the result array
    resultArray.push(obj);
  }

  return resultArray
}

/* function addIngredient() {
  const dynamicSection = document.querySelector(".dynamic-section #ingredients");
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Ingredient";
  const newDeleteButton = document.createElement("button");
  newDeleteButton.id = "delete";
  newDeleteButton.innerHTML = "&times;"
  const newInputContainer = document.createElement("div");
  newInputContainer.className = "input-container";
  newInputContainer.appendChild(newInput);
  newInputContainer.appendChild(newDeleteButton);
  dynamicSection?.insertBefore(newInputContainer, dynamicSection.lastElementChild);
} */

/* function addStep() {
  const dynamicSection = document.querySelector(".dynamic-section #steps");
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = "Step";
  const newDeleteButton = document.createElement("button");
  newDeleteButton.id = "delete";
  newDeleteButton.innerHTML = "&times;"
  const newInputContainer = document.createElement("div");
  newInputContainer.className = "input-container";
  newInputContainer.appendChild(newInput);
  newInputContainer.appendChild(newDeleteButton);
  dynamicSection?.insertBefore(newInputContainer, dynamicSection.lastElementChild);
} */


const title = $$("");
const servings = $$(0);
const time = $$(0);
const ingredients = $$("");
//const ingredients: PropsIngredient[] = $$([{ ingredient: "test", amount: 2, unit: "G" }]);
const tags = $$("");
const steps = $$("");
const category = $$("Meat");
const image = $$("../../utilities/images/dish-pic.png");

const dishes = await createRecipesArray();

@template(() => (
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
                    <input id="tags" type="text" value={tags} placeholder="Tags: separate tags with a comma"/>
                </div>
                
                <div class="meta-data-section column">
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
                      <option value="3">4</option>
                      <option value="3">5+</option>
                    </select>
                  </div>
                  
                </div>
              </div>

              <div class="dynamic-section">
                <div id="ingredients-container">
                  <div class="input-container">
                  {/* <div class="input-container">
                    <input id="ingredient" type="text" placeholder="Ingredient"/>
                    <button id="delete">&times;</button>
                  </div>  
                  <button class="add-button" onclick={addIngredient}>Add Ingredient</button> */}
                  {/* {ingredients.$.map((ingredient: PropsIngredient) => (
                            <IngredientComponent
                                ingredient={ingredient.ingredient}
                                amount={ingredient.amount}
                                unit={ingredient.unit}
                            />
                            
                        ))} */}
                      <label for="steps">Ingredients</label>
                      <textarea class="text" id="ingredients" value={ingredients}/>
                    </div>
                </div>
                <div id="steps-container">
                  <div class="input-container">
                    {/* <input id="step" type="text" placeholder="Step"/>
                    <button id="delete">&times;</button> */}
                    <label for="steps">Description</label>
                    
                    <textarea class="text" id="steps" value={steps}/>
                  </div>  
                  {/* <button class="add-button" onclick={addStep}>Add Step</button> */}
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
            <button class="primary-button" onclick={addRecipe}>
                Create
            </button>
            </div>
        </div>
))


export class AddRecipeModal extends Component { }