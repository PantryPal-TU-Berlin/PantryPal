import { NavBar } from "../../components/navbar/navbar.tsx"
import { Footer } from "../../components/footer/footer.tsx"
import { AuthIcon } from "auth";


export default
		<body>
			<NavBar/>
			<div class="loginBackground">
				<div class="loginBlock">
					<h1>Welcome to PantryPal</h1>
					<AuthIcon/>
				</div>
			</div>
			<Footer/>
		</body>
		