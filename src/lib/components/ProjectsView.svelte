<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	import '../../styles/projects.css';
</script>

<main class="projects-page">
	<section class="projects" aria-labelledby="projects-title">
		<header class="projects__header">
			<p class="projects__eyebrow">Selected Work</p>
			<h1 id="projects-title" class="projects__title">Projects</h1>
			<p class="projects__subtitle">
				A collection of software I've built, codeing experiments, and problems I've solved.
			</p>
		</header>

		<div class="projects__grid" aria-label="Project gallery">
			{#each projects as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>
</main>
