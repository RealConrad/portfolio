<script lang="ts">
	export let project: Project;
</script>

<div class="w-96 h-[400px] rounded-lg shadow-md overflow-hidden">
	<div class="relative h-full w-full">
		<div class="absolute inset-0">
			<img class="w-full h-full object-cover" src={project.imageUrl} alt="" />
			<svg class="absolute top-[155px] text-mySlate-100" viewBox="0 0 800 600">
				<path
					d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500"
					stroke="transparent"
					fill="currentColor"
				/>
				<path
					class="stroke-2"
					d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400"
					fill="transparent"
				/>
				<rect x="0" y="500" width="800" height="50" fill="currentColor" />
			</svg>
		</div>
		<div class="absolute inset-0 flex flex-col justify-end px-4 pt-1 pb-2">
			<div class="text-white text-2xl font-extrabold tracking-tight">{project.name}</div>
			<div class="text-gray-300">
				{project.description}
				<a class="underline whitespace-nowrap" href={project.href} target="_blank">Learn more</a>
			</div>
		</div>
	</div>
</div>
