import { artisanGoods } from 'stardew-valley-data';
import type { PageServerLoad } from './$types';

let artisnal = artisanGoods().get()

export const load: PageServerLoad = async () => {
    return {
        artisnal: artisnal
    };
};
