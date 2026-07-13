<script lang="ts">
	import { base } from '$app/paths';
	import '../styles/home.css';

	const projectsPath = `${base}/projects`;
	const aboutPath = `${base}/about`;
</script>

<svelte:head>
	<title>Christopher Vuletich | Software Engineer</title>
	<meta name="description" content="Building software, exploring ideas, and creating things." />
</svelte:head>

<main class="home">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero__content">
			<p class="hero__subtitle">Software Engineer</p>

			<h1 id="hero-title" class="hero__title">Christopher Vuletich</h1>

			<p class="hero__description">
				A collection of projects, experiments, and things I've enjoyed creating.
			</p>

			<nav class="hero__actions" aria-label="Primary navigation">
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="button button--primary" href={projectsPath}>View Projects</a>
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a class="button button--secondary" href={aboutPath}>About Me</a>
			</nav>
		</div>
	</section>
</main>
