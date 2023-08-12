<script lang="ts">
	import CodeIcon from './icons/code-icon.svelte';
	import CssIcon from './icons/css-icon.svelte';

	export let topText: string;
	export let bottomText: string;
	export let icon: string;
</script>

<div
	class="bg-darkPurple-100 border-2 border-space-100 text-light rounded-2xl w-56 h-56 flex flex-col justify-center items-center text-center relative glow transition-all duration-300 ease-in-out hover:scale-105"
>
	<div class="pb-8">
		{#if icon === 'fe'}
			<div class="w-10 h-10 mt-6">
				<CssIcon />
			</div>
		{:else if icon === 'c'}
			<div class="w-10 h-10 mt-3">
				<CodeIcon />
			</div>
		{/if}
	</div>
	<div class="text-xl font-bold">
		<div>{topText}</div>
		<div>{bottomText}</div>
	</div>
</div>
