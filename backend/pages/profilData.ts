import { Datex } from "datex-core-legacy/datex.ts";
import { User } from "../../common/structs/user.ts"
import { recipePost } from "../../common/structs/recipePost.ts"


export interface ProfilDaten {
	anzahlRezepte: number,
	topRezept: string,
	bewertung: number,
	follower: number,
	land: string,
	beschreibung: string,
	followBool: boolean,
	followString: string,
	profilBild: string
}

const users: Record<string, Datex.ObjectRef<ProfilDaten>> = {};


export function createProfil() {
	const user = datex.meta.sender.main.toString();

	if (!(user in users)) {
		console.log(`Creating database entry for ${user}`);
		users[user] = $$(
			{anzahlRezepte: 0,
				topRezept: "-",
				bewertung: 0,
				follower: 0,
				land: "-",
				beschreibung: "Ich bin neu hier",
				followBool: false,
				followString: "Follow",
				profilBild: "../../utilities/images/profile-picture.jpg"} as ProfilDaten
		);
	}

	return users[user];
}




/*
export function createProfil(user: User) {
	//const user = datex.meta.sender.main.toString();

	if (!(user in users)) { 
		console.log(`Creating database entry for ${user}`);
		users[user] const currentUser = $$(
			{anzahlRezepte: user.profilDaten.anzahlRezepte,
				topRezept: "-",
				bewertung: 0,
				follower: 0,
				land: "-",
				beschreibung: "Ich bin neu hier"} as ProfilDaten
		);
	//}

	return users[user];
}*/