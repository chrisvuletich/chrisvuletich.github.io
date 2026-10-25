<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/data/projects';
	import { projectPreviews, oneTaskExcerpt, vehiclePipeline } from '$lib/data/project-previews';
	let { slug }: { slug: Project['slug'] } = $props();
	const preview = $derived(projectPreviews[slug]);
</script>

<div class="project-preview" data-project={slug}>
	{#if preview}
		<img
			class="project-preview__primary"
			src={`${base}/images/project/${preview.image}`}
			alt={preview.alt}
			loading="lazy"
			decoding="async"
		/>
		{#if preview.secondary}
			<img
				class="project-preview__secondary"
				src={`${base}/images/project/${preview.secondary}`}
				alt={preview.secondaryAlt ?? ''}
				loading="lazy"
				decoding="async"
			/>
		{/if}
	{:else if slug === 'onetask-cli'}
		<div class="project-preview__terminal" aria-label="Excerpt from the OneTask CLI case study">
			<p>OneTask CLI</p>
			<pre><code>{oneTaskExcerpt}</code></pre>
		</div>
	{:else if slug === 'towtruck-alert'}
		<div class="project-preview__workflow" aria-label="TowTruck Alert processing workflow">
			<p>Vehicle detection pipeline</p>
			<ol>
				{#each vehiclePipeline as step (step)}<li>{step}</li>{/each}
			</ol>
		</div>
	{/if}
</div>
