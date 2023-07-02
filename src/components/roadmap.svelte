<script lang="ts">
	import { onMount } from 'svelte';
	let experiences: WorkExperience[] = [];

	onMount(async () => {
		const response = await fetch('data/work-experience.json');
		const data = await response.json();
		experiences = data.experienceData;
	});
</script>

{#if experiences.length > 0}
	<div class="relative wrap overflow-hidden p-10 h-full">
		<div
			class="border-2-2 absolute border-opacity-70 border-light h-full border"
			style="left: 50%"
		/>

		{#each experiences as experience}
			<div
				class="{experience.isLeftSide
					? 'flex-row-reverse'
					: ''} mb-8 flex justify-between items-center w-full"
			>
				<div class="order-1 w-5/12" />
				<div
					class="z-20 flex items-center order-1 bg-gray-800 p-3 shadow-xl rounded-full justify-center text-center"
				>
					<div class="text-sm text-light font-semibold">
						<div>
							{experience.startMonthShort}
							{experience.startYear}
						</div>
						<div>&darr;</div>
						<div>
							{experience.endMonthShort}
							{experience.endYear}
						</div>
					</div>
				</div>
				<div class="order-1 bg-darkPurple-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
					<div class="font-bold text-light text-2xl">{experience.companyName}</div>
					<div class=" text-light text-sm">
						{experience.jobTitle}
					</div>
					<div class="bg-light mt-4" style="height: 1px;" />
					<div class="text-sm tracking-wide text-myGrey-300">
						{#each experience.workDescription as work}
							<div class="flex gap-x-2">
								<div class="pt-1">&#x2022</div>
								<div class="py-1">{work}</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div>Oops! Looks like something went wrong. Try again later.</div>
{/if}
