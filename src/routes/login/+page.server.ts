import { type Actions, fail, redirect, type RequestEvent } from '@sveltejs/kit';
import { httpClient } from '$lib/http';
import axios from 'axios';

export const load = (event: RequestEvent) => {
	return {}
}


type ErrorBag = {
	errors: {[key: string]: string}
}

export const actions: Actions = {
	default: async (event: RequestEvent) => {
		const data = await event.request.formData();

		let errors:ErrorBag = null;

		const response = await httpClient.post("/auth/login", Object.fromEntries(data))
			.catch(err => {
				if (axios.isAxiosError(err)) {
					errors = err?.response?.data as ErrorBag;
				}else console.log(err)
			});

		if(errors) return fail(400, errors)

		event.cookies.set("access_token", response?.data?.token, {
			expires: new Date(response?.data?.expiresAt),
			httpOnly: true,
			secure: false,
			path: "/"
		});

		redirect(302, "/")
	}
}