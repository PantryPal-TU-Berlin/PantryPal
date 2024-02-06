import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";
import { IngredientAI } from "frontend/components/ingredient-ai/ingredient-ai.tsx";
import { exampleRecipePost } from "../../../backend/data/eternal/recipePosts.ts";

const Ai = template(() => (
  <div>
    <link rel="stylesheet" href="./ai.scss" />

    <div class="main-container">
      <NavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-3 column">
            <div class="left-sidebar">
              <div class="recommended-recipe">
                <div class="header-side-component">Recipe of the Day!</div>
              </div>
              <div class="categories">
                <div class="header-side-component">Random Recipe!</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 column justify-content-center">
            <div class="main-content"></div>
          </div>
          <div class="col-12 col-lg-3 column">
            <div class="right-sidebar">
              <div class="ingredients">
                <div class="header-side-component">Ingredients</div>
                <div class="list">
                  <IngredientAI ingredient="Hallo" unit="Gr" />
                  <IngredientAI ingredient="anderes" />
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
));

export default (
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
    </head>
    <body>
      <Ai />
    </body>
  </html>
);
