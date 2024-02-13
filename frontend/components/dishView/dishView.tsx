import { Component } from "uix/components/Component.ts";
import { Dish } from "../../backend/data.ts";


@template<DishView>((dish: Dish) =>
	<header id="dish-view">

		<div class="containerTop">
			<div class="nameContainer">
				<div class="profile">Profil</div>
				<div class="name"> {dish.title}</div>
				<div class="extraInfo">
				<button class="tag">{dish.tag}</button>
					<div class="time-container">
                    <img
                        src="../../utilities/images/time-dish.png"
                        alt="time dish"
                        class="time-dish"
                    />
                    {dish.time} min
                </div>
				<div class="servings-container">
                    <img
                        src="../../utilities/images/profile-dish.png"
                        alt="serving dish"
                        class="serving-dish"
                    />
                    {dish.serving}x
                </div>
				</div>
			</div>

			<div class="imageContainer">
			<img 
				src="../../utilities/images/dish-pic.png"
				alt="dish image"
				class="dish-image"
			/>
			</div>
			
		</div>
		<div class="containerBottom">
		<div>Zutaten</div>
			<li class="zutaten">
			</li>
			<div class="zubereitung">
				<div>Schritt 1 <br></br>Schritt 2</div>
			</div>
		</div>


	</header>
)

export class DishView extends Component<Dish> { }

