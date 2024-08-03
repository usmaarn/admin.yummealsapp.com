<section>
	<h4 class="mb-4">Overview</h4>
	<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

		<div class={`card bg-[#FF4F99] text-[#FF4F99]`}>
			<iconify-icon icon="tabler:currency-naira" class="icon"></iconify-icon>
			<div class="content">
				<h6>Total Sales</h6>
				<h5>₦{1240643.55.toLocaleString()}</h5>
			</div>
		</div>

		<div class={`card bg-[#8262FE] text-[#8262FE]`}>
			<iconify-icon icon="mage:box-3d" class="icon"></iconify-icon>
			<div class="content">
				<h6>Total Orders</h6>
				<h5>₦{parseInt("73500").toLocaleString()}</h5>
			</div>
		</div>

		<div class={`card bg-[#567DFF] text-[#567DFF]`}>
			<iconify-icon icon="ph:users-bold" class="icon"></iconify-icon>
			<div class="content">
				<h6>Total Customers</h6>
				<h5>₦{parseInt("12300").toLocaleString()}</h5>
			</div>
		</div>

		<div class={`card bg-[#A953FF] text-[#A953FF]`}>
			<iconify-icon icon="hugeicons:group-items" class="icon"></iconify-icon>
			<div class="content">
				<h6>Total Menu Items</h6>
				<h5>₦{parseInt("1234").toLocaleString()}</h5>
			</div>
		</div>
	</div>
</section>


<style lang="postcss">
	.card{
			@apply p-5 rounded-lg flex gap-4;
			.icon{
					@apply text-3xl size-12 p-2.5 rounded-full bg-white;
			}
			.content{
					@apply text-white space-y-1;

					h6{
							@apply font-semibold text-sm;
					}
					h5{
							@apply font-bold;
					}
			}
	}
</style>