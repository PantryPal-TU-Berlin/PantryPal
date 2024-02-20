import { NavBar } from "../../components/navbar/navbar.tsx";
import { Footer } from "../../components/footer/footer.tsx";
import { AuthIcon } from "auth";

const Login = template(() => (
  <div>
    <link rel="stylesheet" href="./login.scss" />

    <div class="pantryHeading">
      <h1>PantryPal</h1>
    </div>
    <div class="VerticalDevider">
      <div class="columnL">
        <h2>Zutaten, aber keine Idee? Eine Zutat - Tausend Möglichkeiten</h2>
        <h3>
          Melde dich an und entedecke tausende köstliche Rezepte und Features!
        </h3>
      </div>

      <section class="LoginContainer">
        <div class="LoginDiv">
          <h2>Sign In</h2>
          <AuthIcon />
          <div class="HeaderContainer">
            <h2>Welcome to PantryPal</h2>
          </div>
        </div>
      </section>

      <div class="columnR">
        <img
          style="max-width: 300px; height: auto; object-fit: contain"
          src="../../utilities/images/LoginFood.jpg"
          alt="login food"
          class="LoginFood"
        />
      </div>
    </div>

    <div class="backgroundImage">
      <div class="overlay"></div>
    </div>
  </div>
));

export default <Login />;
