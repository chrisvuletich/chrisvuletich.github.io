<script lang="ts">
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
<main class="content-page">
	<header class="content-page__intro">
		<p class="eyebrow">About</p>
		<h1>Making useful things, one project at a time.</h1>
		<p class="content-page__lede">
			I’m Christopher Vuletich, a computer science student at Kent State University entering my
			senior year. I’m working toward a career in software engineering.
		</p>
	</header>
	<div class="content-grid">
		<p class="eyebrow">Notes from the desk</p>
		<div>
			<section class="content-section">
				<h2>Introduction</h2>
				<p>
					I’m especially interested in front-end development, useful software, AI, and computer
					vision. I enjoy the tangible part of making: taking an idea, giving it a working shape,
					and seeing a real result at the end.
				</p>
				<p>
					My interest in computer science started with games and stories about technology, early
					Scratch projects, and building a website when I was younger. It has grown into an interest
					in software that is practical and helps people.
				</p>
			</section>
			<section class="content-section">
				<h2>How I work</h2>
				<p>
					I value finishing projects. That means keeping a scope honest, learning what a problem
					needs, and staying with the less glamorous details that make a tool feel complete.
				</p>
			</section>
			<section class="content-section">
				<h2>What I’m exploring</h2>
				<p>
					I’m continuing to build stronger interfaces and full-stack projects while exploring AI and
					computer vision through focused experiments. Outside software, I also enjoy artwork and
					photography—other ways of paying attention to detail and making something concrete.
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
