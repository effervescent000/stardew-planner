<script lang="ts">
	import type { BundleItem } from '../../interfaces/community-center';
	import { commCenterStore } from '../../stores';

	import Checkbox from '../common/checkbox.svelte';

	// PROPS
	export let path: string[];
	export let item: BundleItem;

	// STATE

	// LOGIC
</script>

<ul>
	<Checkbox
		checked={item.completed}
		callback={() => commCenterStore.updateItemCompletion([...path, 'completed'], !item.completed)}
	/>
	<span>{item.name}</span>
</ul>
