import { UIX } from "uix";
import { datexVersion, denoVersion, uixVersion } from "../backend/data.ts";

export default 
	<main >
		<section class="Header">
			<h1>PantryPal</h1>
		</section>

		<section class="hello-container">
			<div class="LoginContainer">
				
				<div class="HeaderContainer">
					<h4>Welcome to PantryPal</h4>
					<div class="SignUpContainer">
						<h6>No Account?</h6>
						<button class="BtnSignUp">sign up</button>
					</div>
				</div>

				<h2>Sign In</h2>
				<h5>Enter your E-Mail:</h5>
				<input class="InputField" name="username" placeholder={"E-Mail"} type="text" />
				<h5>Enter your Password:</h5>
				<input class="InputField" name="password" placeholder={"Password"} type="password" />
				<button class="BtnForgotPassword">Forgot Password</button>
				<button class="BtnLogin">login</button>
			</div>

		</section>

		<section class="whitespace">

		</section>
	</main>

