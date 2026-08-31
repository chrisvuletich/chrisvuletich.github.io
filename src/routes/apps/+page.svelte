<script lang="ts">
	import AppCard from '$lib/components/AppCard.svelte';
	import { apps } from '$lib/data/apps';
</script>

<svelte:head>
	<title>Apps | Christopher Vuletich</title>
	<meta name="description" content="Apps, tools, and interactive projects I've built." />
	<link rel="canonical" href="https://vuletich.dev/apps" />
	<meta property="og:title" content="Apps | Christopher Vuletich" />
	<meta property="og:description" content="Apps, tools, and interactive projects I've built." />
	<meta property="og:url" content="https://vuletich.dev/apps" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<main class="page apps-page">
	<header class="page-intro apps-page__intro">
		<p class="eyebrow">Things to use / explore</p>
		<h1>Apps</h1>
		<p>Things I’ve built to use, experiment with, or simply because I wanted them to exist.</p>
	</header>
	<section class="apps-directory" aria-label="Apps, tools, and interactive projects">
		{#each apps as app (app.slug)}
			<AppCard {app} />
		{/each}
	</section>
</main>
