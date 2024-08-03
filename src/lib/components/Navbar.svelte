<script lang="ts">

	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from "$lib/components/ui/avatar";

	type Props = {
		isOpen: boolean;
		onToggle: () => void
	}

	const  props:Props = $props();
</script>


<nav class="border-b">
	<div class="flex items-center justify-between px-5 h-[80px] bg-white">
		<img src="/logo.png" alt="yummeals logo" class="w-[130px]" />

		<div class="flex items-center gap-3">
			<Button onclick={props.onToggle} size="icon" variant="secondary" class="">
				<iconify-icon icon="fa6-solid:align-left" class="text-lg"></iconify-icon>
			</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Billing</DropdownMenu.Item>
						<DropdownMenu.Item>Team</DropdownMenu.Item>
						<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</nav>