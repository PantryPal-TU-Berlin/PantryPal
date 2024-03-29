import { Component } from "uix/components/Component.ts";
import { RecipePost } from "common/structs/recipePost.ts";

interface RecipePostComponent {
  recipePost: RecipePost;
  onshow: (recipePost: RecipePost) => void;
}

@template<RecipePostComponent>((_, props) => {
  return(
  <header id="dish-block" onclick={() => props.onshow(props.recipePost)}>
    <img
      src={props.recipePost.recipe.image}
      alt="dish image"
      class="dish-image"
    />

    <div class="dish-information">
      <div class="dish-information-top">
        <div class="dish-title"> {props.recipePost.recipe.name} </div>
        <div class="dish-country">
          {" "}
          {props.recipePost.recipe.tags.map((tag: string) => (
            <div class="tag">{'#'+tag}</div>
          ))}{" "}
        </div>
      </div>
      <div class="dish-information-bottom">
        <div class="time-container">
          <img
            src="../../utilities/images/time-dish.png"
            alt="time dish"
            class="time-dish"
          />
          {props.recipePost.recipe.timeInMinutes} min
        </div>
        <div class="servings-container">
          <img
            src="../../utilities/images/profile-dish.png"
            alt="serving dish"
            class="serving-dish"
          />
          {props.recipePost.recipe.servings}x
        </div>

        <img
          src={`../../utilities/images/CategoryFood/${props.recipePost.recipe.category}.png`}
          alt="categorie picture"
          class="categorie-picture"
        />
      </div>
    </div>
  </header>)
})
export class DishEntry extends Component<RecipePostComponent> {}
