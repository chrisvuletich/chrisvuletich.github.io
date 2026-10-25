<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import CaseStudyIndex from '$lib/components/CaseStudyIndex.svelte';
	import { projectSections } from '$lib/data/project-sections';
	import { base, resolve } from '$app/paths';
	const githubUrl = 'https://github.com/chrisvuletich/workout-log';

	const features = [
		'Secure Authentication',
		'Cloud-Synced Workout History',
		'Custom Exercise Library',
		'Workout Templates',
		'Split Rotation',
		'Workout Calendar',
		'Personal Record Tracking',
		'Exercise Categories',
		'Workout History',
		'Theme Support',
		'Data Export',
		'Responsive Mobile/Desktop Design'
	];

	const screenshots = [
		{ title: 'Sign in', file: 'login.webp' },
		{ title: 'Workout history', file: 'history.webp' },
		{ title: 'Exercise library', file: 'library.webp' },
		{ title: 'Workout calendar', file: 'calendar.webp' }
	];
</script>

<main class="workout-journal page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>
	<header class="workout-journal__hero">
		<div>
			<p class="eyebrow">Personal project</p>
			<h1>Workout Journal</h1>
			<p class="workout-journal__subtitle">Personal Fitness Tracking Application</p>
			<p class="workout-journal__status">Active Personal Project</p>
			<p class="workout-journal__summary">
				A private web application I built to replace the Apple Notes app I had been using for years
				to track my workouts. The goal was to create a system that exactly matched how I train while
				making my workout history accessible from any device.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
					>GitHub ↗</a
				>
			</div>
		</div>
		<dl class="workout-journal__facts">
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Status</dt>
				<dd>Active</dd>
			</div>
			<div>
				<dt>Started</dt>
				<dd>2026</dd>
			</div>
		</dl>
	</header>
	<div class="case-opening"><ProjectPreview slug="workout-journal" /></div>
	<CaseStudyIndex sections={projectSections['workout-journal']} />

	<div class="workout-journal__content">
		<div class="workout-journal__main">
			<section class="workout-journal__section" aria-labelledby="overview-title">
				<h2 id="overview-title">Overview</h2>
				<div class="workout-journal__prose">
					<p>
						Workout Journal is built for my own use, not as a product for other people. It gives me
						one place to log workouts, track progress over time, manage custom exercises, follow
						templates, and look back through previous sessions.
					</p>
					<p>
						Keeping years of workout history together makes it easier to understand my training
						without changing the habits and structure that already work for me.
					</p>
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="why-title">
				<h2 id="why-title">Why I built it</h2>
				<div class="workout-journal__prose">
					<p>
						I tracked every workout in Apple Notes for several years. It was a simple system that
						worked well at first, but eventually it became harder to find previous workouts, compare
						progress, organize exercises, reuse workout splits, and access everything cleanly across
						devices.
					</p>
					<p>
						Rather than search for another workout app, I decided to build one that fits the way I
						train instead of asking me to adapt to someone else’s system.
					</p>
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="features-title">
				<h2 id="features-title">Features</h2>
				<div class="workout-journal__feature-grid">
					{#each features as feature (feature)}<article><h3>{feature}</h3></article>{/each}
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="technical-title">
				<h2 id="technical-title">Technical highlights</h2>
				<div class="workout-journal__prose">
					<p>
						The application is built with SvelteKit and TypeScript, using Supabase for PostgreSQL
						data, authentication, and cloud-backed persistence. Row Level Security keeps each user’s
						data scoped to that user, while Vercel handles deployment. Git and GitHub provide the
						version-control workflow behind the private project.
					</p>
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="learning-title">
				<h2 id="learning-title">What I learned</h2>
				<div class="workout-journal__prose">
					<p>
						Building Workout Journal gave me practical experience designing relational data, working
						with PostgreSQL, setting up authentication flows, and applying Row Level Security. It
						also made cloud deployment and the shape of a larger application feel more concrete than
						they do in a series of smaller projects.
					</p>
					<p>
						Because I use it during real workouts, feedback is immediate. Repeated use has helped me
						make better UX decisions around the details that matter when I am recording a set or
						checking a previous session.
					</p>
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="development-title">
				<h2 id="development-title">Current development</h2>
				<div class="workout-journal__prose">
					<p>
						Workout Journal is actively used and continues to evolve as I notice opportunities to
						improve it during workouts. Future iterations may explore additional themes, more useful
						statistics, greater customization, and continued refinements to the experience.
					</p>
				</div>
			</section>

			<section class="workout-journal__section" aria-labelledby="screenshots-title">
				<h2 id="screenshots-title">Screenshots</h2>
				<div class="workout-journal__screenshots">
					{#each screenshots as screenshot (screenshot.file)}
						<article>
							<img
								src={`${base}/images/project/workout-log/${screenshot.file}`}
								alt={`${screenshot.title} screen in Workout Journal`}
								draggable="false"
							/>
							<strong>{screenshot.title}</strong>
						</article>
					{/each}
				</div>
			</section>
		</div>

		<aside class="workout-journal__sidebar" aria-label="Workout Journal technology details">
			<p class="eyebrow">Technology</p>
			<dl>
				<div>
					<dt>Frontend</dt>
					<dd>SvelteKit<br />TypeScript</dd>
				</div>
				<div>
					<dt>Backend</dt>
					<dd>Supabase</dd>
				</div>
				<div>
					<dt>Database</dt>
					<dd>PostgreSQL</dd>
				</div>
				<div>
					<dt>Authentication</dt>
					<dd>Supabase Auth</dd>
				</div>
				<div>
					<dt>Hosting</dt>
					<dd>Vercel</dd>
				</div>
				<div>
					<dt>Version Control</dt>
					<dd>Git<br />GitHub</dd>
				</div>
			</dl>
		</aside>
	</div>
</main>
