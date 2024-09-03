<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div transition:fade={{duration: 300}}
		 class="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[999999]"
>
	<div class="relative size-32 border-4 border-gray-50 border-r-primary rounded-full animate-spin">
	</div>
	<h3 class="absolute font-bold text-primary text-xl">Yummeals</h3>
</div>