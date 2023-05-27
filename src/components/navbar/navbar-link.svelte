<script lang="ts">
	export let linkText: string;
</script>

<div class="cursor-pointer group transition-all duration-300 ease-in-out">
	<span
		class="bg-left-bottom bg-gradient-to-r from-light to-light bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out"
	>
		{linkText}
	</span>
</div>
