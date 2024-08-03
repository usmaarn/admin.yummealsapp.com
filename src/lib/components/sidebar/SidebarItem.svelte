<script lang="ts">

	import { onNavigate } from '$app/navigation';

	let currentUrl = $state("");

	type Props = {
		label: string;
		icon: string;
		href: string;
	}

	onNavigate(() => {
		currentUrl = window.location.pathname
	})

	$effect(() => {
		currentUrl = window.location.pathname
	})


	const {label, icon, href}: Props = $props();
</script>

<a href={href} class="sidebar-item" class:active={currentUrl === href}>
	<iconify-icon icon={icon} class="text-xl w-[50px] flex justify-center"></iconify-icon>
	<span>{label}</span>
</a>


<style lang="postcss">
	.sidebar-item{
			@apply transition-colors duration-500 flex items-center py-2 text-gray-500
      rounded-lg hover:bg-neutral-100 hover:font-semibold;

			&.active{
					@apply text-primary bg-primary/5 font-bold;
			}
	}
</style>