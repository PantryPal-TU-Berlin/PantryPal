import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";
import { DishEntry } from "frontend/components/dish/dish-entry.tsx";
import { useDish } from "backend/data.ts";
import { Datex } from "unyt_core/datex.ts";
import { DishView } from "frontend/components/dishView/dishView.tsx";
import { Dish } from "../../../backend/data.ts";

const modalVisible = $$(false);

function addDish() {
    dishes.push({
        title: title.val,
        time: time.val,
        servings: servings.val,
        country: country.val,
        image: image.val,
        categorie: categorie.val
    });

    modalVisible.val = false;
}

const title = $$("Apfel");
const servings = $$(1);
const time = $$(10);
const country = $$("");
const categorie = $$("dairy");
const image = $$("../../utilities/images/dish-pic.png");




const dishes = await useDish();

var dishview: DishView;

export function showDishView(dishInfo: Dish) {
    alert(dishInfo.title);
    dishview = new DishView(dishInfo);
    return new DishView(dishInfo);
}



const Home = template(() => (

    <div>
        <link rel="stylesheet" href="./home.scss" />

        <NavBar />  

        {dishview !== null && dishview}

        <div class="main-container">
            <div class="horizontal-container">
                <div class="top-div"> {/*Text + Kategorie */}
                    <div class="user-block"> {/* Hallo User & Was willst du heute zubereiten */}
                        <h5 class="hallo-heading">

                        </h5>
                        <p class="frage-text">
                            Was willst du heute zubereiten?
                        </p>
                    </div>

                    <div class="filter-block">  {/*Filter categories*/}
                        <button class="sort-button">Sort by...</button>
                        <button class="filter-button">Filter by...</button>

                    </div>
                </div>
                <div class="horizontal-scroller">
                    <img
                        src="../../utilities/images/CategoryFood/pizza-category.png"
                        alt="pizza category"
                        class="media-element"
                    />
                    <img
                        src="../../utilities/images/CategoryFood/salad-category.png"
                        alt="salad category"
                        class="media-element"
                    />
                    <img
                        src="../../utilities/images/CategoryFood/dessert-category.png"
                        alt="dessert category"
                        class="media-element"
                    />
                      <img
                        src="../../utilities/images/CategoryFood/pizza-category.png"
                        alt="pizza category"
                        class="media-element"
                    />
                    <img
                        src="../../utilities/images/CategoryFood/salad-category.png"
                        alt="salad category"
                        class="media-element"
                    />
                    <img
                        src="../../utilities/images/CategoryFood/dessert-category.png"
                        alt="dessert category"
                        class="media-element"
                    />

                </div>
            </div>


            <div class="vertical-container">
                <div class="top-div"> {/*Text + Kategorie */}
                    <div class="user-block"> {/* Hallo User & Was willst du heute zubereiten */}
                        <h5 class="hallo-heading">
                            Daily best repices
                        </h5>
                        <p class="frage-text">
                            Die spezielle Auswahl nach deinen Vorlieben.
                        </p>
                    </div>

                    <div class="category-block">  {/*Filter categories*/}
                        <button class="category dairy">Dairy</button>
                        <button class="category meat">Meat</button>
                        <button class="category vegan">Vegan</button>
                        <button class="category fish">Fish</button>
                        <input class="search-field" type="text" placeholder="Suche Rezepte nach Name, Zutat und ..." id="fname"></input>
                    </div>
                </div>
                <div class="vertical-scroller">
                    {dishes.$.map(dish => <DishEntry {...dish.$}></DishEntry>)}
                </div>
                <button onclick={() => modalVisible.val = !modalVisible.val}>Add Dish</button>

                <div id="add-dish-modal" class={{ visible: modalVisible }}>
                    <fieldset>
                        <legend>Dish Properties</legend>
                        <input type="text" id="title" placeholder="DishName" value={title} />
                        <input type="text" id="serving" placeholder="Serving for" value={servings} />
                        <input type="number" id="time" placeholder="Time" value={time} />
                        <input type="text" id="country" placeholder="Country" value={country} />
                        <select id="type" value={categorie}>
                            <option selected>Vegan</option>
                            <option>Dairy</option>
                            <option>Meat</option>
                            <option>Fish</option>
                        </select>
                        <input type="text" id="image" placeholder="image-drop" value={image} />
                    </fieldset>
                    <button onclick={addDish}>Add Dish</button>
                </div>

            </div>


        </div>


    </div>
));


export default (
    <html>
        <body>
            <Home />
            <DishView />

            
        </body>
    </html>
);