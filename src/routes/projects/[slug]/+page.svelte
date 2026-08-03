<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import OneTaskCaseStudy from '$lib/components/OneTaskCaseStudy.svelte';
	import RockyProject from '$lib/components/RockyProject.svelte';
	import TowTruckCaseStudy from '$lib/components/TowTruckCaseStudy.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
	const canonical = $derived(`https://vuletich.dev/projects/${project.slug}`);
</script>

<svelte:head>
	<title>{project.title} | Christopher Vuletich</title>
	<meta name="description" content={project.description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:title" content={`${project.title} | Christopher Vuletich`} />
	<meta property="og:description" content={project.description} />
	<meta property="og:url" content={canonical} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

{#if project.slug === 'rocky'}
	<RockyProject />
{:else if project.slug === 'onetask-cli'}
	<OneTaskCaseStudy />
{:else if project.slug === 'towtruck-alert'}
	<TowTruckCaseStudy />
{:else}
	<main class="page">
		<a class="back-link" href={resolve('/projects')}>← Back to projects</a>
		<header class="detail-header">
			<div>
				<p class="eyebrow">Project file</p>
				<h1>{project.title}</h1>
			</div>
			<div class="detail-header__summary">
				<p>{project.overview}</p>
				<dl class="detail-meta">
					<div>
						<dt>Status</dt>
						<dd>{project.status}</dd>
					</div>
					<div>
						<dt>Category</dt>
						<dd>{project.category}</dd>
					</div>
				</dl>
			</div>
		</header>
		<div class="detail-body">
			<div class="detail-copy">
				<section>
					<h2>Why this project</h2>
					<p>{project.motivation}</p>
				</section>
				<section>
					<h2>My contribution</h2>
					<p>{project.contribution}</p>
				</section>
				<section>
					<h2>Development notes</h2>
					<ul class="milestones">
						{#each project.milestones as milestone (milestone)}<li>{milestone}</li>{/each}
					</ul>
				</section>
			</div>
			<aside class="detail-aside">
				<p class="eyebrow">Working set</p>
				<h2>Technology</h2>
				<ul class="tag-list">
					{#each project.technologies as technology (technology)}<li>{technology}</li>{/each}
				</ul>
				{#if project.githubUrl}<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
					<a class="button button--solid" href={project.githubUrl} target="_blank" rel="noreferrer"
						>View on GitHub ↗</a
					>{/if}
			</aside>
		</div>
	</main>
{/if}
