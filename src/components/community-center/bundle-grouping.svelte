<script lang="ts">
	import type { BundleGroup } from '../../interfaces/community-center';
	import Bundle from './bundle.svelte';

	// PROPS
	export let path: string[];
	export let bundleGroup: BundleGroup;

	// STATE

	// LOGIC
</script>

<h1>{bundleGroup.name}</h1>
<div class="ml-4">
	{#each Object.entries(bundleGroup.bundles) as [key, bundle]}
		<Bundle path={[...path, key]} {bundle} />
	{/each}
</div>
