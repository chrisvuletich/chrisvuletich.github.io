<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
</script>

<main class="page projects-page">
	<header class="page-intro">
		<p class="eyebrow">Selected work / 03</p>
		<h1>Projects</h1>
		<p>
			A collection of software I’ve built, experiments I’ve explored, and problems I’ve worked to
			solve.
		</p>
	</header>
	<div class="projects-grid">
		{#each projects as project (project.slug)}<ProjectCard {project} />{/each}
	</div>
</main>
