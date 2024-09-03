import type { PageLoad } from './$types';
import { config } from '$lib/config';
import axios from 'axios';


export const load: PageLoad = async () => {

	const response = await axios.get(`${config.apiUrl}/frontend/item`, {
		method: "GET",
		headers: {
			"X-API-KEY": config.apiKey,
		}
	})
				.then(res => res.data)
				.catch(console.error);
	return {
		items: response?.data
	}
}