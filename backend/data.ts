import { Datex } from "datex-core-legacy/datex.ts";
import { UIX } from "uix";

/**
 * Version information on the backend
 */

export const denoVersion = Deno.version.deno;
export const datexVersion = Datex.Runtime.VERSION;
export const uixVersion = UIX.version;

interface Recipe {
    title: string,
    tags: string[],
    time: number,
    servings: number,
    ingredients: string[],
    steps: string[],
}

export function createRecipesArray() {
    return recipes;
}

export const recipes = $$([
    {title: "Napoleon", tags: ['cake', 'dessert'], time: 180, servings: 5, ingredients: ['sour cream', "sugar"], steps: ["make cream", "bake"]}
]);