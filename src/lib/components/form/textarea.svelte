<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';

	interface InputProps extends HTMLTextareaAttributes {
		error?: string;
		label?: string;
	}

	const {error, label, id, name, placeholder, class: className, ...restProps}: InputProps = $props();
</script>


<div class={className}>
	<Label for={id ?? name}>{label}</Label>
	<textarea
		placeholder={placeholder ?? label}
		name={name}
		id={id ?? name}
		class={cn("input")}
		{...restProps}
	></textarea>
	{#if error}
		<Label class="text-red-600">{error}</Label>
	{/if}
</div>


<style lang="postcss">
	.input{
			@apply border-input placeholder:text-muted-foreground focus-visible:ring-ring
			flex h-24 w-full rounded-md border bg-transparent px-3 py-1 text-sm
			shadow-sm transition-colors file:border-0 file:bg-transparent
			file:text-sm file:font-medium focus-visible:outline-none
			focus-visible:ring-1 disabled:cursor-not-allowed
			disabled:opacity-50;
	}
</style>