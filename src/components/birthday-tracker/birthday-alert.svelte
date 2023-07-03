<script lang="ts">
	import type { Person } from '../../interfaces/people';

	import { dateStore } from '../../stores';

	// PROPS
	export let person: Person;

	// STATE

	// LOGIC
	$: birthdayDelta = person.birthday - $dateStore;
</script>

<div>
	{#if birthdayDelta === 0}
		<span>{person.name}</span>'s birthday is today!
	{:else}
		<span>{person.name}</span>'s birthday is in {birthdayDelta} day{birthdayDelta > 1 ? 's' : ''}!
	{/if}
</div>
