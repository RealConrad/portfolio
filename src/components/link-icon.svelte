<script lang="ts">
	export let href: string;
	export let width: string;
	export let height: string;
</script>

<a target="_blank" {href} class="w-{width} h-{height}">
	<slot />
</a>
