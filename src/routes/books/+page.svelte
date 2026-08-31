<script lang="ts">
	import { resolve } from '$app/paths';

	const bookshelfHref = resolve('/bookshelf');
</script>

<svelte:head>
	<title>Bookshelf | Christopher Vuletich</title>
	<meta name="description" content="My personal reading library and the books I've read." />
	<meta http-equiv="refresh" content={`0; url=${bookshelfHref}`} />
	<link rel="canonical" href="https://vuletich.dev/bookshelf" />
</svelte:head>

<main class="content-page books-forward">
	<header class="content-page__intro">
		<p class="eyebrow">Reading library</p>
		<h1>Books moved to Bookshelf.</h1>
		<p class="content-page__lede">
			The reading journal now has its own home. If you are not redirected automatically, use the
			link below.
		</p>
		<p><a class="button button--solid" href={bookshelfHref}>Open Bookshelf</a></p>
	</header>
</main>
