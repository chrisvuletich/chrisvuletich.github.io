<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import type { Project } from '$lib/data/projects';
	const contextSeparator = ' · ';
	let { project, index = 0 }: { project: Project; index?: number } = $props();
</script>

<article class="project-card" data-project={project.slug}>
	<a
		class="project-card__cover-link"
		href={resolve('/projects/[slug]', { slug: project.slug })}
		aria-label={`Explore the ${project.title} project`}
	></a>
	<div class="project-card__visual"><ProjectPreview slug={project.slug} /></div>
	<div class="project-card__body">
		<div class="project-card__topline">
			<span>{String(index + 1).padStart(2, '0')} / {project.category}</span><span
				class="status"
				data-status={project.status}>{project.status}</span
			>
		</div>
		<h2>{project.title}</h2>
		{#if project.role || project.dateRange}
			<p class="project-card__context">
				{#if project.role}{project.role}{/if}{#if project.role && project.dateRange}
					{contextSeparator}
				{/if}{#if project.dateRange}{project.dateRange}{/if}
			</p>
		{/if}
		<p class="project-card__description">{project.description}</p>
		<ul class="tag-list" aria-label={`${project.title} technologies`}>
			{#each project.technologies as technology (technology)}<li>{technology}</li>{/each}
		</ul>
		<p class="project-card__card-action">Explore project <span aria-hidden="true">↗</span></p>
	</div>
</article>
