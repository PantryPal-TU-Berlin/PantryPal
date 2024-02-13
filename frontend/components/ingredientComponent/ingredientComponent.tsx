import { Component } from "uix/components/Component.ts";
import { PropsIngredient } from "backend/data.ts";
import { ingredients } from "frontend/components/modals/addRecipeModal/addRecipeModal.tsx";

function removeIngredient(ingredient:string, amount: number, unit: string) {
    const ingredientToRemove: PropsIngredient = {ingredient, amount, unit}
    const index = ingredients.findIndex(element => element.ingredient == ingredientToRemove.ingredient && element.amount == ingredientToRemove.amount && element.unit == ingredientToRemove.unit);
    ingredients.splice(index, 1);
}

@template<PropsIngredient>((props) => {
  return (
    <div class="ingredient-comp">
        <i class="fa-solid fa-utensils"></i>
      <div class="ingredient-with-amount">
        
        <div class="ingredient-text">{props.ingredient}</div>
        <div class="ingredient-amount">
            {props.amount} {props.unit}
        </div>
      </div>
      <button onclick={() => removeIngredient(props.ingredient.valueOf()!, props.amount.valueOf()!, props.unit.valueOf()!)} class="trash-button">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
})
export class IngredientComponent extends Component<PropsIngredient> {}