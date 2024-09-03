<script lang="ts">
	import { Table, TableBody, TableHeader, TableRow } from '$lib/components/ui/table';
	import { type ColumnDef, createTable, getCoreRowModel } from '@tanstack/table-core';
	import type { Item } from '$lib/types';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { flexRender } from '$lib';

	type Props = {
		data: Item[],
	}

	const {data}: Props = $props();

	const columns: ColumnDef<Item>[] = [
		{
			header: "Name",
			accessorKey: "name"
		},
		{
			header: "Category",
			accessorKey: "category_name"
		},
		{
			header: "Price",
			accessorKey: "currency_price"
		},
		{
			header: "Status",
			accessorKey: "status",
		}
	]

	const table = createTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		renderFallbackValue: null,
		onStateChange: () => {},
		state: {},
	})
</script>

<Card>
	<CardHeader>
		<CardTitle>All Items</CardTitle>
		<CardDescription>List of all items</CardDescription>
	</CardHeader>
	<CardContent>
		<Table >
			<TableHeader>

			</TableHeader>
			<TableBody>
				{#each table.getRowModel().rows as row, id}
					<TableRow>
						{#each row.getVisibleCells() as cell}
							{flexRender(cell.column.columnDef.cell, cell.getContext())}
						{/each}
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</CardContent>
</Card>