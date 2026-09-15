import { crops } from 'stardew-valley-data';
import type { PageServerLoad } from './$types';

const cropsA = crops().get()

export const load: PageServerLoad = async () => {
    return {
        crops: cropsA
    };
};
