<script lang="ts">
	import Header from '../header.svelte';
	import Roadmap from '../roadmap.svelte';
	import SkillsCard from '../skills-card.svelte';
</script>

<div class="w-full">
	<div>
		<Header title={'About'} />
		<div class="w-3/4 text-myGrey-300 pt-6">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
			been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
			galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text
			of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
			text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book.
		</div>
		<div class="flex gap-x-10 py-20">
			<SkillsCard icon="fe" topText="Frontend" bottomText="Developer" />
			<SkillsCard icon="c" topText="C Programmer" bottomText="" />
		</div>
	</div>
	<div>
		<Header size={'text-4xl'} title={'Work Experience'} />
		<Roadmap />
	</div>
</div>
