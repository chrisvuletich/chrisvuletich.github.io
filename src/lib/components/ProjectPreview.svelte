<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { Project } from '$lib/data/projects';
	import { projectPreviews, oneTaskExcerpt } from '$lib/data/project-previews';
	let { slug }: { slug: Project['slug'] } = $props();
	const preview = $derived(projectPreviews[slug]);
	let playing = $state(false);
	onMount(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const updateMotion = () => {
			playing = !preference.matches;
		};
		updateMotion();
		preference.addEventListener('change', updateMotion);
		return () => preference.removeEventListener('change', updateMotion);
	});
</script>

<div class="project-preview" data-project={slug}>
	{#if preview}
		<picture class="project-preview__picture">
			{#if preview.animatedWebp && playing}
				<source type="image/webp" srcset={`${base}/images/project/${preview.animatedWebp}`} />
			{/if}
			<img
				class="project-preview__primary"
				src={`${base}/images/project/${preview.poster && !playing ? preview.poster : preview.image}`}
				alt={preview.alt}
				loading="lazy"
				decoding="async"
			/>
		</picture>
		{#if preview.poster}
			<button
				class="project-preview__playback"
				type="button"
				aria-label={playing ? 'Pause TowTruck Alert demo' : 'Play TowTruck Alert demo'}
				aria-pressed={playing}
				onclick={() => {
					playing = !playing;
				}}>{playing ? 'Pause demo' : 'Play demo'}</button
			>
		{/if}
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
	{/if}
</div>
