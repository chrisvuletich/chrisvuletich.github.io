<!-- eslint-disable svelte/no-navigation-without-resolve -->
<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head
	><title>Page not found | Christopher Vuletich</title><meta
		name="description"
		content="The requested page could not be found."
	/></svelte:head
>
<main class="content-page">
	<header class="content-page__intro">
		<p class="eyebrow">404 / Lost page</p>
		<h1>This page isn’t on the workbench.</h1>
		<p class="content-page__lede">The link may have moved, or the page may not exist.</p>
		<p><a class="button button--solid" href={resolve('/')}>Return home</a></p>
	</header>
</main>
