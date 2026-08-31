<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { projects } from '$lib/data/projects';

	const featuredProjectDetails = [
		{
			slug: 'rocky',
			image: '/images/project/rocky/after/new-dash.webp',
			alt: 'Rocky dashboard showing courses, account details, and AI tools',
			fit: 'cover'
		},
		{
			slug: 'sidequest',
			image: '/images/project/sidequest/discover.png',
			alt: 'SideQuest mobile discovery screen for choosing an activity',
			fit: 'contain'
		},
		{
			slug: 'workout-journal',
			image: '/images/project/workout-log/history.webp',
			alt: 'Workout Journal history screen showing previous training sessions',
			fit: 'contain'
		},
		{
			slug: 'password-manager',
			image: '/images/project/password-manager/cli.png',
			alt: 'Password Manager command-line interface showing available vault commands',
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
		<div class="hero__main">
			<p class="eyebrow">Computer Science Student &amp; Software Developer</p>
			<h1 id="hero-title">Chris<br />Vuletich</h1>
			<p class="hero__lede">
				I build useful software, web apps, and tools around problems I find interesting or run into
				myself.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={resolve('/projects')}>View Projects</a>
				<a class="button" href={resolve('/about')}>About Me</a>
			</div>
			<div class="hero__links" aria-label="Elsewhere">
				<a href="https://github.com/chrisvuletich" target="_blank" rel="noreferrer"
					>GitHub <span aria-hidden="true">↗</span></a
				>
			</div>
		</div>
		<aside class="hero__notes" aria-label="Current direction">
			<p class="eyebrow">Right now</p>
			<p>
				Finishing my computer science degree and building projects across full-stack development,
				Python, and computer vision.
			</p>
		</aside>
	</section>

	<section class="site-guide" aria-labelledby="site-guide-title">
		<div class="site-guide__heading">
			<p class="eyebrow">A quick index</p>
			<h2 id="site-guide-title">Around here</h2>
		</div>
		<nav class="site-guide__list" aria-label="Explore the site">
			<a href={resolve('/projects')}>
				<span>01</span>
				<strong>Projects</strong>
				<p>Technical write-ups about things I’ve designed and built.</p>
			</a>
			<a href={resolve('/apps')}>
				<span>02</span>
				<strong>Apps</strong>
				<p>Things I’ve made that you can use, explore, or interact with.</p>
			</a>
			<a href={resolve('/about')}>
				<span>03</span>
				<strong>About</strong>
				<p>A little more about me, my interests, and what I’m working toward.</p>
			</a>
		</nav>
	</section>

	<section class="featured-work" aria-labelledby="featured-title">
		<div class="section-heading">
			<div>
				<p class="eyebrow">Selected work</p>
				<h2 id="featured-title">Featured Projects</h2>
			</div>
			<p>Four projects that show the range of software I like to build.</p>
		</div>

		<div class="featured-projects">
			{#each featuredProjects as project, index (project.slug)}
				<a
					class:featured-project--lead={index === 0}
					class="featured-project"
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
							draggable="false"
						/>
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
		<p class="eyebrow">A little context</p>
		<h2 id="about-preview-title">I like projects where I can see the result.</h2>
		<p>
			I’m a computer science student who enjoys building web apps, useful tools, and creative
			technical projects—especially when the idea starts with a problem I’ve actually encountered.
		</p>
		<a class="text-link" href={resolve('/about')}>More About Me <span aria-hidden="true">→</span></a
		>
	</section>

	<section class="contact-cta">
		<p class="eyebrow">Contact</p>
		<h2>Let’s talk.</h2>
		<p>I’m open to software engineering opportunities and conversations about useful software.</p>
		<a class="button button--solid" href={resolve('/contact')}>Get in Touch</a>
	</section>
</main>
