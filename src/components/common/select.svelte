<script lang="ts">
	// PROPS
	export let options: { label: string; value: string | number }[];
	export let callback: (event: any) => void;
	export let value: string | number;

	// STATE

	// LOGIC
</script>

<select on:change={callback} {value}>
	{#each options as opt}
		<option value={opt.value}>{opt.label}</option>
	{/each}
</select>
