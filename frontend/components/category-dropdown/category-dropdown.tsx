import { Component } from "uix/components/Component.ts";
import { Ref, ObjectRef } from "unyt_core/runtime/pointers.ts";
import { Ingredient } from "common/structs/recipe.ts";

interface PropsCategory {
  categoryName: string;
  ingredients: ObjectRef<Ingredient[]>;
  selectedDropdown: Ref<string>;
  onadd: (ingredient: Ingredient) => void;
}

@template<PropsCategory>((props) => {
  const dropdownVisible = always(
    () => props.categoryName == props.selectedDropdown.val
  );

  function mutualSelection() {
    dropdownVisible.val = !dropdownVisible.val;
    props.selectedDropdown.val = dropdownVisible.val ? props.categoryName : "";
  }

  return (
    <div class="dropdown">
      <div class="dropdown-box" onclick={mutualSelection}>
        {props.categoryName}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class={{ notDown: dropdownVisible, "arrow-down": true }}
        >
          <path d="m0 0h24v24h-24z" fill="none" />
          <path
            d="m12 13.172 4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z"
            class="text-arrow"
          />
        </svg>
      </div>

      <div
        class={{
          visible: dropdownVisible,
          "dropdown-content": true,
        }}
      >
        {props.ingredients.$.map((ingredient: Ingredient) => (
          <div
            class="dropdown-selection"
            onclick={() => props.onadd(ingredient)}
          >
            {ingredient.ingredient}
          </div>
        ))}
      </div>
    </div>
  );
})
export class CategoryAI extends Component {}
