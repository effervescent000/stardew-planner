<script lang="ts">
	import { luckStore } from '../../stores';

	import Select from '../common/select.svelte';

	// PROPS

	// STATE

	// LOGIC
	const LUCK = [
		{ value: 4, label: 'very happy' },
		{ value: 3, label: 'good humor' },
		{ value: 2, label: 'neutral' },
		{ value: 1, label: 'annoyed' },
		{ value: 0, label: 'displeased' }
	];
</script>

<Select options={LUCK} callback={(event) => luckStore.set(event.target.value)} value={$luckStore} />
