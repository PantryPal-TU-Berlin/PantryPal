import { NavBar } from "../../components/navbar/navbar.tsx"
import { Footer } from "../../components/footer/footer.tsx"
import { fetchCompletion } from "backend/openai-api.ts";


export default
	<html>
		<head>
			<title>PantryPal</title>
			<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
		</head>
		<body>
			<button onclick={fetchCompletion}>test</button>
		</body>
	</html>
		