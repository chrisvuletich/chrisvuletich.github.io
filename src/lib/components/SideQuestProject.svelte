<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
	import CaseStudyIndex from '$lib/components/CaseStudyIndex.svelte';
	import { projectSections } from '$lib/data/project-sections';
	import { base, resolve } from '$app/paths';

	const githubUrl = 'https://github.com/chrisvuletich/sidequest';
	const features = [
		[
			'Context-aware suggestions',
			'Uses the current season, month, time of day, and weekend context to choose a fitting idea.'
		],
		[
			'Activity filters',
			'Narrows ideas by time, duration, location, season, energy level, and social setting.'
		],
		['Favorites', 'Saves activities the user wants to revisit.'],
		['Sidequest history', 'Keeps a small local record of completed activities.'],
		[
			'Activity guides',
			'Provides supplies, steps, tips, and optional recommendations for supported ideas.'
		],
		[
			'Seasonal themes',
			'Includes cozy, dark, spring, summer, fall, winter, and system theme options.'
		],
		[
			'Mobile-first navigation',
			'Uses a compact four-tab experience designed around phone-sized screens.'
		],
		[
			'Installable web app',
			'Includes a web manifest and service worker for a more app-like experience.'
		]
	];
	const technicalHighlights = [
		[
			'React 19 + TypeScript',
			'Builds the interactive interface with typed application data and UI state.'
		],
		['vinext + Vite', 'Provides the application framework and development/build tooling.'],
		['Nitro API routes', 'Keeps activity selection and guide requests on the server.'],
		['Supabase + PostgreSQL', 'Stores the curated activity catalog and optional guides.'],
		[
			'Protected catalog access',
			'Uses server-only credentials and Row Level Security so the complete catalog is not exposed to the browser.'
		],
		[
			'Local browser state',
			'Stores favorites, history, skipped suggestions, theme, and seasonal preferences locally.'
		],
		[
			'Responsive PWA design',
			'Combines mobile-first layouts with a manifest and production service worker.'
		],
		[
			'Vercel deployment setup',
			'Uses Nitro’s deployment adapter and repository configuration prepared for Vercel.'
		]
	];
	const screenshots = [
		{ title: 'Discover', file: 'discover.png' },
		{ title: 'Sidequest result', file: 'sidequest-result.png' },
		{ title: 'Extended search', file: 'extended-search.png' },
		{ title: 'Favorites', file: 'favorites.png' },
		{ title: 'History', file: 'history.png' }
	];
</script>

