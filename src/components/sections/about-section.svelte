<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../header.svelte';
	import Roadmap from '../roadmap.svelte';
	import TechStackItem from '../tech-stack-item.svelte';

	let techStackLanguages: TechStack[] | undefined = [];
	let techStackLearning: TechStack[] | undefined = [];

	const getData = async (filePath: string): Promise<TechStack[] | undefined> => {
		try {
			const response = await fetch(filePath);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			return data.tech;
		} catch (error) {
			console.error('Error:', error);
			return undefined;
		}
	};

	onMount(async () => {
		techStackLanguages = await getData('data/tech-stack-languages.json');
		techStackLearning = await getData('/data/tech-stack-learning.json');
	});
</script>

<div class="w-full">
	<div>
		<div class="flex justify-center relative">
			<img
				class="border-[3px] border-amber-500 w-52 h-52 rounded-full"
				src="images/profile2.png"
				alt=""
			/>
			<span class="circle-spin" />
		</div>
		<Header title={'About'} />
		<div>
			<div class="w-3/4 text-gray-200 pt-6">
				<div>
					Hello! I'm Conrad. A digital enthusiast deeply passionate about breathing life into ideas,
					making them interactive and engaging. My tech adventure started when I was just 10,
					getting my hands on my first computer. That spark ignited a journey where I am currently
					delving into game development, web crafting, and mastering C/C++ programming.
				</div>
				<div class="py-4">
					When I'm not immersed in code, I'm probably diving into a game, catching up on the latest
					anime, longboarding through city streets, or getting lost in a captivating book – always
					accompanied by a perfectly brewed cup of coffee, of course.
				</div>
				<div>
					My philosophy? Never stop learning. Stay curious. Embrace the challenges that come your
					way. They're just stepping stones to the next big thing.
				</div>
			</div>
		</div>
		<div class="py-10">
			<Header size={'text-4xl'} title={'Tech Stack'} />
			{#if techStackLanguages && techStackLanguages.length > 0}
				<div class="flex gap-x-5 pt-5">
					{#each techStackLanguages as language}
						<TechStackItem tech={language} />
					{/each}
				</div>
			{/if}
			{#if techStackLearning && techStackLearning.length > 0}
				<div class="pt-5 pb-1">Currently learning:</div>
				<div class="flex gap-x-5">
					{#each techStackLearning as other}
						<TechStackItem tech={other} />
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div>
		<Header size={'text-4xl'} title={'My Journey'} />
		<Roadmap />
	</div>
</div>
