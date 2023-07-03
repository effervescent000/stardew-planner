<script lang="ts">
	import Icon from '../icon.svelte';

	// PROPS
	export let season: number;
	export let updateSeason: (num: number) => {};

	// STATE

	// LOGIC
	const SEASONS = ['Spring', 'Summer', 'Fall', 'Winter'];
</script>

<div class="w-[350px] text-center">
	<span>
		<Icon
			key="caret-left"
			callback={() => {
				if (season === 0) {
					updateSeason(3);
				} else {
					updateSeason(season - 1);
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
					updateSeason(0);
				} else {
					updateSeason(season + 1);
				}
			}}
		/>
	</span>
</div>
