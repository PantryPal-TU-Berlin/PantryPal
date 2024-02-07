import { Component } from "uix/components/Component.ts";
import { Datex } from "unyt_core/datex.ts";

interface PropsCategory {
  categoryName: string;
  ingredients: string[];
}

@template<PropsCategory>((category) => (
  <div class="dropdown">
    <div class="dropdown-box">{category.categoryName}</div>
    <div class="dropdown-content">
      {category.ingredients.$.map((ingredient: string) => (
        <div class="dropdown-selection">{ingredient}</div>
      ))}
    </div>
  </div>
))
export class CategoryAI extends Component {}
