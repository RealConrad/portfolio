<script lang="ts">
	import Avatar from '../avatar.svelte';
	import NavbarLink from './navbar-link.svelte';

	const scrollIntoView = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="fixed top-0 w-full text-light">
	<div class="flex justify-between w-full items-center py-3 px-44">
		<div
			aria-hidden="true"
			on:click={(e) => scrollIntoView('landing-page')}
			class="flex gap-x-5 cursor-pointer"
		>
			<Avatar imageUrl={'/images/profile.jpg'} />
			<div class="text-lg">Conrad Wenz</div>
		</div>
		<div class="flex gap-x-10">
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'About'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Projects'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Contact'} />
		</div>
	</div>
</div>
