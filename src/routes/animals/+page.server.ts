import { animals as getAnimals } from 'stardew-valley-data';
import type { PageServerLoad } from "./$types";

const animalData = getAnimals().get().reverse();


export const load: PageServerLoad = async ({ url }) => {
    return {
        animals: animalData
    };
};