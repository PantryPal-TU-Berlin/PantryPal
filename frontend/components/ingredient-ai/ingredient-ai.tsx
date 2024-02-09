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
    <div class="ingredient-comp">
      <div
        class="plus-button"
        onclick={() => (amount.val = amount.val + incDecAmount)}
      >
        <i class="fab fa-plus"></i>
      </div>
      <div class="ingredient-with-amount">
        <div class="ingredient-text">{props.ingredient}</div>
        <input
          type="number"
          value={amount}
          onchange={() =>
            (amount.val =
              parseInt((event!.target as HTMLInputElement).value) > 0
                ? parseInt((event!.target as HTMLInputElement).value)
                : amount.val)
          }
        />
        {props.unit}
      </div>
      <div
        class="minus-button"
        onclick={() =>
          (amount.val =
            amount.val - incDecAmount > 0
              ? amount.val - incDecAmount
              : amount.val)
        }
      >
        <i class="fa-solid fa-minus"></i>
      </div>
      <div class="trash-button">
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  );
})
export class IngredientAI extends Component {}
