import { type Actions, fail, type RequestEvent } from '@sveltejs/kit';
import { httpClient } from '$lib/http';
import axios from 'axios';


export const load = (event: RequestEvent) => {
	return {}
}

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		const data = await event.request.formData();

		const response = await httpClient.post("/auth/login", data)
			.then(err => {
				if (axios.isAxiosError(err)) {
					console.log(err?.response?.data);
				}else console.log(err)
			});
		console.log(response?.data);
	}
}