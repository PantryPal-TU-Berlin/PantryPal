import { recipePost } from "./recipePost.ts";

export type User = {
  endpoint: string;
  profilePicture: string;
  rezepte: number[]; // IDs
  anzahlRezepte: number;
  topRezept: string;
  bewertung: number;
  follower: number;
  land: string;
  beschreibung: string;
  followBool: boolean;
  followString: string;
};
