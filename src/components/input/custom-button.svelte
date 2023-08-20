<script lang="ts">
	import { onMount, afterUpdate, createEventDispatcher } from 'svelte';

	export let buttonName: string;
	export let buttonType: 'button' | 'submit' | 'reset' = 'button';

	let divElement: HTMLButtonElement;
	let divWidth: number = 0;
	let divTotalWidth: string;
	const dispatch = createEventDispatcher();

	const calculateWidth = () => {
		if (divElement) {
			divWidth = divElement.offsetWidth;
			divTotalWidth = `${divWidth + 10}px`;
		}
	};

	const emitClick = () => {
		dispatch('click');
	};

	onMount(() => {
		calculateWidth();
	});

	// Using afterUpdate in case there's a delay in rendering or updating the element's width.
	afterUpdate(calculateWidth);
</script>

<button
	bind:this={divElement}
	type={buttonType}
	on:click={emitClick}
	class="z-10 relative p-1.5 border border-gray-700 rounded-md uppercase hover:text-light text-purple-500 ease-in-out duration-300"
>
	<div
		class="absolute z-10 bg-richBlack-100 top-5 -ml-3 pointer-events-none"
		style="width: {divTotalWidth}; height: 10px;"
	/>
	<div class="relative z-20 border px-8 py-2 rounded-sm border-purple-500 angledFill">
		<div class=" w-full flex gap-x-3 items-center">
			<slot />
			<div>
				{buttonName}
			</div>
		</div>
	</div>
</button>
