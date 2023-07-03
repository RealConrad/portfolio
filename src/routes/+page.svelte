<script lang="ts">
	import AboutSection from '../components/about-section.svelte';
	import NavBar from '../components/navbar/nav-bar.svelte';
	import ProjectsSection from '../components/projects-section.svelte';
</script>

<div class="w-full h-screen">
	<!-- z-50 is for navbar, wont work if i put it on component itself for some reason
		conflicts with roadmap component -->
	<section id="landing-page" class="image w-full h-full z-50">
		<NavBar />
		<div class="h-full w-full flex justify-center items-center text-light text-center">
			<div>
				<div class="overflow-hidden">
					<div class="text-6xl font-bold animate-slide-in-top delay-07">Hi, I'm Conrad</div>
				</div>
				<div class="overflow-hidden mt-5">
					<div class="text-base animate-slide-in-top delay-09">
						Front-End Developer & C-Programmer
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="bg-richBlack-100 text-light px-60 w-full">
		<section id="About" class="pt-48 z-20">
			<AboutSection />
		</section>
		<section id="Projects" class="py-48">
			<ProjectsSection />
		</section>
	</div>
</div>
