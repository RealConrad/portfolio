<script lang="ts">
	import Header from '../header.svelte';
	import ProjectCard from '../project-card.svelte';
	import { onMount } from 'svelte';

	let projects: Project[] = [];

	onMount(async () => {
		try {
			const response = await fetch('data/project.json');
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			projects = data.projects;
		} catch (error) {
			console.error('Error:', error);
		}
	});
</script>

<div>
	<Header title={'Projects'} />
	<div class="text-gray-300 w-3/4 pt-6">
		Welcome to my coding playground! This is where I've been putting my skills to the test and
		creating some cool stuff. Want to see more? Swing by my <a
			class="underline"
			target="_blank"
			href="https://github.com/RealConrad">Github page</a
		> for the full lineup.
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
