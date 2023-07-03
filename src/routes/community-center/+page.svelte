<script lang="ts">
	import { onMount } from 'svelte';

	import { commCenterStore } from '../../stores';

	import BundleGrouping from '../../components/community-center/bundle-grouping.svelte';

	// PROPS

	// STATE

	// LOGIC

	onMount(() => {
		const unsub = commCenterStore.subscribe((val) =>
			localStorage.setItem('communityCenter', JSON.stringify(val))
		);

		return () => {
			unsub();
		};
	});
</script>

{#each Object.entries($commCenterStore) as [key, bundleGroup]}
	<BundleGrouping path={[key]} {bundleGroup} />
{/each}
