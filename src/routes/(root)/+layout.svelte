<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { Snippet } from 'svelte';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';

	let isOpen = $state(true);

	const props: {children: Snippet} = $props();
</script>

<div class="">
	<Navbar {isOpen} onToggle={() => isOpen = !isOpen} />

	<section class="">
		<Sidebar {isOpen} />
		<main class:active={isOpen}>
			{@render props.children()}
		</main>
	</section>
</div>

<style lang="postcss">
	main{
      @apply p-3 w-full ml-auto transition-all duration-500;
      &.active{
          @apply md:w-[calc(100%_-_280px)];
      }
	}
</style>