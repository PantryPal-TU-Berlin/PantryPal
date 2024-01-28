import { NavBar } from "frontend/components/navbar/navbar.tsx";
import { Footer } from "frontend/components/footer/footer.tsx";

const Ai = template(() => (
  <div>
    <link rel="stylesheet" href="./ai.scss" />

    <div class="main">
      <NavBar />
      <div>
        <div class="left-side-bar"></div>
        <div class="main-content"></div>
        <div class="left-side-bar"></div>
      </div>
      <Footer />
    </div>
  </div>
));

export default (
  <html>
    <head></head>
    <body>
      <Ai />
    </body>
  </html>
);
