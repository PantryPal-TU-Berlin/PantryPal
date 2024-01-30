import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";

/**
 * Version information on the backend
 */

interface Dish {
    title: string,
    time: string,
    servings: number
}

const users: Record<string, Datex.ObjectRef<Array<Item>>> = {};


export function useDish() {


    const user = datex.meta.sender.main.toString()

    if (!(user in users)) {
		console.log(`Creating database entry for ${user}`);
		users[user] = $$([
			{title: "Spaghetti", time: "25 min", servings: 2} as Dish
		]);
	}

	return users[user];

}

export const dishes = $$([
	{title: "Döner", time: "5 min", servings: 1}
]);
