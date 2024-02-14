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
  const recipeImage = always(() => recipe.val.image);
  return (
    <div id="dish-view">
      <button class="close-button" onclick={props.onclose}>
        &times;
      </button>
      <div id="title-row">
					<div class="main-data">
						<h1 style="color:black" class="title">{recipeName}</h1>
						<div class="meta-data">
              <div class="wrapper">
                <div class="tags meta-data-section">
                  {recipeTags.$.map((tag: string) => (
                    <div class="tag">{tag}</div>
                  ))}
                </div>
              </div>
							
							<div class="icons meta-data-section">
								<div class="icon" id="clock-icon">
									<i class="fa-regular fa-clock fa-2xl"></i>
									<label for="clock-icon">{recipeTime} min</label>
								</div>
								<div class="icon" id="person-icon">
                  <i class="fa-solid fa-user fa-2xl"></i>
									<label for="person-icon">{recipeServings}x</label>
								</div>
							</div>
						</div>
					</div>
					<div class="imageContainer"> 
						<img src={recipeImage} alt="Dish photo" class="dish-image"></img>
					</div>
				</div>
        <div class="containerBottom">
          <div id="ingredients">
            <label for="ingredients-list">Ingredients</label>
            
              <ul id="ingredients-list">
                  {recipeIngredients.$.map((ingredient: Ingredient) => (
                    <li class="ingredient-item">
                      <div>{ingredient.ingredient}</div>
                      <div class="amount">{ingredient.amount} {ingredient.unit}</div>
                    </li>
                    ))}
              </ul>
          </div>
          <div id="description-section">
            <label for="description">Instructions</label>
            <div id="description">{recipeInstruction}</div>
            
          </div>
      </div>
    </div>
  );
})
export class RecipePostViewComponent extends Component {}
