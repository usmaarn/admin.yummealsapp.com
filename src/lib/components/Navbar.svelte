<script lang="ts">
	type Props = {
		isOpen: boolean;
		onToggle: () => void
	}

	const { isOpen, onToggle }:Props = $props();
</script>


<header class="db-header">
	<a href="/" class="w-32 flex-shrink-0">
		<img class="w-full" src="/logo.png" alt="logo">
	</a>

	<div class="flex items-center justify-end w-full gap-4">
		<div class="sub-header flex items-center gap-4 transition xh:justify-between xh:fixed xh:left-0 xh:w-full xh:p-4 xh:border-y xh:border-[#EFF0F6] xh:bg-white">
		</div>
		<button class="fa-solid fa-align-left db-header-nav w-9 h-9 rounded-lg text-primary bg-primary/5"></button>
		<div class="dropdown-group">
			<button class="dropdown-btn flex items-center gap-2">
				<img class="flex-shrink-0 w-9 h-9 object-cover rounded-lg" alt="avatar">
				<h3 class="whitespace-nowrap text-sm capitalize text-left leading-[17px]">Hello <b class="block font-semibold">Baba</b></h3>
				<i class="lab lab-arrow-down text-xs ml-1.5 lab-font-size-14"></i>
			</button>
			<div
				class="dropdown-list fixed sm:absolute top-[75px] sm:top-12 ltr:right-0 rtl:left-0 z-[60] rounded-xl w-full h-[calc(100vh_-_75px)] overflow-y-auto sm:h-auto sm:w-[360px] p-4 shadow-paper bg-white">
				<div class="w-fit mx-auto text-center mb-5">
					<figure
						class="relative z-10 w-[98px] h-[98px] border-2 border-dashed rounded-full inline-flex items-center justify-center border-white bg-gradient-to-t from-[#FF7A00] to-[#FF016C] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-24 before:h-24 before:rounded-full before:-z-10 before:bg-white">
						<img class="w-[90px] h-[90px] rounded-full shadow-avatar" alt="avatar">
					</figure>

					<label for="imageProperty"
								 class="block w-11 h-11 mx-auto -mt-7 mb-3 relative z-10 rounded-full border-2 cursor-pointer bg-heading border-white">
						<input onchange={(e) => console.log(e)} accept="image/png, image/jpeg, image/jpg"
									 type="file" id="imageProperty" class="w-full h-full rounded-full opacity-0 cursor-pointer">
						<i
							class="lab lab-edit-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10 lab-font-size-24 lab-font-color-1"></i>
					</label>

					<h3 class="font-medium text-sm leading-6 capitalize mb-0.5">Usman</h3>
					<p class="text-xs mb-0.5">baba@test.com</p>
					<p class="text-xs">+2349077022461</p>
					<h3 class="font-medium text-sm leading-6 capitalize mb-0.5">N20,000</h3>
				</div>
				<nav>
					<a href="/" class="paper-link transition w-full flex items-center gap-3.5 py-3 border-b last:border-none border-[#EFF0F6]">
						<i class="lab lab-edit lab-font-size-17"></i>
						<span class="text-sm leading-6 capitalize">Edit Profile</span>
					</a>

					<a href="/" class="paper-link transition w-full flex items-center gap-3.5 py-3 border-b last:border-none border-[#EFF0F6]">
						<i class="lab lab-key lab-font-size-17"></i>
						<span class="text-sm leading-6 capitalize">Change Password</span>
					</a>

					<button onclick={() => alert("logout")}
									class="paper-link transition w-full flex items-center gap-3.5 py-3 border-b last:border-none border-[#EFF0F6]">
						<i class="lab lab-logout lab-font-size-17"></i>
						<span class="text-sm leading-6 capitalize">Logout</span>
					</button>
				</nav>
			</div>
		</div>
	</div>
</header>
