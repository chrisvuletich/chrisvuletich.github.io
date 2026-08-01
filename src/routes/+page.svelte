<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { projects } from '$lib/data/projects';
	const featured = projects;
	const url = 'https://vuletich.dev/';
</script>

<svelte:head>
	<title>Christopher Vuletich | Software Engineer</title>
	<meta
		name="description"
		content="Christopher Vuletich is a computer science student building thoughtful software, experiments, and useful tools."
	/>
	<link rel="canonical" href={url} />
	<meta property="og:title" content="Christopher Vuletich | Software Engineer" />
	<meta
		property="og:description"
		content="Software, experiments, and things I’ve enjoyed creating."
	/>
	<meta property="og:url" content={url} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<main class="home">
	<section class="hero" aria-labelledby="hero-title">
		<div class="hero__main">
			<p class="eyebrow">Software engineer · Kent State University</p>
			<h1 id="hero-title">Christopher<br />Vuletich</h1>
			<p class="hero__lede">
				A collection of software, experiments, and things I’ve enjoyed creating.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={resolve('/projects')}>View projects</a><a
					class="button"
					href={resolve('/about')}>About me</a
				>
			</div>
		</div>
		<aside class="hero__notes" aria-label="Current direction">
			<p class="eyebrow">In the workshop</p>
			<ul>
				<li>Building software and user interfaces</li>
				<li>Exploring computer vision</li>
				<li>Finishing meaningful projects</li>
				<li>Studying computer science</li>
			</ul>
		</aside>
	</section>

	<section class="section section--featured" aria-labelledby="featured-title">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Selected work</p>
				<h2 id="featured-title">Things in progress,<br />and things finished.</h2>
			</div>
			<a class="text-link" href={resolve('/projects')}
				>All projects <span aria-hidden="true">→</span></a
			>
		</div>
		<div class="projects-grid">
			{#each featured as project (project.slug)}<ProjectCard {project} />{/each}
		</div>
	</section>

	<section class="about-preview" aria-labelledby="about-preview-title">
		<p class="eyebrow">A little context</p>
		<h2 id="about-preview-title">I like projects you can point to.</h2>
		<p>
			I’m a computer science student entering my senior year at Kent State, drawn to front-end work,
			useful software, AI, and computer vision. I value the steady work of getting a project across
			the finish line.
		</p>
		<a class="text-link" href={resolve('/about')}
			>More about my approach <span aria-hidden="true">→</span></a
		>
	</section>
	<section class="contact-cta">
		<p class="eyebrow">Open to conversation</p>
		<h2>Building something useful?</h2>
		<p>
			I’m interested in software engineering opportunities, collaborative projects, and
			conversations about making software better.
		</p>
		<a class="button button--solid" href={resolve('/contact')}>Get in touch</a>
	</section>
</main>
