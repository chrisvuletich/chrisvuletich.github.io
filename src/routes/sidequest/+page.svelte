<script lang="ts">
	import { base, resolve } from '$app/paths';

	const startSideQuestHref = 'https://sidequest.vuletich.dev';
	const exampleSideQuests = [
		{
			id: 'photograph-one-color',
			category: 'Creative',
			title: 'Photograph one color around your neighborhood',
			description: 'Choose a color, take a slow walk, and collect ten little sightings.',
			meta: ['Good any season', 'Best in the Morning & Afternoon', 'Outdoor', 'Give it an hour']
		},
		{
			id: 'bookstore-cover-challenge',
			category: 'Reading',
			title: 'Visit a bookstore and judge books by their covers',
			description: 'Pick three covers that pull you in and read the first page of each.',
			meta: ['Good any season', 'Best in the Afternoon & Evening', 'Indoor', 'Give it an hour']
		},
		{
			id: 'best-park-bench',
			category: 'Outdoors',
			title: 'Find the best bench in a nearby park',
			description: 'Bring a drink, sit for twenty minutes, and decide if it deserves the title.',
			meta: [
				'Good in Spring & Summer & Fall',
				'Best in the Morning & Afternoon',
				'Outdoor',
				'Give it an hour'
			]
		},
		{
			id: 'sunset-snack-picnic',
			category: 'Mini Adventures',
			title: 'Go for a sunset snack picnic',
			description: 'Pick up a treat and claim a patch of grass before the light disappears.',
			meta: [
				'Good in Spring & Summer & Fall',
				'Best in the Evening',
				'Outdoor',
				'About an hour or two'
			]
		}
	];
	const filters = [
		{ label: 'Energy', options: ['Chill', 'Normal', 'Active'], selected: 'Chill' },
		{ label: 'Location', options: ['Either', 'Indoor', 'Outdoor'], selected: 'Outdoor' },
		{
			label: 'Social',
			options: ['Any', 'Alone', 'With someone', 'Group'],
			selected: 'With someone'
		},
		{
			label: 'Time available',
			options: ['Any', 'Under 30 min', '30–60 min', '1–2 hr', '2+ hr'],
			selected: '30–60 min'
		}
	];

	function questNumber(id: string) {
		return String(
			[...id].reduce((total, character) => (total * 31 + character.charCodeAt(0)) % 999, 17) + 1
		).padStart(3, '0');
	}
</script>

