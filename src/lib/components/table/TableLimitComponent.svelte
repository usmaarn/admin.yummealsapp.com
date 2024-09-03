<script lang="ts">
	const perPageList = [5, 10, 25, 50, 100, 500, 1000]
	const perPage = $state(10)
</script>

<div class="db-field-down-arrow">
	<select onchange={e => console.log(e.target)} class="db-card-filter-select">
		{#each perPageList as option}
			<option value={option} selected={perPage === option}>{option}</option>
		{/each}
	</select>
</div>