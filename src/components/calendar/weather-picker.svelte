<script lang="ts">
	import type { Weather } from '../../interfaces/planning';

	import { weatherStore } from '../../stores';

	import Select from '../common/select.svelte';

	// PROPS

	// STATE

	// LOGIC
	const WEATHER: Weather[] = ['sun', 'rain', 'wind', 'snow', 'storm'];
</script>

<Select
	options={WEATHER.map((str) => ({ label: str, value: str }))}
	callback={(event) => weatherStore.set(event.target.value)}
	value={$weatherStore}
/>
