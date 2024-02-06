import { Component } from "uix/components/Component.ts";

interface PropsIngredient {
  ingredient: string;
  unit: string;
}

@template<PropsIngredient>((PropsIngredient) => (
  <div class="ingredient-row">
    <div class="ingredient-comp">
      <button>
        <i class="fab fa-plus"></i>
      </button>
      <div class="ingredient-with-amount">
        <div class="ingredient-text">{PropsIngredient.ingredient}</div>
        <input type="number" value="1" />
        {PropsIngredient.unit}
      </div>
      <button>
        <i class="fa-solid fa-minus"></i>
      </button>
    </div>
    <button>
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>
))
export class IngredientAI extends Component {}
