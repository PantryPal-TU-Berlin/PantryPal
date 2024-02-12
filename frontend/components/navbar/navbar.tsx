import { Component } from "uix/components/Component.ts";

@template(
  <header id="navbar">
    <a href="/login">
      <h1>PantryPal</h1>
    </a>

    <ul class="nav-links">
      <li>
        <a href="/ai-helper">
          <i class="fa-solid fa-bowl-food"></i>
        </a>
      </li>
      <li>
        <i class="fa-solid fa-bell"></i>
      </li>
      <li>
        <i class="fa-solid fa-plus"></i>
      </li>

      <a href="/profil">
        <img
          src="../../utilities/images/profile-picture.jpg"
          alt="profile picture"
          class="profile-picture"
        />
      </a>
    </ul>
  </header>
)
export class NavBar extends Component {}
