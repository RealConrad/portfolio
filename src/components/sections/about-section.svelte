<script lang="ts">
	import Header from '../header.svelte';
	import Roadmap from '../roadmap.svelte';
	import SkillProgessBar from '../skill-progess-bar.svelte';
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
		<div class="">
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
			<Header size={'text-4xl'} title={'Current Skillset'} />
			<SkillProgessBar />
		</div>
	</div>
	<div>
		<Header size={'text-4xl'} title={'My Journey'} />
		<Roadmap />
	</div>
</div>

<style>
	@keyframes rotateCircle {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	.circle-spin {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 240px;
		height: 230px;
		border-radius: 50%;
		border-top: 0.1rem solid transparent;
		border-bottom: 0.1rem solid transparent;
		border-left: 0.1rem solid rgb(245 158 11);
		border-right: 0.1rem solid rgb(245 158 11);
		animation: rotateCircle 8s linear infinite;
	}
</style>
