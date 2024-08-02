<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type ButtonProps = HTMLButtonAttributes & {
		loading?: boolean;
		children: Snippet
	}
	const { loading, children, ...restProps }: ButtonProps = $props();
</script>

<Button type="submit" disabled={loading} class="w-full" {...restProps}>
	{#if loading}
		<iconify-icon icon="line-md:loading-twotone-loop" class="text-xl mr-2"></iconify-icon>
	{:else}
		{@render children()}
	{/if}
</Button>