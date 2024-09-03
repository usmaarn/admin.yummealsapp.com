<script lang="ts">
	import menuItems from "$lib/data/menu-items.json"

	console.log(menuItems);

	type Props = {
		isOpen: boolean;
	}

	const {isOpen}: Props = $props();

</script>

{#snippet sidebarItem(label, icon, href)}
	<a class="sidebar_item" {href}>
		<iconify-icon {icon}></iconify-icon>
		<span class="mx-2">{label}</span>
	</a>
{/snippet}

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
				<li class="db-sidebar-nav-item">
					<a href="." class="db-sidebar-nav-menu">
						<i class="text-sm {menu.icon}"></i>
						<span class="text-base flex-auto">Sidenav</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</aside>

<aside class="{isOpen ? 'left-0' : '-left-64'} sidebar hidden">
	<a href=".">
		<img class="w-auto h-10" src="/logo.png" alt="">
	</a>

	<div class="flex flex-col justify-between flex-1 mt-6">
		<nav class="-mx-3 space-y-4">
			<div>
				{@render sidebarItem("Dashboard", "mage:dashboard-fill", "/")}
				{@render sidebarItem("Items", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">pos & orders</h6>
				{@render sidebarItem("Orders", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">promo</h6>
				{@render sidebarItem("Coupons", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Offers", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">communication</h6>
				{@render sidebarItem("Subscribers", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Message", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Push Notification", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">users</h6>
				{@render sidebarItem("Administrators", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Delivery Boys", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Customers", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Employees", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">account</h6>
				{@render sidebarItem("Transactions", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">reports</h6>
				{@render sidebarItem("Sales Report", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Items Report", "mage:dashboard-fill", "/items")}
				{@render sidebarItem("Credit Balance Report", "mage:dashboard-fill", "/items")}
			</div>

			<div>
				<h6 class="label">setup</h6>
				{@render sidebarItem("Settings", "mage:dashboard-fill", "/items")}
			</div>
		</nav>
	</div>
</aside>

<style lang="postcss">
	.sidebar{
			@apply fixed top-0 z-[99] flex flex-col w-64 h-screen px-5 py-3
			overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l
			dark:bg-gray-900 dark:border-gray-700 border-r-gray-200;
	}
	.label{
			@apply px-1 text-xs text-gray-500 uppercase dark:text-gray-400 mb-1
			font-bold;
	}
	.sidebar_item{
			@apply flex items-center px-3 py-1.5 text-gray-600 transition-colors
			duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100
			dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700;
	}
</style>