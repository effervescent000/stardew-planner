<script lang="ts">
	import BundleGrouping from '../../components/community-center/bundle-grouping.svelte';
	import { commCenterStore } from '../../stores';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each Object.entries($commCenterStore) as [key, bundleGroup]}
	<BundleGrouping path={[key]} {bundleGroup} />
{/each}
