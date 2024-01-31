import { Component } from "uix/components/Component.ts";
import { Datex } from "unyt_core/datex.ts";


import { createProfil } from "backend/data.ts";


const profilDaten = await createProfil();


const rezepte = $$("--Rezepte--");
const favoriten = $$("--Favoriten--");


const classrezepte = $$("nav-item nav-link");
const classfavs = $$("nav-item nav-link");
const ariarezepte = $$(true);
const ariafavs = $$(true);
const tabrezepte = $$("tab-pane fade show active");
const tabfavs = $$("tab-pane fade");


@template(
	
	
<div id="profile" class="container-fluid">
	<div class="row">

		<div class="col-sm-12 col-md-3">
		<div class="card border-white">

			<div id="buttons" class="container">
  				<img src="../../utilities/images/profile-picture.jpg" alt="profile picture" class="profile-picture"/>
				<div id="buttons-inhalt">
					<h4>{ await Datex.Runtime.endpoint.main.getAlias() ?? "benutzername" }</h4>
    				<button>Profil bearbeiten</button>
					<br></br>
					<button>Follow</button>
  				</div>
			</div>

		</div>
		</div>
	
		<div class="col-sm-12 col-md-9">
		<div id="daten_card" class="card border-white pr-lg-5 pr-md-3">


			<div id="daten_container" class="container">
        		<h4 id="head">Persönliche Informationen</h4>
				<div id="daten" class="wrapper">
					<div class="kategorie">
						Eigene Rezepte
						<br></br>

						<p class="inhalt">{profilDaten.anzahlRezepte}</p>

					</div>
        			<div class="kategorie">
						Top Rezept
						<br></br>


						<p class="inhalt">{profilDaten.$.topRezept}</p>

					</div>

        			<div class="kategorie">
						Bewertung
						<br></br>


						<p class="inhalt">{profilDaten.$.bewertung}</p>

					</div>

					<div class="kategorie">
						Follower
						<br></br>


						<p class="inhalt">{profilDaten.$.follower}</p>

					</div>

        			<div class="kategorie">
						Land
						<br></br>


						<p class="inhalt">{profilDaten.$.land}</p>

					</div>

        			<div class="kategorie">
						Aktivität
						<br></br>


						<p class="inhalt">{profilDaten.$.aktivität}</p>

					</div>
				</div>
        		<div>
					Beschreibung 


					<p class="inhalt">{profilDaten.$.beschreibung}</p>

				</div>
    		</div>

		</div>
		</div>
	</div>

	<nav>
  		<div class="nav nav-tabs" id="nav-tab" role="tablist">
    		<a onclick={()=> { classrezepte.val="nav-item nav-link active", classfavs.val="nav-item nav-link", ariarezepte.val=true, ariafavs.val=false, tabrezepte.val="tab-pane fade  show active", tabfavs.val="tab-pane fade"}} class={classrezepte.toString()} id="nav-rezepte-tab" data-toggle="tab" href="#nav-rezepte" role="tab" aria-controls="nav-rezepte" aria-selected={ariarezepte}>Rezepte</a>
    		<a onclick={()=> { classrezepte.val="nav-item nav-link", classfavs.val="nav-item nav-link active", ariarezepte.val=false, ariafavs.val=true, tabrezepte.val="tab-pane fade", tabfavs.val="tab-pane fade  show active"}} class={classfavs.toString()} id="nav-favoriten-tab" data-toggle="tab" href="#nav-favoriten" role="tab" aria-controls="nav-favoriten" aria-selected={ariafavs}>Favoriten</a>
  		</div>
	</nav>
	<div class="tab-content" id="nav-tabContent">
  		<div class={tabrezepte.toString()} id="nav-rezepte" role="tabpanel" aria-labelledby="nav-rezepte-tab">{rezepte}</div>
  		<div class={tabfavs.toString()} id="nav-favoriten" role="tabpanel" aria-labelledby="nav-favoriten-tab">{favoriten}</div>
	</div>

</div>
	
)


export class Profile extends Component{}
