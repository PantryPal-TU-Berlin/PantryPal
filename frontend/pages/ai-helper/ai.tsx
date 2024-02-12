import { ObjectRef, Ref } from "unyt_core/runtime/pointers.ts";

import {
  ingredientsDict,
  categoriesFood,
} from "../../utilities/ingredientsStructures.ts";

//structs
import { Ingredient } from "common/structs/recipe.ts";
import { recipeRequest } from "../../../common/structs/recipeForApi.ts";

//frontend components
import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

import { IngredientAI } from "frontend/components/ingredient-ai/ingredient-ai.tsx";
import { SearchBar } from "frontend/components/search-bar/search-bar.tsx";
import { CategoryAI } from "frontend/components/category-dropdown/category-dropdown.tsx";
import { CategoryFood } from "frontend/components/category-food/category-food.tsx";

//backend components
import { sendRecipeRequest } from "backend/pages/ai-helper.ts";

const Ai = template(() => {
  const ingredientsDictKeysAsArray: string[] = Object.keys(ingredientsDict);

  const allIngredients: Ingredient[] = Object.values(ingredientsDict).flat();

  const ingredientsForRequest: ObjectRef<Ingredient>[] = $$([]);

  const categoriesForRequest: string[] = $$([]);

  const selectedDropdown = $$("");

  function generateRequest() {
    console.log("generate request");
    const request: recipeRequest = {
      ingredients: ingredientsForRequest,
      categories: categoriesForRequest,
    };
    console.log(request);
    sendRecipeRequest(request);
  }

  function addCategory(category: string) {
    if (categoriesForRequest.includes(category)) return;
    categoriesForRequest.push(category);
  }

  function deleteCategory(category: string) {
    categoriesForRequest.forEach((cat, index) => {
      if (cat == category) {
        categoriesForRequest.splice(index, 1);
      }
    });
  }

  function addIngredient(ingredient: Ingredient) {
    if (ingredientsForRequest.length >= 15) {
      alert("You can only select 15 ingredients at a time.");
      return;
    }
    let alreadyExists = false;
    ingredientsForRequest.forEach((element) => {
      if (element.$.ingredient == ingredient.ingredient) {
        alreadyExists = true;
        return;
      }
    });

    if (alreadyExists) return;

    ingredientsForRequest.push(
      $$({
        ingredient: ingredient.ingredient,
        amount: ingredient.amount,
        unit: ingredient.unit,
      })
    );
  }

  function deleteIngredient(ingredient: Ingredient) {
    ingredientsForRequest.forEach((ing, index) => {
      if (ing.$.ingredient == ingredient.ingredient) {
        ingredientsForRequest.splice(index, 1);
      }
    });
  }

  return (
    <div>
      <link rel="stylesheet" href="./ai.scss" />

      <div class="main-container">
        <NavBar />
        <div class="container-fluid">
          <div class="row main-content-row">
            <div class="col-12 col-lg-3 column">
              <div class="left-sidebar">
                <div class="recommended-recipe">
                  <div class="header-side-component">Recipe of the Day!</div>
                </div>
                <div class="recommended-recipe">
                  <div class="header-side-component">Random Recipe!</div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6 column">
              <div class="main-content">
                <SearchBar
                  class="search-component"
                  searchSpace={allIngredients}
                  onadd={(ingredient: Ingredient) => addIngredient(ingredient)}
                />
                <div class="category-listing">
                  {ingredientsDictKeysAsArray.map((_, index) =>
                    index % 2 === 0 ? (
                      <div class="row row-of-category">
                        <div class="col-6">
                          <CategoryAI
                            categoryName={ingredientsDictKeysAsArray[index]}
                            ingredients={
                              ingredientsDict[ingredientsDictKeysAsArray[index]]
                            }
                            selectedDropdown={selectedDropdown}
                            onadd={(ingredient: Ingredient) =>
                              addIngredient(ingredient)
                            }
                          />
                        </div>
                        <div class="col-6">
                          <CategoryAI
                            categoryName={ingredientsDictKeysAsArray[index + 1]}
                            ingredients={
                              ingredientsDict[
                                ingredientsDictKeysAsArray[index + 1]
                              ]
                            }
                            selectedDropdown={selectedDropdown}
                            onadd={(ingredient: Ingredient) =>
                              addIngredient(ingredient)
                            }
                          />
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
                <div class="generate-button" onclick={generateRequest}>
                  Generate
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-3 column">
              <div class="right-sidebar">
                <div class="ingredients">
                  <div class="header-side-component">Ingredients</div>
                  <div class="list">
                    {ingredientsForRequest.$.map(
                      (ingredient: Ref<Ingredient>) => (
                        <IngredientAI
                          ingredient={ingredient}
                          ondelete={(ingredient: Ingredient) =>
                            deleteIngredient(ingredient)
                          }
                        />
                      )
                    )}
                  </div>
                </div>
                <div class="categories">
                  <div class="header-side-component">Categories</div>
                  <div class="list">
                    {categoriesFood.map((category) => (
                      <CategoryFood
                        categoryFoodName={category}
                        onadd={() => addCategory(category)}
                        ondelete={() => deleteCategory(category)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
});

export default (
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <Ai />
  </div>
);
