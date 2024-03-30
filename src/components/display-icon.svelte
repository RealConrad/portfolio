<script lang="ts">
	import Exchange from './icons/exchange.svelte';
	import Utensils from './icons/utensils.svelte';
	import GameControllerIcon from './icons/game-controller-icon.svelte';
	import LightBulb from './icons/light-bulb.svelte';
	import Terminal from './icons/terminal.svelte';

	export let project: Project;
</script>

<div class="w-10 h-10 mt-3">
	{#if project.name == 'Philosophers'}
		<Utensils />
	{:else if project.name == 'So Long'}
		<GameControllerIcon />
	{:else if project.name == 'Mini Talk'}
		<Exchange />
	{:else if project.name == 'Mini Ray Tracer'}
		<LightBulb />
	{:else if project.name == 'Mini Shell'}
		<Terminal />
	{/if}
</div>
