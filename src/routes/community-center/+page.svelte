<script lang="ts">
	import Checkbox from '../../components/common/checkbox.svelte';
	import { BUNDLE_GROUPS } from '../../constants/community-center';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each BUNDLE_GROUPS as bundleGroup}
	<h1>{bundleGroup.name}</h1>
	<div class="ml-4">
		{#each bundleGroup.bundles as bundle}
			<h2>{bundle.name}</h2>
			<li class="ml-8 list-none">
				{#each bundle.items as item}
					<ul>
						<Checkbox checked={item.completed} />
						<span>{item.name}</span>
					</ul>
				{/each}
			</li>
		{/each}
	</div>
{/each}
