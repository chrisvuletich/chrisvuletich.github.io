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
					I’m a computer science student at Kent State University with an interest in software
					engineering, artificial intelligence, and computer vision. I enjoy taking ideas and
					turning them into software I can actually use.
				</p>
				<p>
					I first got interested in programming through games, Scratch projects, and a website I
					built when I was younger. Since then, I’ve enjoyed exploring different areas of computer
					science and finding ways to build things that solve real problems.
				</p>
			</section>
			<section class="content-section">
				<h2>How I work</h2>
				<p>
					I like learning by building things. Most of my projects start with something I’m curious
					about or a problem I want to solve. I enjoy experimenting, figuring out how things work,
					and improving what I’ve built as I learn more.
				</p>
			</section>
			<section class="content-section">
				<h2>What I’m exploring</h2>
				<p>
					Recently, I’ve been spending more time with Python, OpenCV, and computer vision. I’m
					especially interested in how software can understand and interact with the physical world.
					I also enjoy full-stack development, building personal tools, and experimenting with new
					technologies.
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
			<section class="content-section">
				<h2>Outside of programming</h2>
				<p>
					Outside of computer science, I enjoy hiking, photography, drawing, reading, and spending
					time outdoors. I like having hobbies that get me away from a screen and give me something
					different to explore.
				</p>
			</section>
		</div>
	</div>
</main>
