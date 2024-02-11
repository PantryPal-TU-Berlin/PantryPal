import { Component } from "uix/components/Component.ts";
import { AddRecipeModal, modalVisible } from "frontend/components/modals/addRecipeModal/addRecipeModal.tsx";

function openAddRecipeModal() {
	modalVisible.val = !modalVisible.val;
}

@template(() => (
	<div>
		<header id="navbar">
			<h1>PantryPal</h1>
			<nav>
				<ul class="nav-links">
					<li><a>Pal</a></li>
					<li><a onclick={openAddRecipeModal}>Create</a></li>
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
		<AddRecipeModal />
	</div>
	
))

export class NavBar extends Component{}
