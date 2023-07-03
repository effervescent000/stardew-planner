<script lang="ts">
	// PROPS
	export let checked: boolean;
	export let callback = () => {};

	// STATE

	// LOGIC
</script>

<input type="checkbox" {checked} on:click={callback} />
