<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Project } from '$lib/data/projects';

	let { project }: { project: Project } = $props();
</script>

<article class="project-card">
	<a
		class="project-card__cover-link"
		href={resolve('/projects/[slug]', { slug: project.slug })}
		aria-label={`Explore the ${project.title} project`}
	></a>
	<div class="project-card__topline">
		<span>{project.category}</span><span class="status" data-status={project.status}
			>{project.status}</span
		>
	</div>
	<h2>{project.title}</h2>
	{#if project.role || project.dateRange}
		<p class="project-card__context">
			{#if project.role}{project.role}{/if}{#if project.role && project.dateRange}
				·
			{/if}{#if project.dateRange}{project.dateRange}{/if}
		</p>
	{/if}
	<p>{project.description}</p>
	<ul class="tag-list" aria-label={`${project.title} technologies`}>
		{#each project.technologies as technology (technology)}<li>{technology}</li>{/each}
	</ul>
	<p class="project-card__card-action">
		{project.slug === 'rocky' ? 'View case study' : 'Explore project'} →
	</p>
</article>
