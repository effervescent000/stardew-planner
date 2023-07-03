<script lang="ts">
	import Icon from '../icon.svelte';

	// PROPS
	export let season: number;

	// STATE

	// LOGIC
	const SEASONS = ['Spring', 'Summer', 'Fall', 'Winter'];
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
