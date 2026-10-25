<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { projects } from '$lib/data/projects';

	const featuredProjectDetails = [
		{
			slug: 'rocky',
			image: '/images/project/rocky/after/new-dash.webp',
			alt: 'Rocky dashboard showing courses, account details, and AI tools',
			secondary: '/images/project/rocky/after/new-chat.webp',
			secondaryAlt: 'Rocky AI chat interface',
			fit: 'cover'
		},
		{
			slug: 'sidequest',
			image: '/images/project/sidequest/discover.png',
			alt: 'SideQuest mobile discovery screen for choosing an activity',
			secondary: '/images/project/sidequest/sidequest-result.png',
			secondaryAlt: 'SideQuest activity suggestion screen',
			fit: 'contain'
		},
		{
			slug: 'workout-journal',
			image: '/images/project/workout-log/history.webp',
			alt: 'Workout Journal history screen showing previous training sessions',
			secondary: null,
			secondaryAlt: '',
			fit: 'contain'
		},
		{
			slug: 'password-manager',
			image: '/images/project/password-manager/cli.png',
			alt: 'Password Manager command-line interface showing available vault commands',
			secondary: null,
			secondaryAlt: '',
			fit: 'contain'
		}
	] as const;

	const featuredProjects = featuredProjectDetails.flatMap((details) => {
		const project = projects.find((candidate) => candidate.slug === details.slug);
		return project ? [{ ...project, ...details }] : [];
	});
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
		<img
			class="hero__landscape"
			src={`${base}/images/landscape/mountains-1920.webp`}
			srcset={`${base}/images/landscape/mountains-960.webp 960w, ${base}/images/landscape/mountains-1920.webp 1920w`}
			sizes="100vw"
			width="1920"
			height="1440"
			alt="Clouds parting over snow-covered mountains and autumn forests in the Swiss Alps"
			fetchpriority="high"
		/>
		<div class="hero__inner">
			<div class="hero__main">
				<p class="eyebrow">Computer Science Student &amp; Software Developer</p>
				<h1 id="hero-title">Chris<br />Vuletich</h1>
				<p class="hero__lede">
					I’m a computer science student at Kent State. I build web apps and tools, usually to solve
					a problem I’ve run into myself.
				</p>
				<div class="button-row">
					<a class="button button--solid" href={resolve('/projects')}
						>View Projects <span aria-hidden="true">↗</span></a
					>
					<a class="button" href={resolve('/about')}>About Me <span aria-hidden="true">→</span></a>
				</div>
				<div class="hero__links" aria-label="Elsewhere">
					<a href="https://github.com/chrisvuletich" target="_blank" rel="noreferrer"
						>GitHub <span aria-hidden="true">↗</span></a
					>
				</div>
			</div>
		</div>
	</section>

	<section class="site-guide" aria-labelledby="site-guide-title">
		<div class="site-guide__heading">
			<h2 id="site-guide-title">Explore</h2>
		</div>
		<nav class="site-guide__list" aria-label="Explore the site">
			<a href={resolve('/projects')}>
				<span>01</span>
				<strong>Projects</strong>
				<p>What I’ve built and how it works.</p>
			</a>
			<a href={resolve('/apps')}>
				<span>02</span>
				<strong>Apps</strong>
				<p>Apps and tools you can try.</p>
			</a>
			<a href={resolve('/about')}>
				<span>03</span>
				<strong>About</strong>
				<p>My background and interests.</p>
			</a>
		</nav>
	</section>

	<section class="featured-work" aria-labelledby="featured-title">
		<div class="section-heading">
			<div>
				<h2 id="featured-title">Featured Projects</h2>
			</div>
		</div>

		<div class="featured-projects">
			{#each featuredProjects as project, index (project.slug)}
				<a
					class:featured-project--lead={index === 0}
					class="featured-project"
					data-project={project.slug}
					href={resolve('/projects/[slug]', { slug: project.slug })}
					aria-label={`View the ${project.title} project`}
				>
					<div
						class:featured-project__image--contain={project.fit === 'contain'}
						class="featured-project__image"
					>
						<img
							src={`${base}${project.image}`}
							alt={project.alt}
							loading="lazy"
							decoding="async"
							draggable="false"
						/>
						{#if project.secondary}
							<img
								class="featured-project__secondary"
								src={`${base}${project.secondary}`}
								alt={project.secondaryAlt}
								loading="lazy"
								decoding="async"
								draggable="false"
							/>
						{/if}
					</div>
					<div class="featured-project__content">
						<p class="featured-project__meta">
							<span>0{index + 1}</span>
							<span>{project.category}</span>
						</p>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<ul aria-label={`${project.title} technologies`}>
							{#each project.technologies.slice(0, 4) as technology (technology)}
								<li>{technology}</li>
							{/each}
						</ul>
						<strong class="featured-project__action">View Project →</strong>
					</div>
				</a>
			{/each}
		</div>

		<a class="featured-work__all text-link" href={resolve('/projects')}
			>View All Projects <span aria-hidden="true">→</span></a
		>
	</section>

	<section class="about-preview" aria-labelledby="about-preview-title">
		<h2 id="about-preview-title">About me</h2>
		<p>
			Most of my projects start with something I want to use myself, from keeping track of workouts
			to organizing my schoolwork. Outside of coding, I enjoy art and photography.
		</p>
		<a class="text-link" href={resolve('/about')}>More About Me <span aria-hidden="true">→</span></a
		>
	</section>

	<section class="contact-cta">
		<h2>Get in touch</h2>
		<p>
			I’m looking for software engineering opportunities. Email me at <a
				href="mailto:chris@vuletich.dev">chris@vuletich.dev</a
			>.
		</p>
		<a class="button button--solid" href={resolve('/contact')}>Get in Touch</a>
	</section>
</main>
