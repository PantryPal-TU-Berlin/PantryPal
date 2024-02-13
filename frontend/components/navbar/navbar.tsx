import { Component } from "uix/components/Component.ts";
import { AddRecipeModal, modalVisible } from "frontend/components/modals/addRecipeModal/addRecipeModal.tsx";

function openAddRecipeModal() {
	modalVisible.val = !modalVisible.val;
}

@template(() => (
	<div>
		<header id="navbar">
		<h1>PantryPal</h1>

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
				<i onclick={openAddRecipeModal} class="fa-solid fa-plus"></i>
			</li>
			<img
				src="../../utilities/images/profile-picture.jpg"
				alt="profile picture"
				class="profile-picture"
			/>
		</ul>
	</header>
	<AddRecipeModal />
	</div>
))
export class NavBar extends Component {}
