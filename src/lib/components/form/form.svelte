<script lang="ts">
	import { FormButton } from '$lib/components/form/index';
	import { enhance } from '$app/forms';
	import type { HTMLFormAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let loading = $state(false);

	interface FormProps extends HTMLFormAttributes{
		onError?: (data: object) => void;
		onSuccess?: (data: object) => void;
		buttonLabel?: string;
		children: Snippet;
	}

	const {children, onError, onSuccess, buttonLabel, ...props }: FormProps = $props();


	async function submitAction(form){
		loading = true;

		return async ({ update, result }) => {
			await update();
			loading = false;
			if (result.type == "success") {
				if (onSuccess) return onSuccess(result?.data)
			}
			else {
				if (onError) return onError(result?.data);
			}
		}
	}

</script>

<form {...props} use:enhance={submitAction}>
	{@render children()}
	<FormButton loading={loading}>{buttonLabel ?? "Submit"}</FormButton>
</form>