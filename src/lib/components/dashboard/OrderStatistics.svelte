<script lang="ts">

</script>

<section>
		<h4 class="mb-4">Order Statistics</h4>
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

			<div class={`p-5 rounded-lg flex gap-4 bg-white border `}>
				<iconify-icon icon="mage:box-3d" class="icon bg-[#FF4F99]/10 text-[#FF4F99]"></iconify-icon>
				<div class="space-y-1">
					<h6>Total Orders</h6>
					<h5>{parseInt("13500").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-notification" class="icon bg-white bg-[#8262FE]/10 text-[#8262FE]"></iconify-icon>
				<div class="space-y-1">
					<h6>Pending Orders</h6>
					<h5>{parseInt("230").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-scan" class="icon bg-white bg-[#567DFF]/10 text-[#567DFF]"></iconify-icon>
				<div class="space-y-1">
					<h6>Processing</h6>
					<h5>{parseInt("127").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-upload" class="icon bg-white bg-[#A953FF]/10 text-[#A953FF]"></iconify-icon>
				<div class="space-y-1">
					<h6>Out For Delivery</h6>
					<h5>{parseInt("1234").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-check" class="icon bg-[#FF4F99]/10 text-[#FF4F99]"></iconify-icon>
				<div class="space-y-1">
					<h6>Delivered</h6>
					<h5>{parseInt("65").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-minus" class="icon bg-white bg-[#8262FE]/10 text-[#8262FE]"></iconify-icon>
				<div class="space-y-1">
					<h6>Canceled</h6>
					<h5>{parseInt("7").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-download" class="icon bg-white bg-[#567DFF]/10 text-[#567DFF]"></iconify-icon>
				<div class="space-y-1">
					<h6>Returned</h6>
					<h5>{parseInt("10").toLocaleString()}</h5>
				</div>
			</div>

			<div class="card">
				<iconify-icon icon="mage:box-3d-cross" class="icon bg-white bg-[#A953FF]/10 text-[#A953FF]"></iconify-icon>
				<div class="space-y-1">
					<h6>Rejected</h6>
					<h5>{parseInt("0").toLocaleString()}</h5>
				</div>
			</div>

		</div>
</section>


<style lang="postcss">
		.card{
				@apply p-5 rounded-lg flex gap-4 bg-white border;

				h6{
						@apply font-semibold text-sm text-gray-500;
				}

				h5{
						@apply font-bold;
				}
		}
	.icon{
			@apply text-3xl size-12 p-3 rounded-full;
  }
</style>