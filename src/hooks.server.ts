import { type Handle, redirect } from '@sveltejs/kit';
import { httpClient } from '$lib/http';
import axios from 'axios';


export const handle: Handle = async ({event, resolve}) => {
	const user = await httpClient.get("/auth/user", {
		headers: {
			"Authorization": "Bearer " + event.cookies.get("access_token")
		}
	}).then(res => res.data)
		.catch(err => {
		if (axios.isAxiosError(err)){
			console.log(err.response?.status)
		}else console.log(err)
	})

	event.locals.user = user;

	if (user && event.url.pathname.startsWith("/login")){
		return redirect(302, "/")
	}
	if (!user && !event.url.pathname.startsWith("/login")){
		return redirect(302, "/login")
	}

	return resolve(event);
}