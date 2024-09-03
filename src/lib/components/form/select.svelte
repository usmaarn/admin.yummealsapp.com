<script lang="ts">
	import { Label } from '$lib/components/ui/label';
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import type { SelectProps } from 'bits-ui';

	const {options, label, placeholder,class: className, ...restProps}: SelectProps<HTMLSelectAttributes> & {
		class: string;
		placeholder: string;
		label: string;
		options: {label: string; value: string}[]
	} = $props();
</script>

<div class={className}>
	<Label>{label}</Label>
	<Select.Root {...restProps}>
		<Select.Trigger class="h-10">
			<Select.Value placeholder={placeholder ?? label} />
		</Select.Trigger>
		<Select.Content>
			{#each options as { label, value }}
				<Select.Item {value}>{label}</Select.Item>
				{/each}
		</Select.Content>
	</Select.Root>
</div>