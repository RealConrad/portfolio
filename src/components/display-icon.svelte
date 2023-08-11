<script lang="ts">
	import GameControllerIcon from './icons/game-controller-icon.svelte';
	import PushSwapIcon from './icons/push-swap-icon.svelte';

	export let project: Project;
</script>

<div class="w-10 h-10 mt-3">
	{#if project.name == 'Push Swap'}
		<PushSwapIcon />
	{:else if project.name == 'So Long'}
		<GameControllerIcon />
	{/if}
</div>
