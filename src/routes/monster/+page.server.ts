import { monsters as getMonsters } from 'stardew-valley-data';
import type { PageServerLoad } from './$types';

const monsterData = getMonsters().get();

export const load: PageServerLoad = async () => {
    return {
        monsters: monsterData
    };
};
