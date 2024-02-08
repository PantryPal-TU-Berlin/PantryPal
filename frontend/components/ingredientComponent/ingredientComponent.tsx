import { Component } from "uix/components/Component.ts";
import { PropsIngredient } from "backend/data.ts";

/* @template(
  <div id="ingredient-container">
    <input id="ingredient" type="text" placeholder="Ingredient" />
    <button id="delete">&times;</button>
  </div>
) */

@template<PropsIngredient>((props) => (
    <div class="ingredient-row">
      <label for="ingredient-comp">Ingredients</label>
      <div class="ingredient-comp" id="ingredient-comp">
        <div class="ingredient-with-amount">
          <input id={props.ingredient} class="ingredient-text" value={props.ingredient}>{props.ingredient}</input>
          <input class="ingredient-amount" type="number" value={props.amount} />
          <input class="ingredient-unit" type="text" value={props.unit}>
            {props.unit}
          </input>
        </div>
        <button>
          <i class="fa-solid fa-trash fa-xs"></i>
        </button>
      </div>
    </div>
  ))

export class IngredientComponent extends Component<PropsIngredient> {}
