<script lang="ts">
	import { base, resolve } from '$app/paths';
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
	<div class="content-grid content-grid--prose">
		<div>
			<section class="content-section">
				<h2>Introduction</h2>
				<p>
					I’m interested in software engineering, AI, and computer vision, and I like exploring
					other areas of computer science too. What I enjoy most is solving problems and building
					software that’s useful to other people.
				</p>
				<p>
					I first got into programming through games, Scratch projects, and a website I built when I
					was younger.
				</p>
			</section>
			<section class="content-section">
				<h2>At Kent State</h2>
				<p>
					I’m currently a teaching assistant and grader for Structures of Programming Languages.
				</p>
				<p>
					I’m also pursuing admission to Kent State’s combined bachelor’s/master’s program in
					computer science.
				</p>
			</section>
			<section class="content-section">
				<h2>How I work</h2>
				<p>
					I like learning by building and experimenting. Most of my projects start with a problem I
					want to solve, an idea I want to try, or something I’m curious about.
				</p>
				<p>
					I enjoy figuring out how things work and going back to improve what I’ve built as I learn
					more.
				</p>
			</section>
			<section class="content-section">
				<h2>What I’m exploring</h2>
				<p>
					Lately, I’ve been experimenting with Python and OpenCV. I’m especially interested in
					computer vision and how AI can help software understand and interact with the physical
					world.
				</p>
				<p>
					I also enjoy working on full-stack applications, databases, and practical tools for
					everyday problems.
				</p>
			</section>
			<section class="content-section">
				<h2>Tools and technologies</h2>
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
			<section class="content-section">
				<h2>Outside of programming</h2>
				<p>
					Outside of programming, I enjoy hiking, exploring the outdoors, photography, drawing, and
					reading.
				</p>
				<p>
					If you’re curious about what I’m reading, take a look at <a href={resolve('/bookshelf')}
						>my bookshelf</a
					>.
				</p>
			</section>
		</div>
	</div>
</main>
