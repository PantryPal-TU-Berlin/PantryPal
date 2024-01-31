import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";
import { exampleRecipePost } from "../../../backend/data/eternal/recipePosts.ts";

const Ai = template(() => (
  <div>
    <link rel="stylesheet" href="./ai.scss" />

    <div class="main-container">
      <NavBar />
      <div class="container-fluid">
        <div class="row">
          <div class="col-3 column">
            <div class="left-sidebar">
              <div class="recommended-recipe">
                <div class="recipe-of-the-day">Rezept des Tages!</div>
              </div>
              <div class="categories"></div>
            </div>
          </div>
          <div class="col-6 column">
            <div class="main-content"></div>
          </div>
          <div class="col-3 column">
            <div class="right-sidebar">
              <div class="recipe-of-the-day"></div>
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
