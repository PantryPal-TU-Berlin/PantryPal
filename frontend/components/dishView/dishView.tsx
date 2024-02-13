import { Component } from "uix/components/Component.ts";
import { RecipePost } from "common/structs/recipePost.ts";

@template<RecipePost>((_, props) => (
  <header id="dish-view">
    <div class="containerTop">
      <div class="nameContainer">
        <div class="profile">Profil</div>
        <div class="name"> {props.recipe.name}</div>
        <div class="extraInfo">
          {props.recipe.tags.map((tag: string) => (
            <button class="tag">{tag}</button>
          ))}
          <div class="time-container">
            <img
              src="../../utilities/images/time-dish.png"
              alt="time dish"
              class="time-dish"
            />
            {props.recipe.timeInMinutes} min
          </div>
          <div class="servings-container">
            <img
              src="../../utilities/images/profile-dish.png"
              alt="serving dish"
              class="serving-dish"
            />
            {props.recipe.servings}x
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
  </header>
))
export class recipePostView extends Component {}
