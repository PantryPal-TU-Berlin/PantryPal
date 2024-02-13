import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/datex_all.ts";

import { RecipePost } from "common/structs/recipePost.ts";
import { Ingredient } from "common/structs/recipe.ts";

interface RecipePostView {
  recipePost: ObjectRef<RecipePost>;
  onclose: () => void;
}

@template<RecipePostView>((props) => {
  const recipe = props.recipePost.$$.recipe;
  const recipeName = always(() => recipe.val.name);
  const recipeTags = always(() => [...recipe.val.tags]);
  const recipeIngredients = always(() => [...recipe.val.ingredients]);
  const recipeTime = always(() => recipe.val.timeInMinutes);
  const recipeServings = always(() => recipe.val.servings);
  const recipeInstruction = always(() => recipe.val.instruction);
  return (
    <div id="dish-view">
      <button class="close-button" onclick={props.onclose}>
        &times;
      </button>
      <div class="containerTop">
        <div class="nameContainer">
          <div class="profile">Profil</div>
          <div class="name"> {recipeName}</div>
          <div class="extraInfo">
            {recipeTags.$.map((tag: string) => (
              <div>{tag}</div>
            ))}
            <div class="time-container">
              <img
                src="../../utilities/images/time-dish.png"
                alt="time dish"
                class="time-dish"
              />
              {recipeTime} min
            </div>
            <div class="servings-container">
              <img
                src="../../utilities/images/profile-dish.png"
                alt="serving dish"
                class="serving-dish"
              />
              {recipeServings}x
            </div>
          </div>
        </div>

        <div class="imageContainer">
          <img
            src="../../utilities/images/dish-pic.png"
            alt="dish image"
            class="dish-image"
          />
        </div>
      </div>
      <div class="containerBottom">
        <div>Zutaten</div>
        {recipeIngredients.$.map((ingredient: Ingredient) => (
          <div>{ingredient.ingredient}</div>
        ))}
        <li class="zutaten"></li>
        <div class="zubereitung">
          <div>{recipeInstruction}</div>
        </div>
      </div>
    </div>
  );
})
export class RecipePostViewComponent extends Component {}
