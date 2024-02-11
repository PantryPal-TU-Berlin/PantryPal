import { Component } from "uix/components/Component.ts";
import { ingredients } from "frontend/components/modals/addRecipeModal/addRecipeModal.tsx";

const ingredient = $$("");
const amount = $$(0);
const unit = $$("");

function addIngredient() {
    const elementInArray = ingredients.find(element => element.ingredient == ingredient.val && element.unit == unit.val)
    if (elementInArray) {
        const index = ingredients.indexOf(elementInArray);
        ingredients.splice(index, 1);
        amount.val += elementInArray.amount;
    }
    ingredients.push({
        ingredient: ingredient.val,
        amount: amount.val,
        unit: unit.val
    });
    resetNewIngredient();
}

export function resetNewIngredient() {
    ingredient.val = "";
    amount.val = 0;
    unit.val = "";
}

@template(() => {
  return (
    <div class="add-ingredient-comp">
      <div class="add-ingredient-with-amount">
        <input id="ingredient" class="ingredient-text" placeholder="Ingredient" value={ingredient}/>
        <input
            class="ingredient-amount"
          type="number"
          value={amount}
        />
        <input id="unit" class="ingredient-unit" placeholder="Unit" value={unit}/>
      </div>
      
      <button onclick={addIngredient} class="add-button">
        <i class="fa-solid fa-plus"></i>
      </button>
    </div>
  );
})
export class AddIngredientComponent extends Component {}