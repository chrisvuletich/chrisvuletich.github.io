<script lang="ts">
	const canonical = 'https://vuletich.dev/contact';
</script>

<svelte:head
	><title>Contact | Christopher Vuletich</title><meta
		name="description"
		content="Contact Christopher Vuletich about software engineering opportunities and collaborative projects."
	/><link rel="canonical" href={canonical} /><meta
		property="og:title"
		content="Contact | Christopher Vuletich"
	/><meta
		property="og:description"
		content="Software engineering opportunities, collaborative projects, and useful software."
	/><meta property="og:url" content={canonical} /><meta
		name="twitter:card"
		content="summary"
	/></svelte:head
>
<main class="content-page">
	<header class="content-page__intro">
		<p class="eyebrow">Contact</p>
		<h1>Say hello.</h1>
		<p class="content-page__lede">
			I’m interested in software engineering opportunities, collaborative projects, and
			conversations about building useful software.
		</p>
	</header>
	<div class="content-grid">
		<p class="eyebrow">Elsewhere</p>
		<div>
			<div class="contact-links">
				<a href="https://github.com/chrisvuletich" target="_blank" rel="noreferrer"
					><span>GitHub</span><span aria-hidden="true">↗</span></a
				>
			</div>
			<p class="contact-note">
				A direct email address is not published here yet. GitHub is the best place to see my current
				work and get in touch.
			</p>
		</div>
	</div>
</main>
