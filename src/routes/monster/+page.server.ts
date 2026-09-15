import { monsters } from 'stardew-valley-data';
import type { PageServerLoad } from './$types';

let monsters = monsters().get()

export const load: PageServerLoad = async () => {
    return {
        monsters: monsters
    };
};