<main class="sidequest-project page">
	<a class="back-link" href={resolve('/projects')}>← Back to projects</a>

	<header class="sidequest-project__hero">
		<div>
			<p class="eyebrow">Personal discovery project</p>
			<h1>SideQuest</h1>
			<p class="sidequest-project__subtitle">
				A cozy, mobile-first activity picker for finding something to do right now.
			</p>
			<p class="sidequest-project__summary">
				SideQuest gives someone a timely activity idea when they want to do something but do not
				know where to start. I built it to explore discovery and small real-world experiences
				instead of creating another general-purpose tracking app.
			</p>
			<div class="button-row">
				<a class="button button--solid" href={githubUrl} target="_blank" rel="noreferrer"
					>GitHub ↗</a
				>
			</div>
		</div>
		<dl class="sidequest-project__facts">
			<div>
				<dt>Status</dt>
				<dd>Active / In Development</dd>
			</div>
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Started</dt>
				<dd>2026</dd>
			</div>
		</dl>
	</header>
	<div class="case-opening"><ProjectPreview slug="sidequest" /></div>
	<CaseStudyIndex sections={projectSections['sidequest']} />

	<section
		class="sidequest-project__section sidequest-project__split"
		aria-labelledby="overview-title"
	>
		<div>
			<h2 id="overview-title">Overview</h2>
		</div>
		<div class="sidequest-project__prose">
			<p>
				SideQuest is an activity picker for moments when someone wants a change of pace but does not
				have a plan. It can choose one context-aware idea or return up to three options based on
				what the user is in the mood for.
			</p>
			<p>
				The goal is intentionally small: make it easier to start an interesting afternoon, evening,
				or weekend without turning the decision into another task.
			</p>
		</div>
	</section>

	<section class="sidequest-project__section" aria-labelledby="why-title">
		<h2 id="why-title">Why I built it</h2>
		<div class="sidequest-project__prose">
			<p>
				There were plenty of days when I wanted to get out of my apartment and do something, but I
				had no idea what to do. Other times, the day just felt stale and I wanted something that
				could make it a little more fun, interesting, or relaxing.
			</p>
			<p>
				Instead of scrolling through lists of places or trying to come up with something myself, I
				decided to build my own solution. SideQuest turns that “what should I do?” moment into
				something simple by giving me an activity based on what I’m in the mood for.
			</p>
		</div>
	</section>

	<section class="sidequest-project__section" aria-labelledby="flow-title">
		<h2 id="flow-title">How it works</h2>
		<ol class="sidequest-project__flow">
			<li>
				<span>01</span>
				<div>
					<h3>Start from the current moment</h3>
					<p>The app reads basic date and time context, such as season and time of day.</p>
				</div>
			</li>
			<li>
				<span>02</span>
				<div>
					<h3>Get one idea or set preferences</h3>
					<p>
						The user can request a suggestion immediately or filter by duration, location, energy,
						social setting, and more.
					</p>
				</div>
			</li>
			<li>
				<span>03</span>
				<div>
					<h3>Open the Sidequest</h3>
					<p>
						A result shows the activity, useful context, and an optional guide when one is
						available.
					</p>
				</div>
			</li>
			<li>
				<span>04</span>
				<div>
					<h3>Save it, complete it, or try another</h3>
					<p>
						Favorites, completed activities, and skipped suggestions stay in the browser for future
						visits.
					</p>
				</div>
			</li>
		</ol>
	</section>

	<section class="sidequest-project__section" aria-labelledby="features-title">
		<h2 id="features-title">Features</h2>
		<div class="sidequest-project__card-grid">
			{#each features as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section class="sidequest-project__section" aria-labelledby="technical-title">
		<h2 id="technical-title">Technical highlights</h2>
		<div class="sidequest-project__technical-list">
			{#each technicalHighlights as [title, text] (title)}<article>
					<h3>{title}</h3>
					<p>{text}</p>
				</article>{/each}
		</div>
	</section>

	<section
		class="sidequest-project__section sidequest-project__split"
		aria-labelledby="learning-title"
	>
		<div>
			<h2 id="learning-title">What I learned</h2>
		</div>
		<div class="sidequest-project__prose">
			<p>
				SideQuest has given me practical experience shaping a larger frontend around one clear
				purpose, working with dynamic data, building narrow server APIs, and protecting backend-only
				credentials. Repeated mobile use has also pushed me to refine navigation, loading states,
				browser history, responsive layouts, and the details that make an interface feel calm rather
				than busy.
			</p>
		</div>
	</section>

	<section
		class="sidequest-project__section sidequest-project__status"
		aria-labelledby="status-title"
	>
		<div>
			<h2 id="status-title">Current status</h2>
		</div>
		<p>
			SideQuest is in active development. The core discovery, filtering, favorites, history, guides,
			themes, API, and catalog systems are implemented, while the experience continues to improve
			through testing and use.
		</p>
	</section>

	<section class="sidequest-project__section" aria-labelledby="screenshots-title">
		<h2 id="screenshots-title">Screenshots</h2>
		<div class="sidequest-project__screenshots">
			{#each screenshots as screenshot (screenshot.file)}
				<figure>
					<div class="sidequest-project__screenshot-frame">
						<img
							src={`${base}/images/project/sidequest/${screenshot.file}`}
							alt={`SideQuest mobile interface showing ${screenshot.title.toLowerCase()}`}
							draggable="false"
						/>
					</div>
					<figcaption>{screenshot.title}</figcaption>
				</figure>
			{/each}
		</div>
	</section>

	<section class="sidequest-project__info" aria-labelledby="info-title">
		<div>
			<h2 id="info-title">Project details</h2>
		</div>
		<dl>
			<div>
				<dt>Type</dt>
				<dd>Personal Project</dd>
			</div>
			<div>
				<dt>Status</dt>
				<dd>Active / In Development</dd>
			</div>
			<div>
				<dt>Started</dt>
				<dd>2026</dd>
			</div>
			<div>
				<dt>Frontend</dt>
				<dd>React 19<br />TypeScript<br />vinext</dd>
			</div>
			<div>
				<dt>Backend</dt>
				<dd>Nitro API routes<br />Supabase</dd>
			</div>
			<div>
				<dt>Database</dt>
				<dd>PostgreSQL</dd>
			</div>
			<div>
				<dt>Hosting</dt>
				<dd>Vercel configuration</dd>
			</div>
			<div>
				<dt>Version Control</dt>
				<dd>Git<br />GitHub</dd>
			</div>
		</dl>
	</section>

	<p class="sidequest-project__back">
		<a class="text-link" href={resolve('/projects')}>← Back to all projects</a>
	</p>
</main>
