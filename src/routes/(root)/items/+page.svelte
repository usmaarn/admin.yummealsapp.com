<script lang="ts">
	import { page } from '$app/stores';
	import TableLimitComponent from '$lib/components/table/TableLimitComponent.svelte';
	let form = $state({
		name: ""
	})
	const {items} = $page.data;

</script>


<div class="col-12">
	<div class="db-card">
		<div class="db-card-header border-none">
			<h3 class="db-card-title">Items</h3>
			<div class="db-card-filter">
				<TableLimitComponent />
				<button class="db-card-filter-btn table-filter-btn">
					<i class="lab lab-filter lab-font-size-14"></i>
					<span>Filter</span>
				</button>
<!--				<div class="dropdown-group">-->
<!--					<ExportComponent />-->
<!--					<div class="dropdown-list db-card-filter-dropdown-list">-->
<!--						<PrintComponent :props="printObj" />-->
<!--						<ExcelComponent :method="xls" />-->
<!--					</div>-->
<!--				</div>-->
<!--				<ItemCreateComponent :props="props" v-if="permissionChecker('items_create')" />-->
			</div>
			<div class="table-filter-div">
				<form class="p-4 sm:p-5 mb-5" onsubmit={e => {e.preventDefault();}}>
					<div class="row">
						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="name" class="db-field-title after:hidden">Name</label>
							<input id="name" type="text" class="db-field-control" />
						</div>
						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="price" class="db-field-title after:hidden">Price</label>
							<input id="price" type="text" class="db-field-control" />
						</div>
						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="item_category_id" class="db-field-title">Category</label>

<!--							<vue-select class="db-field-control f-b-custom-select" id="item_category_id"-->
<!--													v-model="props.search.item_category_id" :options="itemCategories" label-by="name"-->
<!--													value-by="id" :closeOnSelect="true" :searchable="true" :clearOnClose="true" placeholder="&#45;&#45;"-->
<!--													search-placeholder="&#45;&#45;" />-->
						</div>
						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="searchItemType" class="db-field-title after:hidden">Item Type</label>
<!--							<vue-select class="db-field-control f-b-custom-select" id="searchItemType"-->
<!--													v-model="props.search.item_type" :options="[-->
<!--                                    { id: enums.itemTypeEnum.VEG, name: $t('label.veg') },-->
<!--                                    { id: enums.itemTypeEnum.NON_VEG, name: $t('label.non_veg') },-->
<!--                                ]" label-by="name" value-by="id" :closeOnSelect="true" :searchable="true"-->
<!--													:clearOnClose="true" placeholder="&#45;&#45;" search-placeholder="&#45;&#45;" />-->
						</div>

						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="searchIsFeatured" class="db-field-title after:hidden">Is Featured</label>
<!--							<vue-select class="db-field-control f-b-custom-select" id="searchIsFeatured"-->
<!--													v-model="props.search.is_featured" :options="[-->
<!--                                    { id: enums.askEnum.YES, name: $t('label.yes') },-->
<!--                                    { id: enums.askEnum.NO, name: $t('label.no') },-->
<!--                                ]" label-by="name" value-by="id" :closeOnSelect="true" :searchable="true"-->
<!--													:clearOnClose="true" placeholder="&#45;&#45;" search-placeholder="&#45;&#45;" />-->
						</div>


						<div class="col-12 sm:col-6 md:col-4 xl:col-3">
							<label for="searchStatus" class="db-field-title after:hidden">Status</label>
<!--							<vue-select class="db-field-control f-b-custom-select" id="searchStatus"-->
<!--													v-model="props.search.status" :options="[-->
<!--                                    { id: enums.statusEnum.ACTIVE, name: $t('label.active') },-->
<!--                                    { id: enums.statusEnum.INACTIVE, name: $t('label.inactive') },-->
<!--                                ]" label-by="name" value-by="id" :closeOnSelect="true" :searchable="true"-->
<!--													:clearOnClose="true" placeholder="&#45;&#45;" search-placeholder="&#45;&#45;" />-->
						</div>

						<div class="col-12">
							<div class="flex flex-wrap gap-3 mt-4">
								<button class="db-btn py-2 text-white bg-primary">
									<i class="lab lab-search-line lab-font-size-16"></i>
									<span>Search</span>
								</button>
								<button class="db-btn py-2 text-white bg-gray-600">
									<i class="lab lab-cross-line-2 lab-font-size-22"></i>
									<span>Clear</span>
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>


		<div class="db-table-responsive">
			<table class="db-table stripe" id="print">
				<thead class="db-table-head">
				<tr class="db-table-head-tr">
					<th class="db-table-head-th">Name</th>
					<th class="db-table-head-th">Category</th>
					<th class="db-table-head-th">Price</th>
					<th class="db-table-head-th">Status</th>
					<th class="db-table-head-th hidden-print">Action</th>
				</tr>
				</thead>
				<tbody class="db-table-body">
				{#each items as item}
					<tr class="db-table-body-tr">
						<td class="db-table-body-td">{item.name}</td>
						<td class="db-table-body-td">{ item?.category_name }</td>
						<td class="db-table-body-td">{ item.flat_price }</td>
						<td class="db-table-body-td">
								<span>{item.status}</span>
						</td>
						<td class="db-table-body-td hidden-print">
							<div class="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
								<a class="db-table-action view" href=".">
									<i class="lab lab-view"></i>
									<span class="db-tooltip">View</span>
								</a>
								<button data-modal="#sidebar" class="db-table-action edit">
									<i class="lab lab-edit-line"></i>
									<span class="db-tooltip">Edit</span>
								</button>
								<button class="db-table-action delete">
									<i class="lab lab-delete"></i>
									<span class="db-tooltip">Delete</span>
								</button>
							</div>
						</td>
					</tr>
				{/each}
				</tbody>
			</table>
		</div>

<!--		<div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-6">-->
<!--			<PaginationSMBox :pagination="pagination" :method="list" />-->
<!--			<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">-->
<!--				<PaginationTextComponent :props="{ page: paginationPage }" />-->
<!--				<PaginationBox :pagination="pagination" :method="list" />-->
<!--			</div>-->
<!--		</div>-->


	</div>
</div>