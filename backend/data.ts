import { Datex } from "datex-core-legacy/datex.ts";

// optional: Datex.Runtime.OPTIONS.PROTECT_POINTERS = true;

interface ProfilDaten {
	anzahlRezepte: number,
	topRezept: string,
	bewertung: number,
	follower: number,
	land: string,
	aktivität: boolean,
	beschreibung: string,
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
				aktivität: false,
				beschreibung: "Ich bin neu hier"} as ProfilDaten
		);
	}

	return users[user];
}