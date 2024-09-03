<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type ButtonProps = HTMLButtonAttributes & {
		loading?: boolean;
		children: Snippet
	}
	const { loading, children, ...restProps }: ButtonProps = $props();
</script>

<button type="submit" disabled={loading} class="w-full" {...restProps}>
	{#if loading}
		<iconify-icon icon="line-md:loading-twotone-loop" class="text-xl mr-2"></iconify-icon>
	{:else}
		{@render children()}
	{/if}
</button>