<script lang="ts">
	import { base } from '$app/paths';
	const canonical = 'https://vuletich.dev/about';
</script>

<svelte:head
	><title>About | Christopher Vuletich</title><meta
		name="description"
		content="About Christopher Vuletich, a Kent State computer science student focused on useful software and thoughtful interfaces."
	/><link rel="canonical" href={canonical} /><meta
		property="og:title"
		content="About | Christopher Vuletich"
	/><meta
		property="og:description"
		content="A computer science student focused on useful software and thoughtful interfaces."
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
				I’m Christopher Vuletich. I study computer science at Kent State University and want to work
				as a software engineer.
			</p>
		</div>
		<figure class="about-page__photo">
			<img
				src={`${base}/images/landscape/mountains-960.webp`}
				alt="Autumn woodland and snow-covered mountains in the Swiss Alps"
				width="960"
				height="720"
				decoding="async"
			/>
		</figure>
	</header>
	<div class="content-grid content-grid--prose">
		<div>
			<section class="content-section">
				<h2>Introduction</h2>
				<p>
					I’m especially interested in front-end development, AI, and computer vision. I like taking
					an idea and turning it into something I can actually use.
				</p>
				<p>
					I got interested in computer science through games, Scratch projects, and a website I
					built when I was younger. Since then, I’ve become more interested in building software
					that helps with everyday problems.
				</p>
			</section>
			<section class="content-section">
				<h2>How I work</h2>
				<p>
					I try to keep projects small enough to finish. I’d rather get something working, use it,
					and improve it than keep adding features before the basics are done.
				</p>
			</section>
			<section class="content-section">
				<h2>What I’m exploring</h2>
				<p>
					I’m working on my front-end and full-stack skills, and learning more about AI and computer
					vision through personal projects. Outside of coding, I enjoy art and photography.
				</p>
			</section>
			<section class="content-section">
				<h2>Tools and technologies</h2>
				<div class="tool-groups">
					<div>
						<h3>Languages</h3>
						<ul>
							<li>Python</li>
							<li>C++</li>
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
							<li>Flask</li>
							<li>OpenCV</li>
							<li>Git</li>
							<li>GitHub</li>
							<li>Vite</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	</div>
</main>
