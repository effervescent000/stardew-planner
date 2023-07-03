<script lang="ts">
	import { birthdayStore } from '../../stores';

	import BirthdayAlert from './birthday-alert.svelte';

	// PROPS

	// STATE

	// LOGIC
</script>

{#each $birthdayStore.upcoming as person}
	<BirthdayAlert {person} />
{/each}
