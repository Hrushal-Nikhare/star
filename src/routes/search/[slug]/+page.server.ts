import { error } from '@sveltejs/kit';
import { search } from 'stardew-valley-data'

export const load: PageServerLoad = async ({ url, params }) => {
    const { slug } = params;
    const type = url.searchParams.get('type');
    // console.log(params);
    const item = search(slug, [type])[0];
    console.log(item);
    return {
        item: item,
    };
};