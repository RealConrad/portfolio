<script lang="ts">
	import { onMount } from 'svelte';
	import Avatar from '../avatar.svelte';
	import NavbarLink from './navbar-link.svelte';

	let sectionTop: number = 0;
	let scrollY: number = 0;
	let navBg: string = 'transparent';

	onMount(() => {
		const aboutSection = document.getElementById('About');
		if (aboutSection) sectionTop = aboutSection.offsetTop - 5;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const handleScroll = () => {
		scrollY = window.scrollY;
		navBg =
			scrollY >= sectionTop ? 'bg-richBlack-100 border-b-[1px] border-myGrey-200' : 'transparent';
	};

	const scrollIntoView = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

<div class="fixed z-50 top-0 w-full text-light {navBg} ">
	<div class="flex justify-between w-full items-center py-3 px-44">
		<div
			aria-hidden="true"
			on:click={() => scrollIntoView('landing-page')}
			class="flex gap-x-5 cursor-pointer"
		>
			<Avatar imageUrl={'/images/profile2.png'} />
			<div class="text-lg">Conrad Wenz</div>
		</div>
		<div class="flex gap-x-10">
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'About'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Projects'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Contact'} />
		</div>
	</div>
</div>
