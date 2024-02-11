import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/runtime/pointers.ts";
import { Ingredient } from "common/structs/recipe.ts";

interface PropsCategoryFood {
  categoryFoodName: string;
  onadd: (ingredient: Ingredient) => void;
}

@template<PropsCategoryFood>((_, props) => {
  const selected = $$(false);
  return <div class="category-food">props.categoryFoodName</div>;
})
export class SearchBar extends Component {}
