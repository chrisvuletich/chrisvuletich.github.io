<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<main class="page projects-page">
	<header class="page-intro">
		<h1>Projects</h1>
		<p>Web apps, Python tools, and computer vision projects I’ve worked on.</p>
	</header>
	<div class="projects-grid">
		{#each projects as project, index (project.slug)}<ProjectCard {project} {index} />{/each}
	</div>
</main>
