import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";
import { DishEntry } from "frontend/components/dish/dish-entry.tsx";
import { useDish } from "backend/data.ts";
import { Datex } from "unyt_core/datex.ts";



const modalVisible = $$(false);

function addDish() {
    dishes.push({
        title: title.val,
        servings: servings.val,
        time: time.val
    });

    modalVisible.val = false;
}

const title = $$("Apfel");
const servings = $$(1);
const time = $$("");

const dishes = await useDish();

const Home = template(() => (

    <div>
        <link rel="stylesheet" href="./home.scss" />

        <NavBar />
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
                    <div class="media-element">pizza</div>
                    <div class="media-element">pizza</div>
                    <div class="media-element">pizza</div>
                    <div class="media-element">pizza</div>
                    <div class="media-element">pizza</div>
                    <div class="media-element">pizza</div>
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
                        <input type="text" id="time" placeholder="Time" value={time} />
                    </fieldset>
                    <button onclick={addDish}>Add Dish</button>
                </div>
            </div>


        </div>
        <Footer />
    </div>
));


export default (
    <html>
        <body>
            <Home />

        </body>
    </html>
);