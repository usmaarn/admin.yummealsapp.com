<script lang="ts">
	import menuItems from "$lib/data/menu-items.json"

	type Props = {
		isOpen: boolean;
}

	const {isOpen}: Props = $props();

</script>

<aside class="db-sidebar">
	<div class="db-sidebar-header">
		<a class="w-24" href="/">
			<img src="/logo.png" alt="logo">
		</a>
		<button class="fa-solid fa-xmark xmark-btn close-db-menu"></button>
	</div>
	<!--        {{ menus }}-->
	<nav class="db-sidebar-nav">
		<ul class="db-sidebar-nav-list">
			{#each menuItems as menu}
				{#if menu.url === "#"}
					<li class="db-sidebar-nav-item">
						<a href="." class="db-sidebar-nav-title">
							{menu.name}
						</a>
					</li>
				{:else}
					<li class="db-sidebar-nav-item">
						<a href="/{menu.url}" class="db-sidebar-nav-menu">
							<i class="text-sm {menu.icon}"></i>
							<span class="text-base flex-auto">{menu.name}</span>
						</a>
					</li>
				{/if}
				{#if menu.children}
					{#each menu.children as children}
						<li class="db-sidebar-nav-item">
							<a href="/{children.url}" class="db-sidebar-nav-menu">
								<i class="text-sm {children.icon}"></i>
								<span class="text-base flex-auto">{menu.name}</span>
							</a>
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</nav>
</aside>
