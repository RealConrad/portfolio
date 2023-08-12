<script lang="ts">
	import Header from '../header.svelte';
	import Input from '../input/input.svelte';
	import Textarea from '../input/textarea.svelte';

	let name: string;
	let email: string;
	let message: string;
</script>

<div>
	<Header title={'Contact'} />
	<div class="pt-6">
		If you've got questions, ideas, or just want to chat about the cosmos, drop me a line below.
		Looking forward to hearing from you! 🚀
	</div>
	<div class="pt-5">
		<div class="flex gap-x-10">
			<Input
				on:input={(e) => (name = e.detail)}
				label="Your name"
				isRequired={true}
				inputType="text"
			/>
			<Input
				on:input={(e) => (email = e.detail)}
				label="Your email"
				isRequired={true}
				inputType="email"
			/>
		</div>
		<div class="pt-10">
			<Textarea on:input={(e) => (message = e.detail)} label="Your message" isRequired={true} />
		</div>
	</div>
</div>
