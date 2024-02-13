import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/datex_all.ts";

import { RecipePost } from "common/structs/recipePost.ts";

interface RecipePostView {
  recipePost: ObjectRef<RecipePost>;
}

@template<RecipePostView>((props) => {
  const recipe = props.recipePost.$$.recipe;
  const recipeName = always(() => recipe.val.name);
  const recipeTags = always(() => [...recipe.val.ingredients]);
  const recipeIngredients = always(() => [...recipe.val.tags]);
  const recipeTime = always(() => recipe.val.timeInMinutes);
  const recipeServings = always(() => recipe.val.servings);
  const recipeInstruction = always(() => recipe.val.instruction);
  return (
    <div id="dish-view">
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
        <li class="zutaten"></li>
        <div class="zubereitung">
          <div>
            Schritt 1 <br></br>Schritt 2
          </div>
        </div>
      </div>
    </div>
  );
})
export class RecipePostViewComponent extends Component<RecipePostView> {}
