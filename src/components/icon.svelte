<script lang="ts">
	// PROPS
	export let key: string;
	export let callback = () => {};

	// STATE

	// LOGIC
</script>

<button on:click={callback}>
	<i class={`fa-solid fa-${key}`} />
</button>
