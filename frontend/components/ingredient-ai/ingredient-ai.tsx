import { Component } from "uix/components/Component.ts";

interface PropsIngredient {
  ingredient: string;
}

@template<PropsIngredient>((PropsIngredient) => (
  <div class="ingredient-comp">
    <button>
      <i class="fab fa-plus"></i>
    </button>
    <div class="ingredient-with-amount">
      {PropsIngredient.ingredient}
      <input type="number" value="1" />
    </div>
    <button>
      <i class="fa-solid fa-minus"></i>
    </button>
  </div>
))
export class IngredientAI extends Component {}
