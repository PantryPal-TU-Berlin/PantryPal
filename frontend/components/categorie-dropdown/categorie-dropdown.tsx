import { Component } from "uix/components/Component.ts";

interface PropsCategory {
  category: string;
  ingredients: string[];
}

@template<PropsCategory>((PropsCategory) => (
  <div clas="dropdown">
    <div class="category-title">{PropsCategory.category}</div>
    <div class="dropdown-content"></div>
  </div>
))
export class IngredientAI extends Component {}
