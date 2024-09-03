<script lang="ts">
	import { Input, Select, Textarea } from '$lib/components/form';
	import { Label } from '$lib/components/ui/label';
	import { Radio } from '$lib/components/form';
	import { Button } from '$lib/components/ui/button';
	import NewCategoryModal from '$lib/components/modals/NewCategoryModal.svelte';
</script>

<div class="bg-white shadow rounded">
	<h4 class="p-4 border-b">Add New Item</h4>

	<form action="" class="p-4 grid md:grid-cols-2 gap-5" >
		<Input label="Name" />
		<Input label="Price" type="number" />

		<div class="flex items-end w-full">
			<Select label="Category" class="flex-grow w-full" options={[{label: "Swallow", value: "swallow"}]} />
			<NewCategoryModal />
		</div>

		<Input type="file" name="image" label="Image" />

		<div class="">
			<Label class="block mb-2">Item Type</Label>
			<div class="flex items-center gap-5">
				<Radio label="Veg" name="item_type" />
				<Radio label="Non Veg" name="item_type" />
			</div>
		</div>

		<div class="">
			<Label class="block mb-2">Is Featured</Label>
			<div class="flex items-center gap-5">
				<Radio label="Yes" value="yes" name="isFeatured" />
				<Radio label="No" value="no" name="isFeatured" />
			</div>
		</div>

		<div class="">
			<Label class="block mb-2">Status</Label>
			<div class="flex items-center gap-5">
				<Radio label="Active" value="active" name="status" />
				<Radio label="Inactive" value="inactive" name="status" />
			</div>
		</div>

		<Textarea name="caution" label="Caution" class="md:col-span-2" />
		<Textarea name="description" label="Description" class="md:col-span-2" />

		<div class="">
			<Button type="submit">
				<iconify-icon icon="lets-icons:check-fill" class="text-lg mr-1"></iconify-icon>
				Save
			</Button>
		</div>
	</form>
</div>