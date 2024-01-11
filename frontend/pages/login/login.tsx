import { NavBar } from "../../components/navbar/navbar.tsx"
import { Footer } from "../../components/footer/footer.tsx"
import { AuthIcon } from "auth";

export default
	<html>
		<head>
			<title>PantryPal</title>
			<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
		</head>
		<body>
			<NavBar/>
			<AuthIcon style="float: right;" />
			<Footer/>
		</body>
	</html>
		