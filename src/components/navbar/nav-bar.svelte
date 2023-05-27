<script lang="ts">
	import Avatar from '../avatar.svelte';
	import NavbarLink from './navbar-link.svelte';
</script>

<div class="absolute top-0 w-full h-10 items-center text-light">
	<div class="flex justify-between w-full items-center pt-6 px-44">
		<div class="flex gap-x-5">
			<Avatar imageUrl={'../../images/ProfilePicture.jpg'} />
			<div class="text-lg">Conrad Wenz</div>
		</div>
		<div class="flex gap-x-10">
			<NavbarLink linkText={'About'} />
			<NavbarLink linkText={'Projects'} />
			<NavbarLink linkText={'Contact'} />
		</div>
	</div>
</div>
