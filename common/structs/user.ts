import { recipePost } from "./recipePost.ts";

export type User = {
  endpoint: string;
  username: string;
  profilePicture: string;
  profilDaten: ProfilDaten;
  rezepte: number[]; // IDs
};

interface ProfilDaten {
  anzahlRezepte: number;
  topRezept: string;
  bewertung: number;
  follower: number;
  land: string;
  beschreibung: string;
}
