import axios, { AxiosError, type AxiosPromise, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { config } from '$lib/config';
import type { Cookies } from '@sveltejs/kit';

export type ApiResponse<Type> = {
	status?: number;
	success: boolean;
	errors?: Type|null;
	data?: {[key: string]: unknown}|null
}

class HttpClient {

	private http = axios.create({
		baseURL: config.apiUrl,
		headers: {
			"X-API-KEY": config.apiKey,
		}
	})

	public withToken(cookies: Cookies){
		const accessToken = cookies.get(config.sessionName)
		this.http.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
		return this
	}

	public async get<T>(url: string, options: AxiosRequestConfig = {}): Promise<T|null> {
		const response = await this.http.get(url, options).catch(err => {
			if (err instanceof AxiosError) console.log(err?.response?.data)
			else console.log(err?.message)
		});
		return response?.data ?? null;
	}

	public post<T>(url: string, data: T, options: AxiosRequestConfig = {}): Promise<ApiResponse<T>> {
		return this.processResponse<T>(this.http.post(url, data ,options));
	}

	public put<T>(url: string, data: object, options: AxiosRequestConfig = {}): Promise<ApiResponse<T>> {
		return this.processResponse(this.http.put(url, data ,options));
	}

	public patch(url: string, data: object, options: AxiosRequestConfig = {}): Promise<AxiosResponse> {
		return this.http.patch(url, data ,options);
	}

	public delete(url: string, options: AxiosRequestConfig = {}): Promise<AxiosResponse> {
		return this.http.delete(url ,options);
	}

	private async processResponse<T>(request: AxiosPromise): Promise<ApiResponse<T>>{
		let errorBag: { [key: string]: string } | null = null;
		const res = await request.catch(err => {
			console.log(err?.response)
			errorBag = {message: "an error occurred"}
			if (err instanceof AxiosError){
				if (err?.response?.status == 422) errorBag = err?.response?.data?.errors
				else errorBag = err?.response?.data?.message ?? {message: "an error occurred"}
			}
		});
		if (errorBag != null) return { data: null, status: 0, success: false, errors: errorBag };
		return { success: true, errors: errorBag, data: res?.data };
	}
}

export const http = new HttpClient();