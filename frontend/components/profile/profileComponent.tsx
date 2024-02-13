import { Component } from "uix/components/Component.ts";
import { Datex } from "unyt_core/datex.ts";

import { ProfilDaten } from "backend/data.ts";

const nutzerOnline = await Datex.Runtime.endpoint.main.online ?? false
const activity: Datex.Ref<string> = always(() =>{ 
	if(!nutzerOnline.val)return "offline";
	else return "online"
})

@template<ProfilDaten>((props) => {
    return (
				<div id="daten_container" class="container">
        			<h4 id="head">Persönliche Informationen</h4>
					<div id="daten" class="wrapper">
						<div class="kategorie">
							Eigene Rezepte
							<br></br>
							<p class="inhalt">{props.anzahlRezepte}</p>
						</div>
        				<div class="kategorie">
							Top Rezept
							<br></br>
							<p class="inhalt">{props.topRezept}</p>
						</div>
        				<div class="kategorie">
							Bewertung
							<br></br>
							<p class="inhalt">{props.bewertung}</p>
						</div>
						<div class="kategorie">
							Follower
							<br></br>
							<p class="inhalt">{props.follower}</p>
						</div>
        				<div class="kategorie">
							Land
							<br></br>
							<p class="inhalt">{props.land}</p>
						</div>
        				<div class="kategorie">
							Aktivität
							<br></br>
							<p class="inhalt">{activity.val}</p>
						</div>
					</div>
        			<div>
						Beschreibung 
					<p class="inhalt">{props.beschreibung}</p>
					</div>
    			</div>
)})


export class ProfileComponent extends Component<ProfilDaten>{}