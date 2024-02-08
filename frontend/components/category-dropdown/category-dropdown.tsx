import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/runtime/pointers.ts";

interface PropsCategory {
  categoryName: string;
  ingredients: ObjectRef<string[]>;
  onadd: (ingredient: string) => void;
}

@template<PropsCategory>((_, props) => {
  const dropdownVisible = $$(false);
  return (
    <div class="dropdown">
      <div
        class="dropdown-box"
        onclick={() => (dropdownVisible.val = !dropdownVisible.val)}
      >
        {props.categoryName}
      </div>

      <div class={{ visible: dropdownVisible, "dropdown-content": true }}>
        {props.ingredients.$.map((ingredient: string) => (
          <div
            class="dropdown-selection"
            onclick={() => props.onadd(ingredient)}
          >
            {ingredient}
          </div>
        ))}
      </div>
    </div>
  );
})
export class CategoryAI extends Component {}
