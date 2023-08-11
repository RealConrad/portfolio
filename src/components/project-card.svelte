<script lang="ts">
	import DisplayIcon from './display-icon.svelte';

	export let project: Project;
</script>

<div class="mt-10 bg-myGrey-600 border-2 border-myGrey-500 w-[500px] h-[450px] rounded-2xl">
	<div class="p-4">
		<img class="w-full h-[250px] rounded-lg object-cover" alt="" src={project.imageUrl} />
		<div class="p-3">
			<div class="flex items-center gap-x-4">
				<DisplayIcon {project} />
				<div>
					<div class="text-4xl font-bold">
						{project.name}
					</div>
					<div class="text-xs text-purple-400">{project.projectType}</div>
				</div>
			</div>
			<div style="height: 3px" class="w-full bg-myGrey-500 my-5" />
			<div>
				{project.description}
			</div>
		</div>
	</div>
</div>
