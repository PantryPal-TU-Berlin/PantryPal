import { Component } from "uix/components/Component.ts";
import { Dish } from "../../../backend/data.ts";
import { showDishView } from "../../pages/home/home.tsx";



interface DishData {
    title: string;
    time: number;
    servings: number;
    country: string;
    image: string;
    categorie: string;
}




@template<DishData>((dish) =>
<header id="dish-block" onclick={() => showDishView(dish)}>

            <img
                src="../../utilities/images/dish-pic.png"
                alt="dish image"
                class="dish-image"
            />

        <div class="dish-information">
            <div class="dish-information-top">
                <div class="dish-title"> {dish.title} </div>
                <div class="dish-country">  {dish.country} </div>
            </div>
            <div class="dish-information-bottom">
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
                    {dish.servings}x
                </div>

                    <img
                        src={`../../utilities/images/CategoryFood/${dish.categorie}.png`}
                        alt="categorie picture"
                        class="categorie-picture"
                    />

                
            </div>


            
        </div>
    </header>
)

export class DishEntry extends Component<DishData> { }