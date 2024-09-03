import type { Actions, RequestEvent } from '@sveltejs/kit';

export const load = async () => {

}


export const actions: Actions = {
	addItem: async(event: RequestEvent) => {
		console.log("adding item");
	},

	addCategory: async(event: RequestEvent) => {
		console.log("adding category");
	}
}