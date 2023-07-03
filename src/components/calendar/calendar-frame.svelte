<script lang="ts">
	// PROPS

	import Icon from '../icon.svelte';
	import Day from './day.svelte';

	// STATE
	let season = 0;

	// LOGIC

	const SEASONS = ['Spring', 'Summer', 'Fall', 'Winter'];
	const DAYS_OF_WEEK = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
	const dates = Array.from({ length: 28 }, (_x, i) => i + 1);
</script>

<div class="w-[700px] text-center">
	<span>
		<Icon
			key="caret-left"
			callback={() => {
				if (season === 0) {
					season = 3;
				} else {
					season = season - 1;
				}
			}}
		/>
	</span>
	<span>{SEASONS[season]}</span>
	<span>
		<Icon
			key="caret-right"
			callback={() => {
				if (season === 3) {
					season = 0;
				} else {
					season = season + 1;
				}
			}}
		/>
	</span>
</div>
<div class="grid grid-cols-7 border border-black w-[700px]">
	{#each DAYS_OF_WEEK as day}
		<span class="text-center">{day}</span>
	{/each}
	{#each dates as date}
		<Day date={date + season * 28} />
	{/each}
</div>
