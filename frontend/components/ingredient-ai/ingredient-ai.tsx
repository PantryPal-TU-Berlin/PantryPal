import { Component } from "uix/components/Component.ts";

export interface PropsIngredient {
  ingredient: string;
  amount: number;
  unit: string;
}

@template<PropsIngredient>((props) => (
  <div class="ingredient-row">
    <div class="ingredient-comp">
      <button>
        <i class="fab fa-plus"></i>
      </button>
      <div class="ingredient-with-amount">
        <div class="ingredient-text">{props.ingredient}</div>
        <input type="number" value={props.amount} />
        {props.unit}
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
