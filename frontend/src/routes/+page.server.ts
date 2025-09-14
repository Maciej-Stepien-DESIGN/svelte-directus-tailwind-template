/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	try {
		return {
			global: await directus.request(readItems('blogpost'))
		};
	} catch (error) {
		console.error(error);
	}
}
