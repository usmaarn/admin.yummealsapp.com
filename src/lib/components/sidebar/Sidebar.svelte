<script lang="ts">
	import SidebarItem from '$lib/components/sidebar/SidebarItem.svelte';

	const {isOpen}: {isOpen: boolean} = $props();
</script>

<aside class:active={isOpen}>
	<div class="px-3 mb-5 mt-3">
		<SidebarItem label="Dashboard" href="/" icon="streamline:dashboard-3"/>
		<SidebarItem label="Items" href="/items" icon="mdi:invoice-line-items-outline"/>

		<p class="label">POS & ORDERS</p>
		<SidebarItem label="POS" href="/pos" icon="iconoir:post"/>
		<SidebarItem label="POS Orders" href="/orders/pos" icon="icon-park-outline:order"/>
		<SidebarItem label="Online Orders" href="/orders/online" icon="solar:bag-5-linear"/>
		<SidebarItem label="Table Orders" href="/orders/table" icon="ph:call-bell"/>

		<p class="label">PROMO</p>
		<SidebarItem label="Coupon" href="/coupon" icon="ri:coupon-line"/>
		<SidebarItem label="Best Sellers" href="/best-sellers" icon="teenyicons:discount-outline"/>

		<p class="label">Communication</p>
		<SidebarItem label="Push Notifications" href="/push-notifications" icon="solar:notification-unread-outline"/>
		<SidebarItem label="Messages" href="/messages" icon="mage:message-dots"/>
		<SidebarItem label="Subscribers" href="/subscribers" icon="hugeicons:mail-minus-01"/>

		<p class="label">Users</p>
		<SidebarItem label="Administrators" href="/admin" icon="ph:users-bold"/>
		<SidebarItem label="Delivery Boys" href="/dispatch-riders" icon="hugeicons:truck-delivery"/>
		<SidebarItem label="Customers" href="/customers" icon="solar:users-group-two-rounded-broken"/>
		<SidebarItem label="Staffs" href="/staffs" icon="solar:chef-hat-broken"/>

		<p class="label">Accounts</p>
		<SidebarItem label="Transactions" href="/transactions" icon="fluent:receipt-bag-20-regular"/>

		<p class="label">reports</p>
		<SidebarItem label="Sales Report" href="/reports/sales" icon="icon-park-outline:sales-report"/>
		<SidebarItem label="Items Report" href="/reports/items" icon="tabler:report"/>
		<SidebarItem label="Credit Balance Report" href="/reports/credit-balance" icon="solar:wallet-outline"/>

		<p class="label">Setup</p>
		<SidebarItem label="Settings" href="/settings" icon="solar:settings-linear"/>
	</div>
</aside>


<style lang="postcss">
		aside{
        @apply w-[280px] bg-white h-[calc(100vh_-_80px)] overflow-y-auto
        fixed -left-[280px] bottom-0 border-r border-r-gray-100 transition-all duration-500;
        &.active{
            @apply left-0;
        }
		}
		p.label{
				@apply py-1.5 px-1 text-xs font-medium text-gray-400 tracking-widest uppercase;
		}
</style>