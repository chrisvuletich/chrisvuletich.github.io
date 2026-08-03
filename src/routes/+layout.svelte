<script lang="ts">
	import { base } from '$app/paths';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteNav from '$lib/components/SiteNav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={`${base}/favicon.svg`} type="image/svg+xml" />
	<meta name="theme-color" content="#f4eee3" />
</svelte:head>

<SiteNav />
{@render children()}
<SiteFooter />
