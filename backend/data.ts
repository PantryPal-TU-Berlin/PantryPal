import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";

interface RecipeData {
	name: string;
	ingredients: string[];
	steps: string[];
	rating: number;
	difficulty: number;
	creator: string;
}
const recipes: Record<string, Datex.ObjectRef<RecipeData>> = {};
export function createRecipe(recipeName: string) {
	console.log(`Creating database entry for ${recipeName}`);
	recipes[recipeName] = $$(
	{
		name: recipeName,
		ingredients: [],
		steps: [],
		rating: 0,
		difficulty: 0,
		creator: "Unknown"
	} as RecipeData
	);

	return recipes[recipeName];
}
