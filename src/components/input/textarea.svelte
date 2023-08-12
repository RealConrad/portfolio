<script lang="ts">
	export let label: string;
	export let isRequired: boolean;
</script>

<div class="relative w-full">
	<textarea
		rows="10"
		required={isRequired ? true : false}
		id={label}
		class="px-2.5 pb-2.5 pt-4 w-full text-light bg-transparent rounded-lg border-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer resize-none"
		placeholder=""
	/>
	<label
		for={label}
		class="absolute text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-richBlack-100 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
	>
		{label}{#if isRequired === true}
			*
		{/if}
	</label>
</div>
