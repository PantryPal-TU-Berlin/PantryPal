import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

const Home = template(() => (
    <div>
        <link rel="stylesheet" href="./home.scss" />
        
        <div class="main-container">
        <NavBar />
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