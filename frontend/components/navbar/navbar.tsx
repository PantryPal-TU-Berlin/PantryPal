import { Component } from "uix/components/Component.ts";

@template(
	<header id="navbar">
		<h1>PantryPal</h1>
		<nav>
			<ul class="nav-links">
				<li><a>Pal</a></li>
				<li><a>Create</a></li>
				<li><a>Notifications</a></li>
				<li><i class="fa-solid fa-plus"></i></li>
				<img
					src="../../utilities/images/profile-picture.jpg"
					alt="profile picture"
					class="profile-picture"
				/>
			</ul>
		</nav>
	</header>
)

export class NavBar extends Component{}