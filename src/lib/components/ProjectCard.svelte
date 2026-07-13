<script lang="ts">
	import type { Project } from '$lib/data/projects';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();

	const cardId = $derived(project.learnMoreUrl.replace('#', ''));
</script>

<article class="project-card" id={cardId}>
	<div class="project-card__header">
		<h2 class="project-card__title">{project.title}</h2>
		<p class="project-card__status" data-status={project.status}>{project.status}</p>
	</div>

	<p class="project-card__description">{project.description}</p>

	<ul class="project-card__technologies" aria-label={`${project.title} technologies`}>
		{#each project.technologies as technology (technology)}
			<li>{technology}</li>
		{/each}
	</ul>

	<div class="project-card__actions">
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="project-card__button project-card__button--primary" href={project.githubUrl}>GitHub</a
		>
		<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
		<a class="project-card__button project-card__button--secondary" href={project.learnMoreUrl}>
			Learn More
		</a>
	</div>
</article>
