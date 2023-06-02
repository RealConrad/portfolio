<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const handleClick = () => {
		dispatch('click', linkText);
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleClick();
		}
	};

	export let linkText: string;
</script>

<div
	on:click={handleClick}
	on:keydown={handleKeyDown}
	class="cursor-pointer group transition-all duration-300 ease-in-out"
>
	<span
		class="bg-left-bottom bg-gradient-to-r from-light to-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
	>
		{linkText}
	</span>
</div>
