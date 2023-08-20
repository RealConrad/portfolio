<script lang="ts">
	import { onMount } from 'svelte';
	import Avatar from '../avatar.svelte';
	import NavbarLink from './navbar-link.svelte';
	import BurgerIcon from '../icons/burger-icon.svelte';
	import ExitIcon from '../icons/exit-icon.svelte';

	let sectionTop: number = 0;
	let scrollY: number = 0;
	let navBg: string = 'transparent';
	let isSidePanelOpen: boolean = false;

	onMount(() => {
		const aboutSection = document.getElementById('About');
		if (aboutSection) sectionTop = aboutSection.offsetTop - 5;
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const toggleSidePanel = () => {
		isSidePanelOpen = !isSidePanelOpen;
	};

	const handleKeyDown = () => {
		//
	};

	const handleScroll = () => {
		scrollY = window.scrollY;
		navBg =
			scrollY >= sectionTop ? 'bg-richBlack-100 border-b-[1px] border-myGrey-200' : 'transparent';
	};

	const scrollIntoView = (id: string) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
	};
</script>

{#if isSidePanelOpen}
	<div
		on:click={toggleSidePanel}
		on:keydown={handleKeyDown}
		class="z-30 absolute top-0 bottom-0 left-0 right-0"
	/>
{/if}
<div class="fixed z-40 top-0 w-full text-light xl:backdrop-blur-0 backdrop-blur-sm {navBg} ">
	<div class="flex justify-between w-full items-center py-3 lg:px-44 px-8">
		<div
			aria-hidden="true"
			on:click={() => scrollIntoView('landing-page')}
			class="flex gap-x-5 cursor-pointer"
		>
			<Avatar imageUrl={'/images/profile2.png'} />
			<div class="text-lg">Conrad Wenz</div>
		</div>
		<div
			on:keydown={handleKeyDown}
			on:click={toggleSidePanel}
			class="md:hidden h-8 w-8 cursor-pointer"
		>
			<BurgerIcon />
		</div>

		{#if isSidePanelOpen}
			<div
				class={`absolute top-0 right-1/3 max-w-screen-md border-l w-full border-myGrey-200 bg-richBlack-100 h-screen p-4 translate-x-full duration-300 ease-in-out md:hidden`}
			>
				<div class="pb-8">
					<div on:click={toggleSidePanel} on:keydown={handleKeyDown} class="text-light w-4 h-4">
						<ExitIcon />
					</div>
				</div>
				<NavbarLink
					on:click={(e) => {
						scrollIntoView(e.detail);
						toggleSidePanel();
					}}
					linkText={'About'}
					linkSize={'text-2xl'}
				/>
				<div class="py-2" />
				<NavbarLink
					on:click={(e) => {
						scrollIntoView(e.detail);
						toggleSidePanel();
					}}
					linkText={'Projects'}
					linkSize={'text-2xl'}
				/>
				<div class="py-2" />
				<NavbarLink
					on:click={(e) => {
						scrollIntoView(e.detail);
						toggleSidePanel();
					}}
					linkText={'Contact'}
					linkSize={'text-2xl'}
				/>
			</div>
		{/if}

		<!-- Traditional navbar links for larger screens -->
		<div class="hidden md:flex gap-x-10">
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'About'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Projects'} />
			<NavbarLink on:click={(e) => scrollIntoView(e.detail)} linkText={'Contact'} />
		</div>
	</div>
</div>
