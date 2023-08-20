<script lang="ts">
	import Header from '../header.svelte';
	import CustomButton from '../input/custom-button.svelte';
	import Input from '../input/input.svelte';
	import Textarea from '../input/textarea.svelte';

	let nameError: string | null = null;
	let emailError: string | null = null;
	let messageError: string | null = null;
	let sentMessage: boolean = false;

	const sendToFormspree = async () => {
		try {
			const response = await fetch('https://formspree.io/f/xjvqyapp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name,
					subject: 'Portfolio Website Contact Form',
					email: email,
					message: message
				})
			});

			if (response.ok) {
				sentMessage = true;
			} else {
				// Handle Formspree specific error
				console.error('Form submission failed:', await response.text());
				alert('Seems like theres a problem. Please try again later.');
			}
		} catch (error) {
			// Handle network errors or other unforeseen errors
			alert('Seems like theres a problem. Please try again later.');
			console.error('There was an error sending the form:', error);
		}
	};

	const sendEmail = async () => {
		validateName();
		validateEmail();
		validateMessage();

		if (!nameError && !emailError && !messageError) {
			sendToFormspree();
		}
	};

	const validateName = () => {
		if (!name || name.trim() === '') {
			nameError = 'Name is required.';
		} else {
			nameError = null;
		}
	};

	const validateEmail = () => {
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
		if (!email || email.trim() === '') {
			emailError = 'Email is required.';
		} else if (!emailRegex.test(email)) {
			emailError = 'Email format is invalid.';
		} else {
			emailError = null;
		}
	};

	const validateMessage = () => {
		if (!message || message.trim() === '') {
			messageError = 'Message is required.';
		} else {
			messageError = null;
		}
	};

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
		{#if !sentMessage}
			<form on:submit|preventDefault={sendEmail} method="POST">
				<div class="md:flex gap-x-10">
					<div class="w-full md:pb-0 pb-5">
						<Input
							on:input={(e) => {
								name = e.detail;
								validateName();
							}}
							label="Your name"
							isRequired={true}
							inputType="text"
							name="name"
						/>
						{#if nameError}
							<div class="text-red-500 text-sm">{nameError}</div>
						{/if}
					</div>
					<div class="w-full">
						<Input
							on:input={(e) => {
								email = e.detail;
								validateEmail();
							}}
							label="Your email"
							isRequired={true}
							inputType="email"
							name="email"
						/>
						{#if emailError}
							<div class="text-red-500 text-sm">{emailError}</div>
						{/if}
					</div>
				</div>
				<div class="pt-5">
					<Textarea
						on:input={(e) => {
							message = e.detail;
							validateMessage();
						}}
						label="Your message"
						name="message"
						isRequired={true}
					/>
					{#if messageError}
						<div class="text-red-500 text-sm">{messageError}</div>
					{/if}
				</div>
				<div class="flex justify-center pt-8">
					<CustomButton buttonType={'submit'} buttonName={'Submit'} />
				</div>
			</form>
		{:else}
			<div class="flex justify-center text-4xl font-semibold text-purple-500">
				Thank you for your message!
			</div>
		{/if}
	</div>
</div>
