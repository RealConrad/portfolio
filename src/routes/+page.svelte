<script lang="ts">
	import NavBar from '../components/navbar/nav-bar.svelte';
</script>

<div class="w-full h-screen z-20">
	<section id="landing-page" class="image w-full h-full">
		<NavBar />
		<div class="h-full w-full flex justify-center items-center text-light text-center">
			<div>
				<div class="overflow-hidden">
					<div class="text-6xl font-semibold animate-slide-in-top delay-02">Conrad Wenz</div>
				</div>
				<div class="overflow-hidden">
					<div class="text-lg font-medium animate-slide-in-top delay-07">A Programmer</div>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full pl-60 pt-20 bg-black text-light">
		<section id="About" class="w-full" style="height: 2000px">
			<div>
				<div class="">About</div>
				<div>Some content</div>
			</div>
		</section>
	</section>
</div>
