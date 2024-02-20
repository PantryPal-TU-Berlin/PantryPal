import { Component } from "uix/components/Component.ts";
import { Ref } from "unyt_core/runtime/pointers.ts";

interface PropsCategoryFood {
  categoryFoodName: string;
  onadd: (categoryFood: string) => void;
  ondelete: (categoryFood: string) => void;
}

@template<PropsCategoryFood>((_, props) => {
  const selected = $$(false);
  return (
    <div
      class={{ "category-selection": true, selected: selected }}
      onclick={() => {
        selected.val = !selected.val;
        selected.val
          ? props.onadd(props.categoryFoodName)
          : props.ondelete(props.categoryFoodName);
      }}
    >
      {props.categoryFoodName}
    </div>
  );
})
export class CategoryFood extends Component {}
