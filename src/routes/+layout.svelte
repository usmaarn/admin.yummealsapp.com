<script lang="ts">
	import '../app.css';
	import {navigating} from '$app/stores';
	import PageLoadIndicator from '$lib/components/PageLoadIndicator.svelte';
</script>


<svelte:head>
	<title>Yummeals Admin</title>
	<script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
	<link rel="shortcut icon" href="/icon.png" type="image/x-icon">
</svelte:head>

{#if $navigating}
	<PageLoadIndicator />
{/if}

<slot></slot>
