import { animals } from "stardew-valley-data";
import type { PageServerLoad } from "./$types";
// import type { ServerInit } from '@sveltejs/kit';

var animals = animals().get();


export const load: PageServerLoad = async ({ url }) => {
    return {
        animals: animals,
    };
};