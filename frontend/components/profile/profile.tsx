import { Component } from "uix/components/Component.ts";
import { Datex } from "unyt_core/datex.ts";

import { createProfil } from "backend/data.ts";


const profilDaten = await createProfil()

const land = $$(profilDaten.land)
const beschreibung = $$(profilDaten.beschreibung)

const name = await Datex.Runtime.endpoint.main.getAlias() ?? "benutzername"

const followBool = $$(false);
const followString: Datex.Ref<string> = always(() =>{ 
	if(!followBool.val)return "Follow";
	else return "Unfollow"
})

const nutzerOnline = await Datex.Runtime.endpoint.main.online ?? false
const activity: Datex.Ref<string> = always(() =>{ 
	if(!nutzerOnline.val)return "offline";
	else return "online"
})


const modalVisible = $$(true);

function profilUpdate() {

	profilDaten.land = land.val;
	profilDaten.beschreibung = beschreibung.val;

	modalVisible.val = false;
}


const rezepte = $$("--Rezepte--");
const favoriten = $$("--Favoriten--");

const navTabs = $$(false);

const classrezepte: Datex.Ref<string> = always(() =>{ 
	if(!navTabs.val)return "nav-item nav-link active";
	else return "nav-item nav-link"
})

const classfavs: Datex.Ref<string> = always(() =>{ 
	if(!navTabs.val)return "nav-item nav-link";
	else return "nav-item nav-link active"
})

const ariarezepte: Datex.Ref<boolean> = always(() =>{ 
	if(!navTabs.val)return true;
	else return false
})

const ariafavs: Datex.Ref<boolean> = always(() =>{ 
	if(!navTabs.val)return false;
	else return true
})

const tabrezepte: Datex.Ref<string> = always(() =>{ 
	if(!navTabs.val)return "tab-pane fade show active";
	else return "tab-pane fade"
})

const tabfavs: Datex.Ref<string> = always(() =>{ 
	if(!navTabs.val)return "tab-pane fade";
	else return "tab-pane fade show active"
})


@template( () => (
	
<div id="profile" class="container-fluid">
	<div class="row">

		<div class="col-sm-12 col-md-3">
			<div class="card border-white">

				<div id="buttons" class="container">
  					<img src={"../../utilities/images/profile-picture.jpg"} alt="profile picture" class="profile-picture"/>
					<div id="buttons-inhalt">
						<h4>{ name }</h4>
    					<button onclick={ () => modalVisible.val = !modalVisible.val }>Profil bearbeiten</button>
						<br></br>
						<button onclick={ () => followBool.val = !followBool.val }>{followString.val}</button>
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
							<p class="inhalt">{profilDaten.topRezept}</p>
						</div>
        				<div class="kategorie">
							Bewertung
							<br></br>
							<p class="inhalt">{profilDaten.bewertung}</p>
						</div>
						<div class="kategorie">
							Follower
							<br></br>
							<p class="inhalt">{profilDaten.follower}</p>
						</div>
        				<div class="kategorie">
							Land
							<br></br>
							<p class="inhalt">{profilDaten.land}</p>
						</div>
        				<div class="kategorie">
							Aktivität
							<br></br>
							<p class="inhalt">{activity.val}</p>
						</div>
					</div>
        			<div>
						Beschreibung 
					<p class="inhalt">{profilDaten.beschreibung}</p>
					</div>
    			</div>
			</div>
		</div>
	</div>

	<div id="profil-bearbeiten-modal" class={{ visible: modalVisible }}>
          <div class="modal-header">
            <h1>Profil bearbeiten</h1>
            <button
              class="close-button"
              onclick={() => (modalVisible.val = !modalVisible.val)}>
              &times;
            </button>
          </div>
          <div class="modal-body">
		  	<form>
  				<div class="form-group">
    				<label for="profilePictureInput">Profilbild</label>
					<br />
    				<input type="file" class="form-control-file" id="profilePictureInput"/>
  				</div>
			</form>
			<label>Land</label>
			<br />
		  	<select id="land" value={land.val}>
				<option>-</option>
				<option>Deutschland</option>
				<option>Österreich</option>
				<option>Schweiz</option>
			</select>
			<br />
			<label>Beschreibung</label>
			<br />
			<input type="text" maxlength="100" id="beschreibung" value={beschreibung.val}/>
          </div>
          <div class="modal-footer">
            <button
                class="primary-button"
                onclick={() => (modalVisible.val = !modalVisible.val)}>
                Cancel
            </button>
            <button class="primary-button" onclick={profilUpdate}>
				Update
            </button>
            </div>
        </div>


	<nav>
  		<div class="nav nav-tabs" id="nav-tab" role="tablist">
    		<a onclick={ () => navTabs.val = !navTabs.val } class={classrezepte.val} id="nav-rezepte-tab" data-toggle="tab" href="#nav-rezepte" role="tab" aria-controls="nav-rezepte" aria-selected={ariarezepte.val}>Rezepte</a>
    		<a onclick={ () => navTabs.val = !navTabs.val } class={classfavs.val} id="nav-favoriten-tab" data-toggle="tab" href="#nav-favoriten" role="tab" aria-controls="nav-favoriten" aria-selected={ariafavs.val}>Favoriten</a>
  		</div>
	</nav>
	<div class="tab-content" id="nav-tabContent">
  		<div class={tabrezepte.val} id="nav-rezepte" role="tabpanel" aria-labelledby="nav-rezepte-tab">{rezepte}</div>
  		<div class={tabfavs.val} id="nav-favoriten" role="tabpanel" aria-labelledby="nav-favoriten-tab">{favoriten}</div>
	</div>

</div>

))


export class Profile extends Component{}
