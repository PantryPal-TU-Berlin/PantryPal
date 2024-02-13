import { Component } from "uix/components/Component.ts";
import { ObjectRef } from "unyt_core/datex_all.ts";

import { recipePost } from "common/structs/recipePost.ts";

interface recipePostView {
  recipePost: recipePost;
}

@template<recipePostView>((props) => {
  if (props.recipePost.val == null) {
    console.log("loading...");
    return <div>Loading...</div>;
  }
  return (
    <div id="dish-view">
      <div class="containerTop">
        <div class="nameContainer">
          <div class="profile">Profil</div>
          <div class="name"> {props.recipePost.val.recipe.name}</div>
          <div class="extraInfo">
            {props.recipePost.val.recipe.tags.map((tag: string) => (
              <button class="tag">{tag}</button>
            ))}
            <div class="time-container">
              <img
                src="../../utilities/images/time-dish.png"
                alt="time dish"
                class="time-dish"
              />
              {props.recipePost.val.recipe.timeInMinutes} min
            </div>
            <div class="servings-container">
              <img
                src="../../utilities/images/profile-dish.png"
                alt="serving dish"
                class="serving-dish"
              />
              {props.recipePost.val.recipe.servings}x
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
export class RecipePostView extends Component {}
