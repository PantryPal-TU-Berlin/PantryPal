import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

const Home = template(() => (
    <div>
        <link rel="stylesheet" href="./home.scss" />
        <div class="main-container">
            <NavBar />
            <Footer />
        </div>
        </div>
        ));


export default (
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>
            <body>
                <Home />
            </body>
        </html>
        );