import {
	PUBLIC_BACKEND_URL,
	PUBLIC_APP_NAME,
	PUBLIC_APP_URL,
	PUBLIC_API_KEY,
	PUBLIC_SESSION_NAME
} from '$env/static/public';


export const config = {
	apiUrl: PUBLIC_BACKEND_URL,
	appName: PUBLIC_APP_NAME ?? "Yummeals",
	appUrl : PUBLIC_APP_URL,
	apiKey: PUBLIC_API_KEY,
	sessionName: PUBLIC_SESSION_NAME ?? "app_session"
}