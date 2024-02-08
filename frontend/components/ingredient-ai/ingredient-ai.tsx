import { Component } from "uix/components/Component.ts";

export interface PropsIngredient {
  ingredient: string;
  unit: string;
  amount: number;
}

@template<PropsIngredient>((props) => {
  const incDecAmount = props.unit == "ml" || props.unit == "gr" ? 100 : 1;
  const amount = $$(incDecAmount);

  return (
    <div class="ingredient-row">
      <div
        class="ingredient-comp"
        onclick={() => (amount.val = amount.val + incDecAmount)}
      >
        <div>
          <i class="fab fa-plus"></i>
        </div>
        <div class="ingredient-with-amount">
          <div class="ingredient-text">{props.ingredient}</div>
          <input type="number" value={amount} />
          {props.unit}
        </div>
        <div onclick={() => (amount.val = amount.val + incDecAmount)}>
          <i class="fa-solid fa-minus"></i>
        </div>
      </div>
      <button>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
})
export class IngredientAI extends Component {}
