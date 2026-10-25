<script lang="ts">
	import { base, resolve } from '$app/paths';
	import { books } from '$lib/data/books';

	const readingPicks = books.filter((book) => book.favorite && book.cover).slice(0, 3);
	const canonical = 'https://vuletich.dev/about';
</script>

<svelte:head
	><title>About | Christopher Vuletich</title><meta
		name="description"
		content="About Christopher Vuletich, a senior computer science student at Kent State University interested in software engineering, AI, and computer vision."
	/><link rel="canonical" href={canonical} /><meta
		property="og:title"
		content="About | Christopher Vuletich"
	/><meta
		property="og:description"
		content="A senior computer science student at Kent State University interested in software engineering, AI, and computer vision."
	/><meta property="og:url" content={canonical} /><meta
		name="twitter:card"
		content="summary"
	/></svelte:head
>
<main class="content-page about-page">
	<header class="content-page__intro">
		<div class="about-page__introduction">
			<h1>About me</h1>
			<p class="content-page__lede">
				I’m Christopher Vuletich, a senior computer science student at Kent State University.
			</p>
		</div>
		<figure class="about-page__photo">
			<img
				src={`${base}/images/about/chris-overlook-960.jpg`}
				srcset={`${base}/images/about/chris-overlook-480.jpg 480w, ${base}/images/about/chris-overlook-960.jpg 960w`}
				sizes="(max-width: 700px) 90vw, 38vw"
				alt="Christopher sitting on a rocky overlook above a wooded valley"
				width="960"
				height="1440"
				decoding="async"
			/>
		</figure>
	</header>
	<section class="about-story" aria-labelledby="about-story-title">
		<h2 id="about-story-title">I like figuring things out<br />and making things work.</h2>
		<div class="about-story__columns">
			<div>
				<p>
					I got into programming through games, Scratch projects, and a website I made when I was
					younger.
				</p>
				<p>
					I’m interested in software engineering, AI, and computer vision, but I like trying a bit
					of everything.
				</p>
			</div>
			<div>
				<p>
					My projects usually start with something I want to try or a problem I want to fix. I like
					making software that’s useful to me or someone else.
				</p>
				<p>I learn a lot by trying things, seeing what works, and coming back to improve them.</p>
			</div>
		</div>
	</section>

	<div class="about-current">
		<section class="about-exploring" aria-labelledby="about-exploring-title">
			<h2 id="about-exploring-title">What I’m curious about</h2>
			<p class="about-exploring__lead">
				I’m curious about how AI can help software make sense of what a camera sees.
			</p>
			<p>
				I’ve been trying things out with Python and OpenCV. I also like building full-stack apps,
				working with databases, and making tools for everyday problems.
			</p>
		</section>
		<section class="about-kent" aria-labelledby="about-kent-title">
			<h2 id="about-kent-title">At Kent State</h2>
			<p>Right now, I’m a teaching assistant and grader for Structures of Programming Languages.</p>
			<p>
				I’m also applying to Kent State’s combined bachelor’s/master’s program in computer science.
			</p>
		</section>
	</div>

	<section class="about-tools" aria-labelledby="about-tools-title">
		<h2 id="about-tools-title">Tools I’ve used</h2>
		<div class="tool-groups">
			<div>
				<h3>Languages</h3>
				<ul>
					<li>Python</li>
					<li>TypeScript</li>
					<li>JavaScript</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
			<div>
				<h3>Frameworks and tools</h3>
				<ul>
					<li>SvelteKit</li>
					<li>React</li>
					<li>Flask</li>
					<li>OpenCV</li>
					<li>Supabase</li>
					<li>PostgreSQL</li>
					<li>Git</li>
					<li>GitHub</li>
					<li>Vite</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="about-outside" aria-labelledby="about-outside-title">
		<div class="about-outside__copy">
			<h2 id="about-outside-title">Outside of programming</h2>
			<p>
				I like hiking, being outdoors, taking photos, drawing, and reading. It’s nice to step away
				from my computer for a while.
			</p>
		</div>
		<div class="about-reading">
			<div class="about-reading__covers">
				{#each readingPicks as book (book.id)}
					<img
						src={`${base}${book.cover}`}
						alt={book.coverAlt ?? `Cover of ${book.title} by ${book.author}`}
						width="200"
						height="300"
						loading="lazy"
						decoding="async"
					/>
				{/each}
			</div>
			<p>Some of my favorite books.</p>
			<a class="text-link" href={resolve('/bookshelf')}>
				My bookshelf <span aria-hidden="true">→</span>
			</a>
		</div>
	</section>
</main>
