<script lang="ts">
	import DisplayIcon from './display-icon.svelte';
	import CodeIcon from './icons/code-icon.svelte';
	import GithubIcon from './icons/github-icon.svelte';

	export let project: Project;
</script>

<div
	class="mt-10 bg-myGrey-600 border-2 border-myGrey-500 hover:border-purple-600
	 ease-in-out duration-300 w-[300px] sm:w-[400px] lg:w-[420px] xl:w-[500px] md:w-[400px] h-[440px] md:h-[500px] rounded-2xl"
>
	<div class="p-4">
		<div class="flex justify-center">
			<img
				class="md:w-full w-[250px] md:h-[250px] h-[150px] rounded-lg object-cover"
				alt=""
				src={project.imageUrl}
			/>
		</div>
		<div class="p-3">
			<div class="flex items-center gap-x-4">
				<DisplayIcon {project} />
				<div>
					<div class="text-4xl font-bold">
						{project.name}
					</div>
					<div class="text-xs text-purple-400 italic">{project.projectType}</div>
				</div>
			</div>
			<div style="height: 3px" class="w-full bg-myGrey-500 my-5" />
			<div class="relative h-full w-full">
				<div>
					{project.description}
				</div>
				<div
					class="absolute md:top-16 top-20 left-0 right-0 flex items-center justify-between gap-x-5"
				>
					<div>
						<div class="border-2 border-myGrey-500 px-4 py-2 rounded-xl flex gap-x-3 items-center">
							<div class="w-5 h-5 mt-2 text-purple-600">
								<CodeIcon />
							</div>
							<div class="flex-wrap">
								{#each project.technologies as tech, i}
									{tech}
									{#if i != project.technologies.length - 1}
										<span class="-ml-1">&nbsp;•&nbsp;</span>
									{/if}
								{/each}
							</div>
						</div>
					</div>
					<a target="_blank" href={project.githubUrl} class="text-light w-8 h-8 cursor-pointer">
						<GithubIcon />
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
