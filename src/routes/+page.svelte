<script lang="ts">
	import Header from '../components/header.svelte';
	import NavBar from '../components/navbar/nav-bar.svelte';
	import Roadmap from '../components/roadmap.svelte';
	import SkillsCard from '../components/skills-card.svelte';
</script>

<div class="w-full h-screen">
	<section id="landing-page" class="image w-full h-full">
		<NavBar />
		<div class="h-full w-full flex justify-center items-center text-light text-center">
			<div>
				<div class="overflow-hidden">
					<div class="text-6xl font-bold animate-slide-in-top delay-02">Hi, I'm Conrad</div>
				</div>
				<div class="overflow-hidden mt-5">
					<div class="text-base animate-slide-in-top delay-09">
						Front-End Developer & C-Programmer
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="About" class="w-full px-60 pt-48 bg-richBlack-100 text-light">
		<section class="w-full" style="height: 2000px">
			<div>
				<Header title={'About'} />
				<div class="w-3/4 text-myGrey-300 pt-8">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
					been the industry's standard dummy text ever since the 1500s, when an unknown printer took
					a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply
					dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					and scrambled it to make a type specimen book.
				</div>
				<div class="flex gap-x-10 pt-20">
					<SkillsCard icon="fe" topText="Frontend" bottomText="Developer" />
					<SkillsCard icon="c" topText="C Programmer" bottomText="" />
				</div>
			</div>
			<div class="pt-32">
				<Header title={'Work Experience'} />
				<Roadmap />
			</div>
		</section>
	</section>
</div>
