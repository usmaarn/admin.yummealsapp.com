<script lang="ts">
	import '../styles/app.css';
	import { navigating, page } from '$app/stores';
	import PageLoadIndicator from '$lib/components/PageLoadIndicator.svelte';
	import { config } from '$lib/config';
	import { ModeWatcher } from 'mode-watcher';

	const {children} = $props();

	const {data} = $page;
</script>


<svelte:head>
	<title>Admin | {config.appName}</title>
	<script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
	<link rel="shortcut icon" href="/icon.png" type="image/x-icon">
	<link rel="stylesheet" href="/fontawesome/fontawesome.css">
	<link rel="stylesheet" href="/lab/lab.css">
</svelte:head>

{#if $navigating}
	<PageLoadIndicator />
{/if}

{@render children()}

<ModeWatcher />
