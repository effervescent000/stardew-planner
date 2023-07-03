<script lang="ts">
	import { dateStore } from '../../stores';

	// PROPS
	export let date: number;
	// export let birthday;
	// export let events;

	// STATE

	// LOGIC
</script>

<div
	class={`w-[100px] h-[100px] border-black ${date % 7 !== 0 && 'border-l'} border-t`}
	on:click={() => dateStore.set(date)}
	on:keypress={() => dateStore.set(date)}
	role="button"
	tabindex="0"
>
	<span class="m-1">{(date + 1) % 28 || 28}</span>
</div>
