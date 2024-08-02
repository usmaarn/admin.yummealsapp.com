<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface InputProps extends HTMLInputAttributes {
		error?: string;
		label?: string;
	}

	const {error, label, id, name, placeholder, ...restProps}: InputProps = $props();
</script>


<div class="">
	<Label for={id ?? name}>{label}</Label>
	<Input
		placeholder={placeholder ?? label}
		name={name}
		id={id ?? name}
		{...restProps}
	/>
	{#if error}
		<Label class="text-red-600">{error}</Label>
	{/if}
</div>