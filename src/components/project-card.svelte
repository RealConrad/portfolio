<script lang="ts">
	import { onMount } from 'svelte';

	export let project: Project;
	let divElement: HTMLDivElement;
	let divHeight: number = 0;
	let isHovered: boolean = false;

	onMount(() => {
		divHeight = divElement.clientHeight;
		console.log('Div height:', divHeight);
	});
</script>

<div class="{isHovered ? 'rotating-border' : ''} relative">
	<div
		on:mouseover={() => (isHovered = true)}
		on:mouseout={() => (isHovered = false)}
		on:focus={() => (isHovered = true)}
		on:blur={() => (isHovered = false)}
		class="w-96 h-[400px] z-10 rounded-lg overflow-hidden absolute p-1"
	>
		<img class="w-full h-full object-cover {isHovered ? '' : ''}" src={project.imageUrl} alt="" />

		<div class="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4">
			<div
				class="absolute bottom-0 left-0 pl-4 pb-3 text-white text-2xl font-extrabold tracking-tight rounded transition-transform duration-300 transform"
				style={isHovered ? `transform: translateY(-${divHeight + 10}px);` : ''}
			>
				{project.name}
			</div>

			<div
				bind:this={divElement}
				class="opacity-0 {isHovered
					? 'opacity-100 translate-y-0'
					: 'translate-y-full'} transition-all duration-300 rounded"
			>
				<div class="text-gray-300">
					{project.description}
					<a class="underline whitespace-nowrap" href={project.href} target="_blank">Learn more</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.rotating-border {
		box-shadow: 0 20px 35px rgba(0, 0, 0, 0.3);
		border-radius: 5px;
		width: 386px;
		height: 400px;
		overflow: hidden;
	}
	.rotating-border::before {
		background-image: conic-gradient(rgb(147 51 234) 20deg, transparent 120deg);
		content: '';
		height: 150%;
		width: 150%;
		position: absolute;
		left: -25%;
		top: -25%;
		animation: rotate 4s infinite linear;
	}

	@keyframes rotate {
		100% {
			transform: rotate(-360deg);
		}
	}
	.rotating-border::after {
		content: '';
		height: 94%;
		width: 94%;
		position: absolute;
		border-radius: 5px;
		top: 2%;
		left: 3%;
		display: grid;
	}
</style>
