import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { DishEntry } from "frontend/components/dish/dish-entry.tsx";
import { ObjectRef } from "unyt_core/datex_all.ts";

import {
  getAllRecipePosts,
  createNewRecipePost,
} from "backend/functions/recipePostFunctions.ts";
import { Datex } from "unyt_core/datex.ts";
import { RecipePostViewComponent } from "frontend/components/dishView/dishView.tsx";
import { RecipePost } from "common/structs/recipePost.ts";

const modalVisible = $$(false);

const allRecipePosts: RecipePost[] = await getAllRecipePosts();

const currentSelectedRecipe: ObjectRef<RecipePost> = $$({
  user: "",
  recipe: {
    name: "",
    category: "",
    timeInMinutes: 0,
    servings: 0,
    instruction: "",
    tags: [],
    ingredients: [],
    image: "",
  },
  date: new Date(),
});

function showRecipePost(recipePost: RecipePost) {
  console.log("exetcuted showRecipePost");
  const ptr = Datex.Pointer.getByValue(currentSelectedRecipe);
  ptr.val = recipePost;
  modalVisible.val = true;
}

function hideDishView() {
  modalVisible.val = false;
}

const Home = template(() => (
  <div>
    <link rel="stylesheet" href="./home.scss" />

    <NavBar />

    <div class="main-container">
      <div class="horizontal-container">
        <div class="top-div">
          {" "}
          {/*Text + Kategorie */}
          <div class="user-block">
            {" "}
            {/* Hallo User & Was willst du heute zubereiten */}
            <h5 class="hallo-heading"></h5>
            <p class="frage-text">Was willst du heute zubereiten?</p>
          </div>
          <div class="filter-block">
            {" "}
            {/*Filter categories*/}
            <button class="sort-button">Sort by...</button>
            <button class="filter-button">Filter by...</button>
          </div>
        </div>
        <div class="horizontal-scroller">
          <img
            src="../../utilities/images/CategoryFood/pizza-category.png"
            alt="pizza category"
            class="media-element"
          />
          <img
            src="../../utilities/images/CategoryFood/salad-category.png"
            alt="salad category"
            class="media-element"
          />
          <img
            src="../../utilities/images/CategoryFood/dessert-category.png"
            alt="dessert category"
            class="media-element"
          />
          <img
            src="../../utilities/images/CategoryFood/pizza-category.png"
            alt="pizza category"
            class="media-element"
          />
          <img
            src="../../utilities/images/CategoryFood/salad-category.png"
            alt="salad category"
            class="media-element"
          />
          <img
            src="../../utilities/images/CategoryFood/dessert-category.png"
            alt="dessert category"
            class="media-element"
          />
        </div>
      </div>

      <div class="vertical-container">
        <div class="top-div">
          {" "}
          {/*Text + Kategorie */}
          <div class="user-block">
            {" "}
            {/* Hallo User & Was willst du heute zubereiten */}
            <h5 class="hallo-heading">Daily best repices</h5>
            <p class="frage-text">
              Die spezielle Auswahl nach deinen Vorlieben.
            </p>
          </div>
          <div class="category-block">
            {" "}
            {/*Filter categories*/}
            <button class="category dairy">Dairy</button>
            <button class="category meat">Meat</button>
            <button class="category vegan">Vegan</button>
            <button class="category fish">Fish</button>
            <input
              class="search-field"
              type="text"
              placeholder="Suche Rezepte nach Name, Zutat und ..."
              id="fname"
            ></input>
          </div>
        </div>
        <div class="vertical-scroller">
          {allRecipePosts.$.map((recipePost: RecipePost) => (
            <DishEntry
              recipePost={recipePost}
              onshow={() => showRecipePost(recipePost)}
            />
          ))}
        </div>
      </div>
    </div>
    {toggle(
      modalVisible,
      <RecipePostViewComponent
        class="recipe-view-component"
        recipePost={currentSelectedRecipe}
        onclose={() => hideDishView()}
      />,
      <div></div>
    )}
  </div>
));

export default (
  <body>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <Home />
  </body>
);
