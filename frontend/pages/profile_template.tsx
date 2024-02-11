import { NavBar } from "../components/navbar/navbar.tsx"
import { Profile } from "../components/profile/profile.tsx"


export default
	<html>
		<head>
			<title>PantryPal</title>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
			/>
			<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
    		<link rel="stylesheet" href="donottouch.css"/>
    		<link rel="stylesheet" href="style.css"/>
		</head>
		<body>
			<NavBar/>
			<Profile/>
		</body>
	</html>
		