<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/form';
	import { Radio, Textarea } from '$lib/components/form/index.js';
	import { Label } from '$lib/components/ui/label';
</script>

<Dialog.Root>
	<Dialog.Trigger class="size-10 rounded border">
		+
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add New Category</Dialog.Title>
		</Dialog.Header>

		<form action="?/newCategory" id="newCategoryForm" class="space-y-4">
			<Input label="Name" name="name" />
			<Input label="Image" name="image" type="file" />

			<div class="">
				<Label>STATUS</Label>
				<div class="flex items-center gap-3">
					<Radio name="status" label="Active" />
					<Radio name="status" label="Inactive" />
				</div>
			</div>

			<Textarea name="description" label="Description" />
		</form>

		<Dialog.Footer>
			<Button type="submit" form="">Save</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

[
"occupation" => "employed",
"company" => "University of Ibadan",
"address" => "University of Ibadan, agbowo area",
"bvn" => "22220024503",
"monthly_income" => "350000",
"bank_statement" => "uploads/statements/U2Y65nOxYO6FaDUQg4BptUJK35Kw3gdh46bm5nhH.pdf",
"additional_information" => null,
"employment_type" => "fulltime",
"employment_status" => "confirmed",
"business_status" => null,
]