<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import type { Snippet } from 'svelte';
	import Sidebar from '$lib/components/layouts/Sidebar.svelte';

	let isOpen = $state(true);

	const props: {children: Snippet} = $props();
</script>

<div>
	<main class="db-main">
		<Navbar {isOpen} onToggle={() => isOpen = !isOpen} />
		<Sidebar {isOpen} />
	</main>
</div>