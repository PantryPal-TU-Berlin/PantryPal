import { Datex } from "datex-core-legacy/datex.ts";

/**
 * Version information on the backend
 */

interface Dish {
    title: string,
    time: number,
    servings: number,
    image: string,
    category: string,
    ingredients: PropsIngredient[],
    tags: string[],
    steps: string
}

export interface PropsIngredient {
    ingredient: string;
    amount: number;
    unit: string;
  }

const users: Record<string, Datex.ObjectRef<Array<Dish>>> = {};


export function useDish() {


    const user = datex.meta.sender.main.toString()

    if (!(user in users)) {
		console.log(`Creating database entry for ${user}`);
		users[user] = $$([
			{title: "Spaghetti", time: 25, servings: 2, category: "Meat"} as Dish
		]);
	}

	return users[user];

}

export const dishes = $$([
	{title: "Pancakes mit Himbeersauße", time: 25, servings: 1, country: "Griechenland", categorie: "Vegan"}
]);
