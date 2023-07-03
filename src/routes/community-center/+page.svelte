<script lang="ts">
	import BundleGrouping from '../../components/community-center/bundle-grouping.svelte';
	import { BUNDLE_GROUPS } from '../../constants/community-center';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each Object.entries(BUNDLE_GROUPS) as [key, bundleGroup]}
	<BundleGrouping path={[key]} {bundleGroup} />
{/each}
