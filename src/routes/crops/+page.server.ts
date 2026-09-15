import { crops } from 'stardew-valley-data';
import type { PageServerLoad } from './$types';

let crops = crops().get()

export const load: PageServerLoad = async () => {
    return {
        crops: crops;
    };
};
