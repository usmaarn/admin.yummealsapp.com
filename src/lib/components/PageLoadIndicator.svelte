<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Stretch } from 'svelte-loading-spinners';
</script>

<div transition:fade={{duration: 300}}
		 class="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[999999]"
>
	<Stretch color="#696cff" duration="1s" size="40" unit="px" />
</div>