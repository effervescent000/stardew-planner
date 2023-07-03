<script lang="ts">
	// PROPS
	export let date: number;
	// export let birthday;
	// export let events;

	// STATE

	// LOGIC
</script>

<div class={`w-[100px] h-[100px] border-black ${date % 7 !== 1 && 'border-l'} border-t`}>
	<span class="m-1">{date % 28 || 28}</span>
</div>
