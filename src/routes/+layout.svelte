<script lang="ts">
	import { base } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/favicon.png`} type="image/png" sizes="32x32" />
	<link rel="icon" href={`${base}/favicon.svg?v=mountain`} type="image/svg+xml" sizes="any" />
	<meta name="theme-color" content="#181917" />
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>
<SiteNav />
<div id="main-content" tabindex="-1">
	{@render children()}
</div>
<SiteFooter />
