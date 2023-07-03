<script lang="ts">
	// PROPS

	import Day from './day.svelte';

	// STATE

	// LOGIC

	const DAYS_OF_WEEK = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
	const dates = Array.from({ length: 28 }, (_x, i) => i + 1);
</script>

<div class="w-[700px] text-center">Season here</div>
<div class="grid grid-cols-7 border border-black w-[700px]">
	{#each DAYS_OF_WEEK as day}
		<span class="text-center">{day}</span>
	{/each}
	{#each dates as date}
		<Day {date} />
	{/each}
</div>
