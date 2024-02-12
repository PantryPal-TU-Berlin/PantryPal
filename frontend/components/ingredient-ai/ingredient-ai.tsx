import { Component } from "uix/components/Component.ts";
import { ObjectRef, Ref } from "unyt_core/runtime/pointers.ts";
import { Ingredient } from "common/structs/recipe.ts";

interface IngredientAIProps {
  ingredient: ObjectRef<Ingredient>;
  ondelete: (ingredient: Ingredient) => void;
}

@template<IngredientAIProps>((props) => {
  const incDecAmount: number = val(props.ingredient.$.amount);
  const amount = $$(incDecAmount);
  const _amount = $$(incDecAmount);

  function inc() {
    amount.val = amount.val + incDecAmount;
    _amount.val = amount.val;
    props.ingredient.$.amount.val = amount.val;
  }

  function dec() {
    if (amount.val - incDecAmount > 0) {
      amount.val = amount.val - incDecAmount;
      _amount.val = amount.val;
    }
  }

  return (
    <div class="ingredient-comp">
      <div class="plus-button" onclick={inc}>
        <i class="fab fa-plus"></i>
      </div>
      <div class="ingredient-with-amount">
        <div class="ingredient-text">{props.ingredient.$.ingredient}</div>
        <input
          type="number"
          value={amount}
          onchange={() =>
            amount.val > 0
              ? (_amount.val = amount.val)
              : (amount.val = _amount.val)
          }
        />
        {props.ingredient.$.unit}
      </div>
      <div class="minus-button" onclick={dec}>
        <i class="fa-solid fa-minus"></i>
      </div>
      <div
        class="trash-button"
        onclick={() => props.ondelete(props.$.ingredient.val)}
      >
        <i class="fa-solid fa-trash"></i>
      </div>
    </div>
  );
})
export class IngredientAI extends Component {}
