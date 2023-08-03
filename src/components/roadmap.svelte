<script lang="ts">
	import { onMount } from 'svelte';
	import SquareIcon from './icons/square-icon.svelte';
	let timeline: WorkExperience[] = [];

	onMount(async () => {
		const response = await fetch('data/work-experience.json');
		const data = await response.json();
		timeline = data.experienceData;
	});
</script>

<div class="mx-auto w-5/6 mt-5">
	{#each timeline as experience, i (experience.id)}
		<div class="group relative">
			<div
				class="w-14 h-14 bg-richBlack-100 rounded-full absolute left-[-27px] top-0 flex items-center justify-center"
			>
				<div
					class="transition-all ease-in-out duration-300 group-hover:text-purple-400 group-hover:rotate-45"
				>
					<SquareIcon />
				</div>
			</div>
			<div
				class="pl-4 border-l-2 group-hover:border-purple-400 transition-all ease-in-out duration-300 pt-2.5 pb-10"
			>
				<div class="pl-6">
					<div class="group-hover:text-purple-400 transition-all ease-in-out duration-300 text-3xl">
						{experience.startYear}<span class="text-xs">{experience.startMonthShort}</span> - {experience.endYear}<span
							class="text-xs">{experience.endMonthShort}</span
						>
					</div>
					<div>
						<span class="font-semibold text-lg">{experience.companyName}</span> •
						<span class="italic text-sm">{experience.jobTitle}</span>
					</div>
					<div class="italic text-sm" />
					<div class="pl-2 text-gray-300">
						{#each experience.workDescription as description}
							<div>• {description}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
