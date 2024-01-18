import { Component } from "uix/components/Component.ts";

@template(
	<footer id="footer">
		<div class="footer-content">
			<div class="news-letter">
				<h2>Newsletter</h2>
				<h2>Melde dich zum Newsletter an!</h2>			<input type="text" id="lname" name="lname"/>
			</div>
			<div class="footer-navigation">
				<h1>PantryPal</h1>
				<ul>
					<li>About US</li>
					<li>FAQ</li>
					<li>Contact US</li>
				</ul>			
				
			</div>
			<div class="social-media-links">
	
			</div>
		</div>
	</footer>
)

export class Footer extends Component{}