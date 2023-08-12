<script lang="ts">
	import AboutSection from '../components/sections/about-section.svelte';
	import NavBar from '../components/navbar/nav-bar.svelte';
	import ProjectsSection from '../components/sections/projects-section.svelte';
	import ContactSection from '../components/sections/contact-section.svelte';
	import FooterSection from '../components/sections/footer-section.svelte';
	import LandingPageSection from '../components/sections/landing-page-section.svelte';
</script>

<div class="w-full h-screen">
	<!-- z-50 is for navbar, wont work if i put it on component itself for some reason
		conflicts with roadmap component -->
	<section id="landing-page" class="image w-full h-full z-50">
		<NavBar />
		<LandingPageSection />
	</section>
	<div class="bg-richBlack-100 text-light px-60 w-full">
		<section id="About" class="pt-28 z-20">
			<AboutSection />
		</section>
		<section id="Projects" class="pt-28">
			<ProjectsSection />
		</section>
		<section id="Contact" class="pt-28">
			<ContactSection />
		</section>
		<section id="Footer">
			<FooterSection />
		</section>
	</div>
</div>
