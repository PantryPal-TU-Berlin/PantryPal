import { NavBar } from "../../components/navbar/navbar.tsx";
import { Profile } from "../../components/profile/profile.tsx";

export default (
  <html>
    <head>
      <title>PantryPal</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link rel="stylesheet" href="donottouch.css" />
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <NavBar />
      <Profile />
    </body>
  </html>
);
