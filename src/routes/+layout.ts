import type { LayoutLoad } from './$types';


export const load: LayoutLoad = async () => {
	await new Promise(resolve => setTimeout(resolve, 2000));
	return {}
}