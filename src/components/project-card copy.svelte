<script lang="ts">
	import DisplayIcon from './display-icon.svelte';
	import CodeIcon from './icons/code-icon.svelte';
	import GithubIcon from './icons/github-icon.svelte';

	export let project: Project;
</script>

<div
  class="mt-10 bg-myGrey-600 border-2 border-myGrey-500 hover:border-purple-600 ease-in-out duration-300 w-[300px] sm:w-[420px] lg:w-[420px] xl:w-[500px] md:w-[420px] h-[450px] md:h-[500px] rounded-2xl flex flex-col overflow-hidden"
>
  <div class="p-4 flex-grow">
    <div class="flex justify-center">
      <img
        class="w-full h-auto rounded-lg object-cover"
        alt="Project Image"
        src="{project.imageUrl}"
      />
    </div>
    <div class="mt-4">
      <div class="flex items-center gap-x-4">
        <DisplayIcon {project} />
        <div>
          <div class="text-4xl font-bold">
            {project.name}
          </div>
          <div class="text-xs text-purple-400 italic">
            {project.projectType}
          </div>
        </div>
      </div>
      <div class="bg-myGrey-500 h-1 my-4"></div>
      <div>
        {project.description}
      </div>
    </div>
  </div>
  <div class="px-4 py-2">
    <div class="border-2 border-myGrey-500 rounded-xl flex justify-between items-center">
      <div class="flex gap-x-3 items-center">
        <!-- Assuming CodeIcon is a component you would include here -->
        <div class="w-5 h-5 text-purple-600">
          <CodeIcon />
        </div>
        <div class="flex-wrap">
          {#each project.technologies as tech, i}
            <span>{tech}</span>
            {#if i != project.technologies.length - 1}
              <span class="mx-1 text-gray-300">•</span>
            {/if}
          {/each}
        </div>
      </div>
      <a target="_blank" href="{project.githubUrl}" class="text-light w-8 h-8">
        <GithubIcon />
      </a>
    </div>
  </div>
</div>
