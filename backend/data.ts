import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";


/**
 * Version information on the backend
 */

export interface Dish {
    title: string,
    time: number,
    servings: number,
    country: string,
    image: string, //Not implemented
    categorie: string,
}

const users: Record<string, Datex.ObjectRef<Array<Dish>>> = {};


export function useDish() {


    const user = datex.meta.sender.main.toString()

    if (!(user in users)) {
		console.log(`Creating database entry for ${user}`);
		users[user] = $$([
			{title: "Spaghetti", time: 25, servings: 2, country: "Deutschland", categorie: "Meat"} as Dish
		]);
	}

	return users[user];

}

export const dishes = $$([
	{title: "Pancakes mit Himbeersauße", time: 25, servings: 1, country: "Griechenland", categorie: "Vegan"}
]);
