import { Component } from "uix/components/Component.ts";

@template(
  <header id="navbar">
    <h1>PantryPal</h1>
    <nav>
      <ul class="nav-links">
        <li>
          <a>
            <i class="fa-solid fa-bowl-food"></i>
          </a>
        </li>
        <li>
          <i class="fa-solid fa-bell"></i>
        </li>
        <li>
          <i class="fa-solid fa-plus"></i>
        </li>
        <img
          src="../../utilities/images/profile-picture.jpg"
          alt="profile picture"
          class="profile-picture"
        />
      </ul>
    </nav>
  </header>
)
export class NavBar extends Component {}