<svelte:head>
	<title>SideQuest | Find Something to Do</title>
	<meta
		name="description"
		content="SideQuest helps you break up a stale day by giving you a simple activity based on what you feel like doing."
	/>
	<meta name="theme-color" content="#1c1d18" />
	<link rel="canonical" href="https://vuletich.dev/sidequest" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:opsz,wght,SOFT@9..144,500..700,30..90&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700&display=swap"
		rel="stylesheet"
	/>
	<meta property="og:title" content="SideQuest | Find Something to Do" />
	<meta
		property="og:description"
		content="Break up a stale day with a simple activity that fits the moment."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://vuletich.dev/sidequest" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<div class="sidequest-product-shell">
	<header class="sidequest-launch__header">
		<div class="sidequest-launch__nav-inner">
			<a class="sidequest-launch__wordmark" href="#top" aria-label="SideQuest home">
				SideQuest<span aria-hidden="true">✦</span>
			</a>
			<nav aria-label="SideQuest navigation">
				<a href="#how-it-works">How It Works</a>
				<a href="#why-sidequest">Why I Built It</a>
				<a class="sidequest-launch__nav-cta" href={startSideQuestHref}>Try SideQuest</a>
			</nav>
		</div>
	</header>

	<main class="sidequest-launch" id="top">
		<section class="sidequest-launch__hero">
			<div class="sidequest-launch__hero-copy">
				<div class="sidequest-launch__welcome-copy">
					<h1>Not sure what to do today?</h1>
					<p>Get a suggestion, or browse ideas based on your mood and how much time you have.</p>
				</div>
				<div class="sidequest-launch__actions">
					<a
						class="sidequest-launch__button sidequest-launch__button--primary"
						href={startSideQuestHref}>Start a SideQuest <span aria-hidden="true">→</span></a
					>
					<a class="sidequest-launch__text-button" href="#how-it-works"
						>or see how it works <span aria-hidden="true">→</span></a
					>
				</div>
			</div>

			<aside class="sidequest-launch__activity-card" aria-label="Example SideQuest">
				<div class="sidequest-launch__card-top">
					<span class="sidequest-launch__stamp">SideQuest № {questNumber('best-park-bench')}</span>
					<span class="sidequest-launch__heart" aria-hidden="true">♡</span>
				</div>
				<p class="sidequest-launch__activity-type">A little Outdoors idea</p>
				<h2>Find the best bench in a nearby park</h2>
				<p>Bring a drink, sit for twenty minutes, and decide if it deserves the title.</p>
				<div class="sidequest-launch__doodle-divider" aria-hidden="true"><span>✦</span><i></i></div>
				<div class="sidequest-launch__meta">
					<span>Good in Spring & Summer & Fall</span>
					<span>Best in the Morning & Afternoon</span>
					<span>Outdoor</span>
					<span>Give it an hour</span>
				</div>
			</aside>
		</section>

		<section class="sidequest-launch__section" id="how-it-works">
			<div class="sidequest-launch__section-heading">
				<h2>How it works</h2>
				<p>Get a random suggestion or choose a few filters.</p>
			</div>
			<ol class="sidequest-launch__steps">
				<li>
					<span>01</span>
					<h3>Pick the moment</h3>
					<p>Ask for something now, or choose your time, energy, location, and company.</p>
				</li>
				<li>
					<span>02</span>
					<h3>Get a SideQuest</h3>
					<p>SideQuest gives you one context-aware idea or a small set of filtered choices.</p>
				</li>
				<li>
					<span>03</span>
					<h3>Go do it</h3>
					<p>Save it, mark it complete, or try another—then make the day more interesting.</p>
				</li>
			</ol>
		</section>

		<section class="sidequest-launch__section sidequest-launch__why" id="why-sidequest">
			<div>
				<h2>Why I built it</h2>
			</div>
			<div class="sidequest-launch__why-card">
				<p>
					I wanted to get out of my apartment or make a stale day more interesting, but often had no
					idea what to do.
				</p>
				<p>I built SideQuest to help me find something to do on those days.</p>
			</div>
		</section>

		<section class="sidequest-launch__section" id="examples" aria-labelledby="examples-title">
			<div class="sidequest-launch__section-heading">
				<h2 id="examples-title">Activity ideas</h2>
				<p>These are real activities from the SideQuest catalog.</p>
			</div>
			<div class="sidequest-launch__examples">
				{#each exampleSideQuests as sideQuest (sideQuest.id)}
					<article class="sidequest-launch__activity-card">
						<div class="sidequest-launch__card-top">
							<span class="sidequest-launch__stamp">SideQuest № {questNumber(sideQuest.id)}</span>
							<span class="sidequest-launch__heart" aria-hidden="true">♡</span>
						</div>
						<p class="sidequest-launch__activity-type">A little {sideQuest.category} idea</p>
						<h3>{sideQuest.title}</h3>
						<p>{sideQuest.description}</p>
						<div class="sidequest-launch__doodle-divider" aria-hidden="true">
							<span>✦</span><i></i>
						</div>
						<div class="sidequest-launch__meta">
							{#each sideQuest.meta as detail (detail)}
								<span>{detail}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section
			class="sidequest-launch__section sidequest-launch__filters"
			aria-labelledby="filters-title"
		>
			<div class="sidequest-launch__filters-copy">
				<h2 id="filters-title">Filter your options</h2>
				<p>
					Keep it spontaneous, or use SideQuest’s real filters to find an activity that fits the
					time and energy you have.
				</p>
			</div>
			<div class="sidequest-launch__filter-groups" aria-label="SideQuest filter preview">
				{#each filters as filter (filter.label)}
					<div>
						<h3>{filter.label}</h3>
						<ul>
							{#each filter.options as option (option)}
								<li class:sidequest-launch__chip--selected={option === filter.selected}>
									{option}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</section>

		<section class="sidequest-launch__section" aria-labelledby="preview-title">
			<div class="sidequest-launch__section-heading sidequest-launch__section-heading--centered">
				<h2 id="preview-title">Screenshots</h2>
				<p>A mobile-first flow for discovering, refining, and saving an idea.</p>
			</div>
			<div class="sidequest-launch__preview">
				<figure class="sidequest-launch__preview-primary">
					<div class="sidequest-launch__phone-frame">
						<img
							src={`${base}/images/project/sidequest/discover.png`}
							alt="SideQuest discover screen with options to get an immediate suggestion or search with filters"
							draggable="false"
						/>
					</div>
					<figcaption>Discover a SideQuest</figcaption>
				</figure>
				<div class="sidequest-launch__preview-supporting">
					<figure>
						<div class="sidequest-launch__phone-frame">
							<img
								src={`${base}/images/project/sidequest/sidequest-result.png`}
								alt="SideQuest activity result with details and actions"
								draggable="false"
							/>
						</div>
						<figcaption>Get one focused idea</figcaption>
					</figure>
					<figure>
						<div class="sidequest-launch__phone-frame">
							<img
								src={`${base}/images/project/sidequest/extended-search.png`}
								alt="SideQuest extended search screen with activity filters"
								draggable="false"
							/>
						</div>
						<figcaption>Choose what fits today</figcaption>
					</figure>
				</div>
			</div>
		</section>

		<section class="sidequest-launch__cta" aria-labelledby="sidequest-cta-title">
			<p class="sidequest-launch__eyebrow">There is still time</p>
			<h2 id="sidequest-cta-title">Not sure what to do today?</h2>
			<p>Pick a SideQuest.</p>
			<a
				class="sidequest-launch__button sidequest-launch__button--primary"
				href={startSideQuestHref}>Start a SideQuest <span aria-hidden="true">→</span></a
			>
		</section>
	</main>

	<footer class="sidequest-launch__footer">
		<div>
			<a href={resolve('/')}>← Chris Vuletich</a>
			<a href={resolve('/projects/sidequest')}
				>See how I built SideQuest <span aria-hidden="true">→</span></a
			>
		</div>
	</footer>
</div>
