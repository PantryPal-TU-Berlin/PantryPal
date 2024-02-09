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
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class={{ notDown: dropdownVisible, "arrow-down": true }}
        >
          <path d="m0 0h24v24h-24z" fill="none" />
          <path d="m12 13.172 4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z" />
        </svg>
      </div>

      <div
        class={{
          visible: dropdownVisible,
          "dropdown-content": true,
        }}
      >
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
