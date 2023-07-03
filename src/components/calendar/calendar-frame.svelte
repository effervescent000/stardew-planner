<script lang="ts">
	import CalendarHeader from './calendar-header.svelte';
	import Day from './day.svelte';
	import LuckPicker from './luck-picker.svelte';
	import WeatherPicker from './weather-picker.svelte';
	// PROPS

	// STATE
	let season = 0;

	// LOGIC

	const DAYS_OF_WEEK = ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su'];
	const dates = Array.from({ length: 28 }, (_x, i) => i);

	const updateSeason = (num: number) => (season = num);
</script>

<div>
	<CalendarHeader {season} {updateSeason} />
	<div class="grid grid-cols-7 border border-black w-[350px]">
		{#each DAYS_OF_WEEK as day}
			<span class="text-center">{day}</span>
		{/each}
		{#each dates as date}
			<Day {date} {season} />
		{/each}
	</div>
	<WeatherPicker />
	<LuckPicker />
</div>
