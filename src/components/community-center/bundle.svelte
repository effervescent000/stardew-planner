<script lang="ts">
	import type { Bundle } from '../../interfaces/community-center';
	import BundleItem from './bundle-item.svelte';

	// PROPS
	export let path: string[];
	export let bundle: Bundle;

	// STATE

	// LOGIC
</script>

<h2>
	{bundle.name}
</h2>
<li class="ml-8 list-none">
	{#each Object.entries(bundle.items) as [key, item]}
		<BundleItem path={[...path, key]} {item} />
	{/each}
</li>
