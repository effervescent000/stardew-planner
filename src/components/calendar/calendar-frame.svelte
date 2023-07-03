<script lang="ts">
	// PROPS

	import Icon from '../icon.svelte';
	import Day from './day.svelte';

	// STATE
	let season = 1;

	// LOGIC

	const SEASONS = ['Spring', 'Summer', 'Fall', 'Winter'];
	const DAYS_OF_WEEK = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
	const dates = Array.from({ length: 28 }, (_x, i) => i + 1);
</script>

<div class="w-[700px] text-center">
	<span><Icon key="caret-left" /></span>
	<span>{SEASONS[season - 1]}</span>
	<span><Icon key="caret-right" /> </span>
</div>
<div class="grid grid-cols-7 border border-black w-[700px]">
	{#each DAYS_OF_WEEK as day}
		<span class="text-center">{day}</span>
	{/each}
	{#each dates as date}
		<Day date={date * season} />
	{/each}
</div>
