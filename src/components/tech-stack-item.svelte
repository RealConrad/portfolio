<script lang="ts">
	export let tech: TechStack;
</script>

<a href={tech.href} target="_blank" class="hover:cursor-pointer" title={tech.name}>
	<img alt="" src="https://skillicons.dev/icons?i={tech.skillsIconName}&theme=dark" />
</a>
