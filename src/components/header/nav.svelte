<script lang="ts">
	import NavLink from './nav-link.svelte';

	// PROPS

	// STATE

	// LOGIC
	const links = [
		{ label: 'Main', path: '/' },
		{ label: 'Community Center', path: '/community-center' }
	];
</script>

<div class="flex gap-10 text-xl">
	{#each links as link}
		<NavLink {...link} />
	{/each}
</div>
