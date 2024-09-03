<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Props extends HTMLInputAttributes {
		label: string;
		error?: string;
	}

	const {label, error, id, name, value, ...props}: Props = $props();
</script>
<div class="">
	<label for={id ?? value}>
		<input {name} id={id ?? value}  type="radio" class={cn("input", )} {...props} />
		<span>{label}</span>
	</label>
	{#if error}
		<p class="">{error}</p>
	{/if}
</div>

<style lang="postcss">
		label{
				@apply relative flex items-center gap-1 rounded-full cursor-pointer;
		}
	.input{
			@apply h-5 w-5 cursor-pointer relative
			appearance-none rounded-full border-2 border-gray-200 p-1 checked:border-gray-500
			text-gray-900 transition-all checked:before:bg-gray-500;

      &::before{
          content: '';
          @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2
						rounded-full bg-gray-200;
      }
	}
</style>