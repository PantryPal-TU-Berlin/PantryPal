import { Component } from "uix/components/Component.ts";
import { Datex } from "unyt_core/datex.ts";

import { createUserOrGet } from "backend/functions/usersFunctions.ts";
import { ProfileComponent } from "frontend/components/profile/profileComponent.tsx";
import { FollowComponent } from "frontend/components/profile/followComponent.tsx";

//import { getUser } from "backend/data/eternalData.ts";

//const loggedUser = getUser( datex.meta.sender.main.toString())
//const user: ProfilDaten = await createProfil(loggedUser!)
//const profilDaten: ProfilDaten = $$(user)

const profilDaten = await createUserOrGet()!;

//-----------------------------------------------------------------------------------------------------------

const followBool = $$(profilDaten.followBool);
const followString = $$(profilDaten.followString);
const follower = $$(profilDaten.follower);

function followUpdate() {
  followBool.val = !followBool.val;
  profilDaten.followBool = followBool.val;
  if (!followBool.val) {
    followString.val = "Follow";
    follower.val = 0;
    profilDaten.followString = followString.val;
    profilDaten.follower = follower.val;
  } else {
    followString.val = "Unfollow";
    follower.val = 1;
    profilDaten.followString = followString.val;
    profilDaten.follower = follower.val;
  }
}

//-----------------------------------------------------------------------------------------------------------

const modalVisible = $$(true);
const land = $$(profilDaten.land);
const beschreibung = $$(profilDaten.beschreibung);
const image = $$(profilDaten.profilePicture);

function uploadImage() {
  const fileInput = document.getElementById(
    "profilePictureInput"
  ) as HTMLInputElement;
  if (
    fileInput instanceof HTMLInputElement &&
    (fileInput as any).files !== null
  ) {
    const files = (fileInput as any).files;

    if (files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      image.val = fileUrl;
    }
  }
}

function profilUpdate() {
  uploadImage();
  profilDaten.land = land.val;
  profilDaten.beschreibung = beschreibung.val;
  modalVisible.val = !modalVisible.val;
}

//-----------------------------------------------------------------------------------------------------------

const rezepte = $$("--Rezepte--");
const favoriten = $$("--Favoriten--");

const navTabs = $$(false);
const classrezepte: Datex.Ref<string> = always(() => {
  if (!navTabs.val) return "nav-item nav-link active";
  else return "nav-item nav-link";
});

const classfavs: Datex.Ref<string> = always(() => {
  if (!navTabs.val) return "nav-item nav-link";
  else return "nav-item nav-link active";
});

const ariarezepte: Datex.Ref<boolean> = always(() => {
  if (!navTabs.val) return true;
  else return false;
});

const ariafavs: Datex.Ref<boolean> = always(() => {
  if (!navTabs.val) return false;
  else return true;
});

const tabrezepte: Datex.Ref<string> = always(() => {
  if (!navTabs.val) return "tab-pane fade show active";
  else return "tab-pane fade";
});

const tabfavs: Datex.Ref<string> = always(() => {
  if (!navTabs.val) return "tab-pane fade";
  else return "tab-pane fade show active";
});

//-----------------------------------------------------------------------------------------------------------

@template(() => (
  <div id="profile" class="container-fluid">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <div class="card border-white">
          <div id="buttons" class="container">
            <img src={image} alt="profile picture" class="profile-picture" />
            <div id="buttons-inhalt">
              <h4>
                {Datex.Runtime.endpoint.main.getAlias() ?? "benutzername"}
              </h4>
              <button onclick={() => (modalVisible.val = !modalVisible.val)}>
                Profil bearbeiten
              </button>
              <br></br>
              <button onclick={followUpdate}>
                <FollowComponent
                  anzahlRezepte={profilDaten.anzahlRezepte}
                  topRezept={profilDaten.topRezept}
                  bewertung={profilDaten.bewertung}
                  follower={profilDaten.$.follower}
                  land={profilDaten.$.land}
                  beschreibung={profilDaten.$.beschreibung}
                  followBool={profilDaten.$.followBool}
                  followString={profilDaten.$.followString}
                  profilBild={profilDaten.profilePicture}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-12 col-md-9">
        <div id="daten_card" class="card border-white pr-lg-5 pr-md-3">
          <ProfileComponent
            anzahlRezepte={profilDaten.anzahlRezepte}
            topRezept={profilDaten.topRezept}
            bewertung={profilDaten.bewertung}
            follower={profilDaten.$.follower}
            land={profilDaten.$.land}
            beschreibung={profilDaten.$.beschreibung}
            followBool={profilDaten.$.followBool}
            followString={profilDaten.$.followString}
            profilBild={profilDaten.profilePicture}
          />
        </div>
      </div>
    </div>

    <div id="profil-bearbeiten-modal" class={{ visible: modalVisible }}>
      <div class="modal-header">
        <h1>Profil bearbeiten</h1>
        <button
          class="close-button"
          onclick={() => (modalVisible.val = !modalVisible.val)}
        >
          &times;
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="profilePictureInput">Profilbild</label>
            <br />
            <input
              onchange={uploadImage}
              type="file"
              accept="image/*"
              id="profilePictureInput"
            />
          </div>
        </form>
        <label>Land</label>
        <br />
        <select id="land" value={land}>
          <option>-</option>
          <option>Deutschland</option>
          <option>Österreich</option>
          <option>Schweiz</option>
        </select>
        <br />
        <label>Beschreibung</label>
        <br />
        <input
          type="text"
          maxlength="100"
          id="beschreibung"
          value={beschreibung}
        />
      </div>
      <div class="modal-footer">
        <button
          class="primary-button"
          onclick={() => (modalVisible.val = !modalVisible.val)}
        >
          Cancel
        </button>
        <button class="primary-button" onclick={profilUpdate}>
          Update
        </button>
      </div>
    </div>

    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          onclick={() => (navTabs.val = !navTabs.val)}
          class={classrezepte.val}
          id="nav-rezepte-tab"
          data-toggle="tab"
          href="#nav-rezepte"
          role="tab"
          aria-controls="nav-rezepte"
          aria-selected={ariarezepte.val}
        >
          Rezepte
        </a>
        <a
          onclick={() => (navTabs.val = !navTabs.val)}
          class={classfavs.val}
          id="nav-favoriten-tab"
          data-toggle="tab"
          href="#nav-favoriten"
          role="tab"
          aria-controls="nav-favoriten"
          aria-selected={ariafavs.val}
        >
          Favoriten
        </a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class={tabrezepte.val}
        id="nav-rezepte"
        role="tabpanel"
        aria-labelledby="nav-rezepte-tab"
      >
        {rezepte}
      </div>
      <div
        class={tabfavs.val}
        id="nav-favoriten"
        role="tabpanel"
        aria-labelledby="nav-favoriten-tab"
      >
        {favoriten}
      </div>
    </div>
  </div>
))
export class Profile extends Component {}
