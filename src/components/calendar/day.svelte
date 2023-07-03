<script lang="ts">
	import { dateStore } from '../../stores';

	// PROPS
	export let date: number;
	export let season: number;
	// export let birthday;
	// export let events;

	// STATE

	// LOGIC
</script>

<div
	class={`w-[50px] h-[50px] border-black ${date % 7 !== 0 && 'border-l'} border-t`}
	on:click={() => dateStore.set(date + season * 28)}
	on:keypress={() => dateStore.set(date + season * 28)}
	role="button"
	tabindex="0"
>
	<span class="m-1">{date + 1}</span>
</div>
