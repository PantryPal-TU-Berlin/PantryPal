import { ObjectRef } from "unyt_core/runtime/pointers.ts";

import { ingredientsDict } from "../../utilities/ingredientsStructures.ts";

//structs
import { Ingredient } from "common/structs/recipe.ts";

import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

import { IngredientAI } from "frontend/components/ingredient-ai/ingredient-ai.tsx";
import { SearchBar } from "frontend/components/search-bar/search-bar.tsx";
import { CategoryAI } from "../../components/category-dropdown/category-dropdown.tsx";

const Ai = template(() => {
  const ingredients: ObjectRef<Ingredient[]> = $$([
    { ingredient: "Afiajfodijfaoüdfs", unit: "gr", amount: 1 },
  ]);

  const ingredientsDictKeysAsArray: string[] = Object.keys(ingredientsDict);

  const allIngredients: Ingredient[] = Object.values(ingredientsDict).flat();

  function addIngredient(ingredient: Ingredient) {
    let alreadyExists = false;

    ingredients.forEach((element) => {
      if (element.ingredient === ingredient.ingredient) {
        alreadyExists = true;
        return;
      }
    });

    if (alreadyExists) return;

    ingredients.push(ingredient);
  }

  function deleteIngredient(ingredient: Ingredient) {
    ingredients.forEach((ing, index) => {
      if (ing.ingredient === ingredient.ingredient) {
        ingredients.splice(index, 1);
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
            <div class="col-12 col-lg-6 column justify-content-center">
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
                            onadd={(ingredient: Ingredient) =>
                              addIngredient(ingredient)
                            }
                          />
                        </div>
                        <div class="col-6">
                          <CategoryAI
                            categoryName={ingredientsDictKeysAsArray[index + 1]}
                            ingredients={
                              ingredientsDict[ingredientsDictKeysAsArray[index]]
                            }
                            onadd={(ingredient: Ingredient) =>
                              addIngredient(ingredient)
                            }
                          />
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
                <div>Generate</div>
              </div>
            </div>
            <div class="col-12 col-lg-3 column">
              <div class="right-sidebar">
                <div class="ingredients">
                  <div class="header-side-component">Ingredients</div>
                  <div class="list">
                    {ingredients.$.map((ingredient: Ingredient) => (
                      <IngredientAI
                        ingredient={ingredient}
                        ondelete={(ingredient: Ingredient) =>
                          deleteIngredient(ingredient)
                        }
                      />
                    ))}
                  </div>
                </div>
                <div class="categories">
                  <div class="header-side-component">Categories</div>
                  <div class="list"></div>
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
