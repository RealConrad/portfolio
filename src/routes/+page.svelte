<script lang="ts">
	import NavBar from '../components/navbar/nav-bar.svelte';
</script>

<div class="image w-screen h-screen">
	<NavBar />
	<div class=" h-full w-full flex justify-center items-center text-light">
		<div class="text-8xl font-semibold">
			<div>Conrad</div>
			<div>Wenz</div>
		</div>
	</div>
</div>

<style>
	.image {
		background-image: url('../images/image1.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
	}
</style>
