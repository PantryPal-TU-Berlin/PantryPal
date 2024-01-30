import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

const Home = template(() => (
    <div>
        <link rel="stylesheet" href="./home.scss" />
        
        <NavBar />
        <div class="main-container">
       

        <div class="horizontal-container">
            <div class="top-div"> {/*Text + Kategorie */}
                <div class="user-block"> {/* Hallo User & Was willst du heute zubereiten */}
                    <h5 class="hallo-heading">
                        Hallo Laura
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
                    <div class="dish-element">spaghetti</div>
                    <div class="dish-element">chicken korma</div>
                    <div class="dish-element">pancakes</div>
                    <div class="dish-element">salat</div>
                    <div class="dish-element">hummer</div>
                    <div class="dish-element">fatoush</div>
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