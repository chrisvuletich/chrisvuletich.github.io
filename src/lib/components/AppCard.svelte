<script lang="ts">
	import { resolve } from '$app/paths';
	import type { AppEntry } from '$lib/data/apps';

	let { app }: { app: AppEntry } = $props();
	const primaryHref = $derived(
		app.href ? (app.external ? app.href : resolve(app.href as '/bookshelf')) : null
	);
	const primaryLinkAttributes = $derived({
		href: primaryHref,
		target: app.external ? '_blank' : undefined,
		rel: app.external ? 'noreferrer' : undefined
	});
	const projectHref = $derived(
		app.projectSlug ? resolve('/projects/[slug]', { slug: app.projectSlug }) : null
	);
</script>

<article class="app-card" data-tone={app.tone}>
	<div class="app-card__topline">
		<div class="app-card__visual" aria-hidden="true">{app.visual}</div>
		<div>
			<p>{app.type}</p>
			<span>{app.status}</span>
		</div>
	</div>
	<h2>{app.name}</h2>
	<p class="app-card__description">{app.description}</p>
	<div class="app-card__actions">
		{#if primaryHref && app.actionLabel}
			<a
				{...primaryLinkAttributes}
				class="button button--solid"
				aria-label={app.external ? `${app.actionLabel} (opens in a new tab)` : app.actionLabel}
			>
				{app.actionLabel}{#if app.external}<span aria-hidden="true">↗</span>{/if}
			</a>
		{/if}
		{#if projectHref}
			<a class="text-link" href={projectHref}
				>{app.projectActionLabel ?? 'Project Write-up'} <span aria-hidden="true">→</span></a
			>
		{/if}
		{#if !primaryHref && !projectHref}
			<p class="app-card__availability">Not publicly available yet</p>
		{/if}
	</div>
</article>
