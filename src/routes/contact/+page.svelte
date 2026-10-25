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
<main class="content-page contact-page">
	<header class="content-page__intro">
		<h1>Say hello.</h1>
		<p class="content-page__lede">
			I’m looking for software engineering opportunities and people to build projects with.
		</p>
	</header>
	<div class="content-grid content-grid--prose">
		<div>
			<div class="contact-links">
				<a href="https://github.com/chrisvuletich" target="_blank" rel="noreferrer"
					><span>GitHub</span><span aria-hidden="true">↗</span></a
				>
			</div>
			<p class="contact-note">
				I haven’t added my email here yet. For now, you can find me on GitHub.
			</p>
		</div>
	</div>
</main>
